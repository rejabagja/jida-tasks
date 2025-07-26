import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">Page not found 😪</p>
      <Button className="mt-6" variant="outline" asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
