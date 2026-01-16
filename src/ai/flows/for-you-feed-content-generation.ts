'use server';
/**
 * @fileOverview Generates content for the 'For You' feed, including video content, flight deals,
 * restaurant recommendations, and hotel previews, tailored to the user's preferences.
 *
 * - generateForYouFeedContent - A function that generates the content for the For You feed.
 * - ForYouFeedContentInput - The input type for the generateForYouFeedContent function.
 * - ForYouFeedContentOutput - The return type for the generateForYouFeedContent function.
 */

import {ai} from '@/ai/genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {z} from 'genkit';

const ForYouFeedContentInputSchema = z.object({
  userPreferences: z
    .string()
    .describe('A description of the user preferences to taylor the content.'),
  location: z.string().describe('The current location of the user.'),
});
export type ForYouFeedContentInput = z.infer<typeof ForYouFeedContentInputSchema>;

const ForYouFeedContentOutputSchema = z.object({
  feedItems: z.array(
    z.object({
      type: z.enum(['video', 'flight', 'restaurant', 'hotel']),
      title: z.string().describe('The title of the feed item.'),
      description: z.string().describe('A brief description of the feed item.'),
      imageUrl: z.string().optional().describe('URL for the image of the feed item.'),
      link: z.string().optional().describe('URL for the feed item.'),
    })
  ).describe('An array of feed items.'),
});

export type ForYouFeedContentOutput = z.infer<typeof ForYouFeedContentOutputSchema>;

export async function generateForYouFeedContent(
  input: ForYouFeedContentInput
): Promise<ForYouFeedContentOutput> {
  return forYouFeedContentFlow(input);
}

const forYouFeedContentPrompt = ai.definePrompt({
  name: 'forYouFeedContentPrompt',
  input: {schema: ForYouFeedContentInputSchema},
  output: {schema: ForYouFeedContentOutputSchema},
  prompt: `You are an expert travel assistant that curates a personalized "For You" feed for users, and should be creative and engaging.

  The feed should contain a mix of video content, flight deals, restaurant recommendations, and hotel previews based on the user's preferences and location.

  User Preferences: {{{userPreferences}}}
  User Location: {{{location}}}

  Generate a diverse and captivating feed with a variety of options for the user to explore. Each feed item must contain a type, title, and description. The type should be one of "video", "flight", "restaurant", or "hotel".
  If possible, include an imageUrl and link for each feed item.
  `,
});

const forYouFeedContentFlow = ai.defineFlow(
  {
    name: 'forYouFeedContentFlow',
    inputSchema: ForYouFeedContentInputSchema,
    outputSchema: ForYouFeedContentOutputSchema,
  },
  async input => {
    const {output} = await forYouFeedContentPrompt(input);
    return output!;
  }
);
