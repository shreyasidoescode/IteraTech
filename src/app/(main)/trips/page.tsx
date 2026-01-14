import { Heart } from 'lucide-react';

export default function TripsPage() {
  return (
    <div className="container mx-auto px-4 pt-6">
      <header className="flex items-center gap-3 mb-6">
        <h1 className="text-3xl font-bold font-headline">My Trips</h1>
      </header>
      <div className="flex flex-col items-center justify-center text-center py-20 border-2 border-dashed border-border rounded-lg">
        <Heart className="w-16 h-16 text-muted-foreground/50 mb-4" />
        <h2 className="text-xl font-semibold font-headline">Your saved items will appear here.</h2>
        <p className="text-muted-foreground mt-2 max-w-xs">
          Tap the heart icon on any post to save it to your trips.
        </p>
      </div>
    </div>
  );
}
