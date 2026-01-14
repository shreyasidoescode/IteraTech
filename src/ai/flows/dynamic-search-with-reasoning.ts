'use server';
/**
 * @fileOverview Implements the dynamic search flow with reasoning capabilities.
 *
 * - dynamicSearchWithReasoning - A function that processes user search queries and returns relevant travel options.
 * - DynamicSearchWithReasoningInput - The input type for the dynamicSearchWithReasoning function.
 * - DynamicSearchWithReasoningOutput - The return type for the dynamicSearchWithReasoning function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DynamicSearchWithReasoningInputSchema = z.object({
  query: z
    .string()
    .describe('The user search query, expressed in natural language.'),
});
export type DynamicSearchWithReasoningInput = z.infer<
  typeof DynamicSearchWithReasoningInputSchema
>;

const TravelOptionSchema = z.object({
  type: z.enum(['flight', 'hotel', 'experience']).describe('The type of travel option.'),
  destination: z.string().describe('The destination of the travel option.'),
  details: z.string().describe('A description of the travel option.'),
  relevanceScore: z.number().describe('A score indicating the relevance of the option to the query.'),
});

const DynamicSearchWithReasoningOutputSchema = z.object({
  results: z.array(TravelOptionSchema).describe('The list of travel options.'),
});
export type DynamicSearchWithReasoningOutput = z.infer<
  typeof DynamicSearchWithReasoningOutputSchema
>;

export async function dynamicSearchWithReasoning(
  input: DynamicSearchWithReasoningInput
): Promise<DynamicSearchWithReasoningOutput> {
  return dynamicSearchWithReasoningFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dynamicSearchWithReasoningPrompt',
  input: {schema: DynamicSearchWithReasoningInputSchema},
  output: {schema: DynamicSearchWithReasoningOutputSchema},
  prompt: `You are a travel expert who is great at interpreting user search queries to find relevant travel options.

  The current time of year is: {{currentTimeOfYear}}.

  Here are some common search phrases: {{commonSearchPhrases}}.

  Here are some available flights: {{availableFlights}}.

  Based on the user's query, the time of year, common search phrases, and available flights, determine the most relevant travel options.

  User Query: {{{query}}}`,
});

const dynamicSearchWithReasoningFlow = ai.defineFlow(
  {
    name: 'dynamicSearchWithReasoningFlow',
    inputSchema: DynamicSearchWithReasoningInputSchema,
    outputSchema: DynamicSearchWithReasoningOutputSchema,
  },
  async input => {
    // Fetch the current time of year, common search phrases, and available flights.
    const currentTimeOfYear = new Date().toLocaleDateString(undefined, {
      month: 'long',
      day: 'numeric',
    });
    const commonSearchPhrases = ['cheap flights to hawaii', 'family hotels in orlando']; // In reality, pull this from a database.
    const availableFlights = ['SFO to JFK', 'LAX to HNL']; // In reality, pull this from an API.

    const {output} = await prompt({
      ...input,
      currentTimeOfYear,
      commonSearchPhrases,
      availableFlights,
    });
    return output!;
  }
);
