import { z } from 'zod'

import { prisma } from '@/server/primsa'
import { publicProcedure } from '@/server/trpc'

export const movie = publicProcedure
  .input(
    z.object({
      movieId: z.string(),
    })
  )
  .query(async ({ input }) => {
    const { movieId } = input

    const item = await prisma.movie.findFirst({
      where: {
        movieId,
      },
    })

    return {
      item,
    }
  })
