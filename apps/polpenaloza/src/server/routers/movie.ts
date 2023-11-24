import { z } from 'zod'

import { prisma } from 'apps/polpenaloza/src/server/primsa'
import { publicProcedure } from 'apps/polpenaloza/src/server/trpc'

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
