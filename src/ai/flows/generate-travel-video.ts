'use server';
/**
 * @fileOverview A flow for generating travel-themed videos using Veo.
 *
 * - generateTravelVideo - Generates a video from a text prompt and returns it as a data URI.
 */

import {ai} from '@/ai/genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {z} from 'genkit';
import {MediaPart} from 'genkit';

async function getVideoAsDataUri(video: MediaPart): Promise<string> {
  if (!video.media?.url) {
    throw new Error('Video URL not found in media part.');
  }
  // Add API key before fetching the video.
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable not set.');
  }

  const videoDownloadResponse = await fetch(
    `${video.media.url}&key=${apiKey}`
  );
  
  if (!videoDownloadResponse.ok || !videoDownloadResponse.body) {
    throw new Error(`Failed to fetch video: ${videoDownloadResponse.statusText}`);
  }

  const buffer = await videoDownloadResponse.arrayBuffer();
  const base64 = Buffer.from(buffer).toString('base64');
  const contentType = video.media.contentType || 'video/mp4';
  return `data:${contentType};base64,${base64}`;
}


const GenerateTravelVideoInputSchema = z.object({
  prompt: z.string().describe('The text prompt for video generation.'),
});
type GenerateTravelVideoInput = z.infer<typeof GenerateTravelVideoInputSchema>;

const GenerateTravelVideoOutputSchema = z.object({
  videoDataUri: z.string().describe('The generated video as a data URI.'),
});
type GenerateTravelVideoOutput = z.infer<typeof GenerateTravelVideoOutputSchema>;

export async function generateTravelVideo(
  input: GenerateTravelVideoInput
): Promise<GenerateTravelVideoOutput> {
  return generateTravelVideoFlow(input);
}

const generateTravelVideoFlow = ai.defineFlow(
  {
    name: 'generateTravelVideoFlow',
    inputSchema: GenerateTravelVideoInputSchema,
    outputSchema: GenerateTravelVideoOutputSchema,
  },
  async ({prompt}) => {
    let {operation} = await ai.generate({
      model: googleAI.model('veo-3.0-generate-preview'),
      prompt: prompt,
      config: {
        aspectRatio: '16:9',
      },
    });

    if (!operation) {
      throw new Error('Expected the model to return an operation');
    }

    // Poll for completion
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      operation = await ai.checkOperation(operation);
    }

    if (operation.error) {
      throw new Error(
        `Failed to generate video: ${operation.error.message}`
      );
    }

    const video = operation.output?.message?.content.find(p => !!p.media);
    if (!video) {
      throw new Error('Failed to find the generated video in the operation result');
    }

    const videoDataUri = await getVideoAsDataUri(video);
    
    return {videoDataUri};
  }
);
