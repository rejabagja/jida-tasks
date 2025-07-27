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
import { useActionState } from 'react';
import { registerUser } from '@/lib/actions';

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [status, formAction, isPending] = useActionState(registerUser, {
    message: '',
    success: false,
  });
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-serif">
            Register to your account
          </CardTitle>
          <CardDescription>
            Fill the form below to register to your account
          </CardDescription>
          {status.message.length > 0 && (
            <div
              className={cn(
                'text-sm text-center p-4 rounded-sm',
                status.success
                  ? 'text-green-600 bg-green-200'
                  : 'text-destructive bg-red-200'
              )}
            >
              {status.message}
            </div>
          )}
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
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
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full"
                  aria-disabled={isPending}
                  disabled={isPending}
                >
                  {isPending ? 'Registering...' : 'Register'}
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <Link href="/login" className="underline underline-offset-4">
                Sign in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
