'use client';
import { useState } from 'react';
import { BottomNav } from '@/components/bottom-nav';
import { SearchOverlay } from '@/components/search-overlay';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SearchOverlay open={isSearchOpen} onOpenChange={setIsSearchOpen} />
      <main className="flex-grow pb-24 md:pb-28">{children}</main>
      <BottomNav onSearchClick={() => setIsSearchOpen(true)} />
    </div>
  );
}
