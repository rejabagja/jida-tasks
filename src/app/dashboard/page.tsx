import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { auth } from '@/auth';
import { redirect, RedirectType } from 'next/navigation';
import SignoutButton from '@/components/signout-button';
import { LogOut, LayoutDashboard } from 'lucide-react';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) return redirect('/login', RedirectType.replace);
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full min-w-sm max-w-lg font-sans">
        <Card>
          <CardHeader>
            <Button
              asChild
              variant={'ghost'}
              className="mb-2 w-fit text-muted-foreground"
              size={'sm'}
            >
              <Link href={'/'}>
                {' '}
                <ArrowLeft />
                Go to Home
              </Link>
            </Button>
            <CardTitle className="text-2xl text-gray-800 font-serif">
              <div className="flex items-center gap-2">
                <LayoutDashboard /> Dashboard
              </div>
            </CardTitle>
            <CardContent className="px-0">
              You&apos;re logged in as a{' '}
              <Suspense fallback={<div>Loading...</div>}>
                <span className="underline text-blue-950 font-medium">
                  {session.user.email}
                </span>
              </Suspense>
            </CardContent>
          </CardHeader>
          <CardFooter>
            <SignoutButton className="w-full">
              Sign out
              <LogOut />
            </SignoutButton>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
