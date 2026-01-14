'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { BottomNav } from '@/components/bottom-nav';
import { SearchOverlay } from '@/components/search-overlay';
import { Logo } from '@/components/icons';
import { cn } from '@/lib/utils';

function Header() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 300); // fade in after a short delay
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <header
      className={cn(
        'container mx-auto px-4 pt-6 mb-6 flex items-center gap-2 transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
    >
      <Logo className="h-8 w-8" />
      <h1 className="text-2xl font-bold font-headline text-primary">
        Iteritas
      </h1>
    </header>
  );
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SearchOverlay open={isSearchOpen} onOpenChange={setIsSearchOpen} />
      <Header />
      <main className="flex-grow pb-24 md:pb-28">{children}</main>
      <BottomNav onSearchClick={() => setIsSearchOpen(true)} />
    </div>
  );
}
