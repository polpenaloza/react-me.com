import { z } from 'zod'

import { prisma } from '@/server/primsa'
import { publicProcedure } from '@/server/trpc'

export const moviesAutocomplete = publicProcedure
  .input(
    z.object({
      search: z.string().nullish(),
    })
  )
  .query(async ({ input }) => {
    const { search } = input

    const items = await prisma.movie.findMany({
      take: 25,
      where: {
        name: {
          contains: search || '',
        },
      },
    })

    return {
      items,
    }
  })
