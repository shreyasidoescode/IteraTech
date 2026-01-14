import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 pt-6">
      <header className="flex items-center gap-3 mb-6">
        <h1 className="text-3xl font-bold font-headline">Profile</h1>
      </header>
      <div className="flex flex-col items-center justify-center text-center py-20 border-2 border-dashed border-border rounded-lg">
        <User className="w-16 h-16 text-muted-foreground/50 mb-4" />
        <h2 className="text-xl font-semibold font-headline">Join Iteritas</h2>
        <p className="text-muted-foreground mt-2 max-w-xs">
          Sign up to save trips, get personalized recommendations, and book your next adventure.
        </p>
        <Button asChild className="mt-6 font-bold">
          <Link href="/login">Login or Sign Up</Link>
        </Button>
      </div>
    </div>
  );
}
