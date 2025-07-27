'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button, buttonVariants } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export default function SignoutButton({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  const handleSignout = async () => {
    try {
      toast('Signing out...', {
        duration: 1500,
        position: 'top-center',
      });
      await signOut();
    } catch (error) {
      toast.error('Failed to sign out', {
        duration: 1500,
        position: 'top-center',
      });
      console.log(error);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={cn(buttonVariants(), className)} {...props}>
          {children}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl">
            Are you sure want to signout?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This will sign you out of your account
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSignout}>Yes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
