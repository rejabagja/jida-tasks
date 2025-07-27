import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      async authorize({ email, password }) {
        const user = await prisma.user.findUnique({
          where: { email: email as string },
        });
        if (user) {
          const isValidPassword = await bcrypt.compare(
            password as string,
            user.password
          );
          if (isValidPassword) {
            return user;
          }
          throw new Error('Invalid Email or Password');
        }
        return null;
      },
    }),
  ],
  callbacks: {
    authorized({ request: { nextUrl }, auth }) {
      const isLoggedin = !!auth?.user;
      const isOnDashboard =
        nextUrl.pathname === '/dashboard' ||
        nextUrl.pathname.startsWith('/dashboard/');

      if (isOnDashboard) {
        return isLoggedin;
      }

      if (
        isLoggedin &&
        (nextUrl.pathname === '/login' || nextUrl.pathname === '/register')
      ) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      return true;
    },
  },
});
