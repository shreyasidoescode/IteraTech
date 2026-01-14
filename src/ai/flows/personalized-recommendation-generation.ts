'use server';

/**
 * @fileOverview A personalized recommendation generation AI agent.
 *
 * - generatePersonalizedRecommendations - A function that generates personalized recommendations for flights, hotels, and experiences.
 * - PersonalizedRecommendationsInput - The input type for the generatePersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the generatePersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  userPreferences: z
    .string()
    .describe('The stated preferences of the user, e.g. interested in beaches, history'),
  pastBehavior: z
    .string()
    .describe(
      'A summary of the users past behavior, such as previous flights and hotels booked'
    ),
  realTimeData: z
    .string()
    .describe(
      'Real-time data such as current location, time of day, and trending destinations'
    ),
});
export type PersonalizedRecommendationsInput = z.infer<
  typeof PersonalizedRecommendationsInputSchema
>;

const PersonalizedRecommendationsOutputSchema = z.object({
  flights: z.array(z.string()).describe('A list of recommended flights.'),
  hotels: z.array(z.string()).describe('A list of recommended hotels.'),
  experiences: z
    .array(z.string())
    .describe('A list of recommended experiences.'),
});
export type PersonalizedRecommendationsOutput = z.infer<
  typeof PersonalizedRecommendationsOutputSchema
>;

export async function generatePersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are a travel expert providing personalized recommendations based on user data.

  Past Behavior: {{{pastBehavior}}}
  Stated Preferences: {{{userPreferences}}}
  Real-time Data: {{{realTimeData}}}

  Based on this information, provide a list of flights, hotels, and experiences that the user would be interested in.`,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
