import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Share2 } from 'lucide-react';

export type FeedItem = {
  type: 'video' | 'flight' | 'restaurant' | 'hotel';
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
};

export function FeedCard({ item, imageHint }: { item: FeedItem, imageHint: string }) {
  return (
    <Card className="overflow-hidden border-border/60 bg-card/80">
      {item.imageUrl && (
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover"
            data-ai-hint={imageHint}
          />
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="font-headline text-2xl leading-tight">{item.title}</CardTitle>
          <Badge variant="secondary" className="capitalize shrink-0 bg-accent text-accent-foreground">{item.type}</Badge>
        </div>
        <CardDescription className="text-muted-foreground pt-1">{item.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
            <span className="sr-only">Save</span>
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
        <Button className="bg-primary text-primary-foreground font-bold hover:bg-primary/90">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
