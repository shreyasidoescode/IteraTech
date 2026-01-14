'use client';

import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, LoaderCircle, Search } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  dynamicSearchWithReasoning,
  type DynamicSearchWithReasoningOutput,
} from '@/ai/flows/dynamic-search-with-reasoning';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

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
    <Button type="submit" size="icon" className="absolute right-1 top-1 h-8 w-8" disabled={pending}>
      {pending ? <LoaderCircle className="animate-spin" /> : <ArrowRight />}
    </Button>
  );
}

export function SearchOverlay({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [state, formAction] = useFormState(searchAction, null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="h-screen w-screen max-w-full bg-background/95 backdrop-blur-sm p-0 flex flex-col"
      >
        <SheetHeader className="p-4 pt-6 text-left">
          <SheetTitle className="font-headline text-3xl">
            What are you looking for?
          </SheetTitle>
        </SheetHeader>
        <div className="p-4">
          <form action={formAction} className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              name="query"
              placeholder="e.g., 'A quiet beach getaway for next month'"
              className="pl-10 h-10 text-base"
            />
            <SubmitButton />
          </form>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-4 grid gap-4">
            {state?.results && state.results.length > 0 ? (
              state.results.map((item, index) => (
                <Card key={index} className="bg-card/80">
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
      </SheetContent>
    </Sheet>
  );
}
