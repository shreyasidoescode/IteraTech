import { Suspense } from 'react';
import { generateTravelVideo } from '@/ai/flows/generate-travel-video';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

async function VideoDisplay({ prompt, title }: { prompt: string; title: string }) {
  let videoData: { videoDataUri: string } | null = null;
  let error: string | null = null;

  try {
    videoData = await generateTravelVideo({ prompt });
  } catch (e: any) {
    console.error(`Failed to generate video for prompt "${prompt}":`, e);
    if (e.message && e.message.includes('billing enabled')) {
      error =
        'This feature requires a billing-enabled Google Cloud account. Please enable billing for your project to generate videos.';
    } else {
      error = e.message || 'An unknown error occurred while generating the video.';
    }
  }

  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-bold font-headline mb-4">{title}</h2>
        {error ? (
          <div className="aspect-video bg-muted rounded-lg flex flex-col items-center justify-center text-center p-4">
            <p className="font-semibold text-destructive">Could Not Generate Video</p>
            <p className="text-muted-foreground mt-2 text-sm">{error}</p>
          </div>
        ) : videoData ? (
          <video
            controls
            autoPlay
            muted
            loop
            className="w-full aspect-video rounded-lg bg-black"
            src={videoData.videoDataUri}
          >
            Your browser does not support the video tag.
          </video>
        ) : null}
      </CardContent>
    </Card>
  );
}

function VideoSkeleton() {
  return (
    <Card>
      <CardContent className="p-4">
        <Skeleton className="h-8 w-3/4 mb-4" />
        <Skeleton className="w-full aspect-video rounded-lg" />
      </CardContent>
    </Card>
  );
}

export default function TraversePage() {
  const videoPrompts = [
    {
      title: 'Soaring Over the Alps',
      prompt: 'A drone shot flying over the Swiss Alps, revealing snow-capped peaks and green valleys.',
    },
    {
      title: 'Sunset Beach Walk',
      prompt: 'A person walking on a secluded tropical beach at sunset, with golden light reflecting on the water.',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <header className="flex items-center gap-3 my-6">
        <h1 className="text-3xl font-bold font-headline">Traverse</h1>
      </header>
      <div className="space-y-8">
        {videoPrompts.map((p) => (
          <Suspense key={p.title} fallback={<VideoSkeleton />}>
            <VideoDisplay prompt={p.prompt} title={p.title} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}
