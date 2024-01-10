import { PrismaAdapter } from '@next-auth/prisma-adapter'
import {
  type DefaultSession,
  getServerSession,
  type NextAuthOptions,
} from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

import { db } from './db'
import { env } from './env'
import { logger } from './logger'

const log = logger('auth')

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      // ...other properties
      // role: UserRole;
    } & DefaultSession['user']
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  debug: env.NODE_ENV === 'development',
  logger: {
    error(code, metadata) {
      log('error >> code: %s, metadata: %o', code, metadata)
    },
    warn(code) {
      log('warn >> code: %s', code)
    },
    debug(code, metadata) {
      log('debug >> code: %s, metadata: %o', code, metadata)
    },
  },
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === 'google' && profile) {
        return Boolean('email_verified' in profile && profile.email_verified)
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
    async redirect({ baseUrl }) {
      return baseUrl
    },
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions)
