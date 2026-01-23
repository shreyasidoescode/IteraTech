import { Card, CardContent } from '@/components/ui/card';

function YouTubePlayer({ title, videoId }: { title: string; videoId: string }) {
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-bold font-headline mb-4">{title}</h2>
        <div className="aspect-video bg-muted rounded-lg">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TraversePage() {
  const youtubeVideos = [
    {
      title: 'Soaring Over the Alps',
      videoId: 'LXb3EKWsInQ',
    },
    {
      title: 'A Walk Through Tokyo at Night',
      videoId: 'IuTDuvYr7f0',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <header className="flex items-center gap-3 my-6">
        <h1 className="text-3xl font-bold font-headline">Traverse</h1>
      </header>
      <div className="space-y-8">
        {youtubeVideos.map((p) => (
          <YouTubePlayer key={p.title} title={p.title} videoId={p.videoId} />
        ))}
      </div>
    </div>
  );
}
