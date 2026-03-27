import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FeedCard, type FeedItem } from './feed-card';

const staticFeedItems: (FeedItem & { imageHint: string })[] = [
  {
    type: 'hotel',
    title: 'Luxury Stay in Santorini',
    description: 'Experience the breathtaking sunsets and iconic white-washed villages.',
    imageUrl: PlaceHolderImages[0].imageUrl,
    imageHint: PlaceHolderImages[0].imageHint,
  },
  {
    type: 'flight',
    title: 'Direct Flight to Tokyo',
    description: "Explore the vibrant culture and bustling streets of Japan's capital.",
    imageUrl: PlaceHolderImages[1].imageUrl,
    imageHint: PlaceHolderImages[1].imageHint,
  },
  {
    type: 'restaurant',
    title: 'Gourmet Dining Experience',
    description: 'Indulge in a culinary journey with our exclusive tasting menu.',
    imageUrl: PlaceHolderImages[3].imageUrl,
    imageHint: PlaceHolderImages[3].imageHint,
  },
  {
    type: 'hotel',
    title: 'Boutique Hotel in the City',
    description: 'A stylish and cozy stay in the heart of the city.',
    imageUrl: PlaceHolderImages[7].imageUrl,
    imageHint: PlaceHolderImages[7].imageHint,
  },
  {
    type: 'flight',
    title: 'First Class to Paradise',
    description: 'Travel in style and comfort to your dream destination.',
    imageUrl: PlaceHolderImages[9].imageUrl,
    imageHint: PlaceHolderImages[9].imageHint,
  },
];

function ExploreReels() {
  const reels = [
    { id: 'DQYc93f7FJw', title: 'Explore Adventure 1' },
    { id: 'Q_IMLonmMuQ', title: 'Explore Adventure 2' },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold font-headline mb-6">Explore</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {reels.map((reel) => (
          <div 
            key={reel.id} 
            className="relative aspect-[9/16] w-full max-w-[315px] mx-auto bg-muted rounded-2xl overflow-hidden shadow-xl border border-border/40"
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${reel.id}`}
              title={reel.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ForYouFeed() {
  return (
    <div className="space-y-8 py-6">
      <ExploreReels />
      <div className="space-y-8">
        <h2 className="text-3xl font-bold font-headline mb-6">Recommended for You</h2>
        {staticFeedItems.map((item, index) => (
          <FeedCard 
              key={`${item.title}-${index}`}
              item={item}
              imageHint={item.imageHint}
          />
        ))}
      </div>
    </div>
  );
}
