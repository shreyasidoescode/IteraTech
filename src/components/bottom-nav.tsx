
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Heart, Search, User, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItemProps = {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  onClick?: () => void;
};

function NavItem({ href, icon: Icon, label, isActive, onClick }: NavItemProps) {
  const content = (
    <div
      onClick={onClick}
      className={cn(
        'flex flex-col items-center justify-center gap-1 w-full h-full pt-3 pb-2 transition-colors duration-200',
        isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
      )}
    >
      <Icon className="h-6 w-6" strokeWidth={isActive ? 2.5 : 2} />
      <span className="text-xs font-medium">{label}</span>
    </div>
  );

  return (
    <Link href={href} className="flex-1">
      {content}
    </Link>
  );
}

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: Search, label: 'Search' },
    { href: '/for-you', icon: Compass, label: 'For You' },
    { href: '/trips', icon: Heart, label: 'Trips' },
    { href: '/reviews', icon: MessageSquare, label: 'Reviews' },
    { href: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-lg border-t border-border/60 z-50 md:h-24">
      <div className="flex justify-around items-center h-full max-w-md mx-auto">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            href={item.href}
            icon={item.icon}
            label={item.label}
            isActive={pathname === item.href}
          />
        ))}
      </div>
    </nav>
  );
}
