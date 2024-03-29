import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { logger } from '@workspace/core-js/src/logger'
import { appRouter } from '@workspace/server/src/api/root'
import { createTRPCContext } from '@workspace/server/src/api/trpc'
import { env } from '@workspace/server/src/env'
import { type NextRequest } from 'next/server'

const log = logger('trpc-route')

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a HTTP request (e.g. when you make requests from Client Components).
 */
const createContext = async (req: NextRequest) => {
  return createTRPCContext({
    headers: req.headers,
  })
}

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => createContext(req),
    onError:
      env.NODE_ENV === 'development'
        ? ({ path, error }) => {
            log(`❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`)
          }
        : undefined,
  })

export { handler as GET, handler as POST }
