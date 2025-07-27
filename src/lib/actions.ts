'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export const authenticate = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
};

export const registerUser = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    throw new Error('Something went wrong.');
    console.log(formData);
  } catch (error) {
    console.error(error);
    return 'Something went wrong.';
  }
};
