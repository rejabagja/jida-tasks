'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { LogIn } from 'lucide-react';
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { authenticate } from '@/lib/actions';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2 font-serif">
            <LogIn className="size-6 shrink-0" />
            Login to your account
          </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          {errorMessage && (
            <div className="text-destructive text-sm p-4 bg-red-200 rounded-sm text-center">
              {errorMessage}
            </div>
          )}
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your registered email"
                  name="email"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="******"
                  name="password"
                  required
                />
              </div>
              <input type="hidden" name="redirectTo" value={callbackUrl} />
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full"
                  aria-disabled={isPending}
                  disabled={isPending}
                >
                  {isPending ? 'Logging in...' : 'Login'}
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
