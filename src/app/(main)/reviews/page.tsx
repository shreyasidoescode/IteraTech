
import { MessageSquare } from 'lucide-react';

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-4 pt-6">
      <header className="flex items-center gap-3 mb-6">
        <h1 className="text-3xl font-bold font-headline">Reviews</h1>
      </header>
      <div className="flex flex-col items-center justify-center text-center py-20 border-2 border-dashed border-border rounded-lg">
        <MessageSquare className="w-16 h-16 text-muted-foreground/50 mb-4" />
        <h2 className="text-xl font-semibold font-headline">No reviews yet.</h2>
        <p className="text-muted-foreground mt-2 max-w-xs">
          Be the first to share your thoughts on your travels!
        </p>
      </div>
    </div>
  );
}
