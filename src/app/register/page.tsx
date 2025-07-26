import { RegisterForm } from '@/components/register-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
};

export default function RegisterPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Button asChild variant={'ghost'} className="mb-4">
          <Link href={'/'}>
            {' '}
            <ArrowLeft />
            Back to Home
          </Link>
        </Button>
        <RegisterForm />
      </div>
    </div>
  );
}
