'use client';
import { Button } from '@/components/ui/button';
import { User, Sun, Moon, Laptop, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/components/theme-provider';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Twitter } from '@/components/icons';

function ThemeSwitcher() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 pt-6">
      <header className="flex items-center justify-between gap-3 mb-6">
        <h1 className="text-3xl font-bold font-headline">Profile</h1>
        <ThemeSwitcher />
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

      <Separator className="my-8" />

      <div className="text-center">
        <h2 className="text-2xl font-bold font-headline mb-4">About Us</h2>
        <div className="text-muted-foreground space-y-4">
          <div>
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <a href="tel:+1234567890" className="flex items-center justify-center gap-2 hover:text-primary">
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:contact@iteritas.com" className="flex items-center justify-center gap-2 hover:text-primary">
              <Mail className="w-4 h-4" />
              <span>contact@iteritas.com</span>
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Address</h3>
            <p>123 Travel Lane, Adventure City, World</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Follow Us</h3>
            <div className="flex justify-center gap-4 mt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
