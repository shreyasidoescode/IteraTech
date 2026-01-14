import { ForYouFeed } from '@/components/for-you-feed';
import { Logo } from '@/components/icons';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 pt-6">
      <header className="flex items-center gap-2 mb-6">
        <Logo className="h-8 w-8" />
        <h1 className="text-2xl font-bold font-headline text-primary">
          Iteritas
        </h1>
      </header>
      <Suspense fallback={<FeedSkeleton />}>
        <ForYouFeed />
      </Suspense>
    </div>
  );
}

function FeedSkeleton() {
  return (
    <div className="space-y-8">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-card p-4 rounded-lg animate-pulse">
          <div className="w-full h-64 bg-muted rounded-md mb-4"></div>
          <div className="h-6 w-3/4 bg-muted rounded mb-2"></div>
          <div className="h-4 w-full bg-muted rounded"></div>
          <div className="h-4 w-1/2 bg-muted rounded mt-1"></div>
        </div>
      ))}
    </div>
  );
}
