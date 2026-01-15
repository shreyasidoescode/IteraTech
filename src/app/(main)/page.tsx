'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, LoaderCircle, Search } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  dynamicSearchWithReasoning,
  type DynamicSearchWithReasoningOutput,
} from '@/ai/flows/dynamic-search-with-reasoning';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

type SearchState = DynamicSearchWithReasoningOutput | null;

async function searchAction(
  _prevState: SearchState,
  formData: FormData
): Promise<SearchState> {
  const query = formData.get('query') as string;
  if (!query) {
    return { results: [] };
  }
  try {
    const results = await dynamicSearchWithReasoning({ query });
    return results;
  } catch (error) {
    console.error('Search failed:', error);
    return { results: [] };
  }
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" className="absolute right-1 top-1 h-10 w-10" disabled={pending}>
      {pending ? <LoaderCircle className="animate-spin" /> : <ArrowRight />}
    </Button>
  );
}

function SearchResultCard({ item }: { item: DynamicSearchWithReasoningOutput['results'][0] }) {
  const cardContent = (
    <Card className="bg-card/80 hover:bg-card/90 transition-colors">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary font-headline">
          <span className="capitalize">{item.type}</span>
        </CardTitle>
        <CardDescription className="font-bold text-lg text-foreground">
          {item.destination}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{item.details}</p>
        <p className="text-xs text-primary/70 mt-2">Relevance: {Math.round(item.relevanceScore * 100)}%</p>
      </CardContent>
    </Card>
  );

  if (item.type === 'hotel') {
    return <Link href="/login">{cardContent}</Link>;
  }

  return <div className="cursor-pointer">{cardContent}</div>;
}


export default function SearchPage() {
  const [state, formAction] = useActionState(searchAction, null);

  return (
    <div className="container mx-auto px-4 flex flex-col h-full">
      <div className="text-center pt-8 pb-8">
        <h1 className="text-5xl font-bold font-headline tracking-tight">Where to?</h1>
      </div>
      <div className="px-4">
        <form action={formAction} className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            name="query"
            placeholder="e.g., 'A quiet beach getaway for next month'"
            className="pl-10 h-12 text-base"
          />
          <SubmitButton />
        </form>
      </div>

      <ScrollArea className="flex-1 mt-4">
        <div className="p-4 grid gap-4">
          {state?.results && state.results.length > 0 ? (
            state.results.map((item, index) => (
              <SearchResultCard key={index} item={item} />
            ))
          ) : (
             state?.results && (
               <div className="text-center text-muted-foreground py-10">
                 <p>No results found. Try a different search!</p>
               </div>
             )
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
