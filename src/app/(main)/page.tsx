import { ForYouFeed } from '@/components/for-you-feed';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
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
