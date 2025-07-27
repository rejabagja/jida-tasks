import Container from '@/components/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { auth } from '@/auth';
import { User } from 'lucide-react';
import SignoutButton from '@/components/signout-button';
import { LogOut, LayoutDashboard } from 'lucide-react';

export default async function HomePage() {
  const session = await auth();
  return (
    <Container className="px-5 md:px-0 max-w-2xl h-screen flex flex-col justify-center">
      <h1 className="text-3xl md:text-4xl font-bold font-serif">
        Welcome to JIDA Tasks 8 🥰
      </h1>
      <p className="font-sans text-lg mt-4">
        The aim of this task is to create a simple authentication system using
        next-auth.
      </p>
      {session?.user && (
        <div className="mt-6">
          <p className="font-mono text-lg mt-4 text-right text-blue-950 font-medium">
            Welcome back,{' '}
            <span className="inline-flex items-center text-sm">
              <User />
              {session.user.name}
            </span>
          </p>
          <div className="flex justify-center items-center mt-6 gap-4">
            <Button
              className="rounded-[0px]"
              asChild
              variant={'outline'}
              size={'lg'}
            >
              <Link href="/dashboard">
                <LayoutDashboard /> Dashboard
              </Link>
            </Button>
            <SignoutButton className="rounded-[0px]">
              Sign out <LogOut />
            </SignoutButton>
          </div>
        </div>
      )}
      {!session?.user && (
        <div className="font-sans mt-4">
          You are not logged in. Please{' '}
          <Link
            href="/login"
            className="text-blue-800 hover:underline hover:text-blue-950 underline-offset-4 underline- transition-all"
          >
            login
          </Link>{' '}
          🚀 to continue.
        </div>
      )}
    </Container>
  );
}
