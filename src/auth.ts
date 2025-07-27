import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      async authorize({ email, password }) {
        if (email === 'johndoe@gmail.com' && password === 'password') {
          return { id: '1', name: 'John Doe', email: 'johndoe@gmail' };
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
