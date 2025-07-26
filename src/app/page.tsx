import Container from '@/components/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Container className="px-5 md:px-0 max-w-2xl h-screen flex flex-col justify-center">
      <h1 className="text-4xl font-bold font-serif">
        Welcome to JIDA Tasks 8 🥰
      </h1>
      <p className="font-sans text-lg mt-4">
        The aim of this task is to create a simple authentication system using
        next-auth.
      </p>
      <Button className="font-sans w-fit mt-4" asChild>
        <Link href="/login">Sign In Now 🚀</Link>
      </Button>
    </Container>
  );
}
