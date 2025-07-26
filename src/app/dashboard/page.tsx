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

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function DashboardPage() {
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
              Dashboard
            </CardTitle>
            <CardContent className="px-0">
              You&apos;re logged in as a{' '}
              <span className="underline text-blue-950 font-medium">
                johndoe@gmail.com
              </span>
            </CardContent>
          </CardHeader>
          <CardFooter>
            <Button
              className="w-full rounded-[1px] hover:cursor-pointer"
              size={'lg'}
            >
              Sign out
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
