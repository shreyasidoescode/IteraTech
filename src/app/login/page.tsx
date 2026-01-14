import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { AppleLogo, GoogleGLogo, Logo } from '@/components/icons';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Link href="/" className="absolute top-4 left-4 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </Link>
      <div className="w-full max-w-sm text-center">
        <Logo className="h-12 w-12 mx-auto mb-4 text-primary" />
        <h1 className="text-3xl font-bold font-headline mb-2">Welcome to Iteritas</h1>
        <p className="text-muted-foreground mb-8">Your next journey starts here.</p>

        <div className="space-y-4">
          <Button variant="outline" className="w-full h-12 text-base">
            <GoogleGLogo className="mr-2 h-5 w-5" />
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full h-12 text-base">
            <AppleLogo className="mr-2 h-5 w-5" />
            Continue with Apple
          </Button>
        </div>

        <div className="flex items-center my-6">
          <Separator className="flex-1" />
          <span className="px-4 text-xs text-muted-foreground">OR</span>
          <Separator className="flex-1" />
        </div>

        <form className="space-y-4 text-left">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" className="h-12 text-base"/>
          </div>
          <Button type="submit" className="w-full h-12 font-bold text-base">Continue with Phone</Button>
        </form>

        <p className="text-xs text-muted-foreground mt-8">
          By continuing, you agree to Iteritas's Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
