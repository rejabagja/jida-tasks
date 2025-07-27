'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { Prisma } from '@/generated/prisma';

export const authenticate = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      console.error('ERROR', error.message);
      switch (error.type) {
        case 'CredentialsSignin':
        case 'CallbackRouteError':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
};

export const registerUser = async (
  prevState: { message: string; success: boolean },
  formData: FormData
) => {
  try {
    const hashedPassword = await bcrypt.hash(
      formData.get('password') as string,
      10
    );
    await prisma.user.create({
      data: {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        password: hashedPassword,
      },
    });
    return { success: true, message: 'User registered successfully.' };
  } catch (error) {
    console.error(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return { success: false, message: 'Email already exists.' };
      }
    }
    return { success: false, message: 'Something went wrong.' };
  }
};
