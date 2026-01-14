import { generateForYouFeedContent, type ForYouFeedContentOutput } from '@/ai/flows/for-you-feed-content-generation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FeedCard } from './feed-card';

// A simple deterministic function to assign images to feed items
function getPlaceholderImage(index: number) {
  return PlaceHolderImages[index % PlaceHolderImages.length];
}

export async function ForYouFeed() {
  let feedData: ForYouFeedContentOutput | null = null;
  try {
    feedData = await generateForYouFeedContent({
      userPreferences: 'adventure, unique architecture, and street food',
      location: 'New York City',
    });
  } catch (error) {
    console.error('Failed to generate For You feed content:', error);
    return (
      <div className="text-center py-10 text-destructive">
        <p>Could not load feed. Please try again later.</p>
      </div>
    );
  }

  if (!feedData || feedData.feedItems.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        <p>Nothing new for you right now. Check back later!</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-8">
      {feedData.feedItems.map((item, index) => {
        const placeholder = getPlaceholderImage(index);
        return (
            <FeedCard 
                key={`${item.title}-${index}`}
                item={{...item, imageUrl: placeholder.imageUrl}}
                imageHint={placeholder.imageHint}
            />
        )
      })}
    </div>
  );
}
