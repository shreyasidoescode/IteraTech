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


export function ForYouFeed() {
  return (
    <div className="space-y-8">
      {staticFeedItems.map((item, index) => (
        <FeedCard 
            key={`${item.title}-${index}`}
            item={item}
            imageHint={item.imageHint}
        />
      ))}
    </div>
  );
}
