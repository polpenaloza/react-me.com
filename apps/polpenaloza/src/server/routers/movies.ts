import { z } from 'zod'

import { prisma } from '@/server/primsa'
import { publicProcedure } from '@/server/trpc'

export const movies = publicProcedure
  .input(
    z.object({
      cursor: z.number().nullish(),
      limit: z.number().min(1).max(100).nullish(),
      search: z.string().nullish(),
      sorting: z
        .array(z.object({ id: z.string(), desc: z.boolean() }))
        .nullish(),
    })
  )
  .query(async ({ input }) => {
    const limit = input.limit ?? 25
    const { cursor, search, sorting } = input

    const skip = cursor ?? 0

    const items = await prisma.movie.findMany({
      take: limit,
      skip,
      where: {
        name: {
          contains: search || '',
        },
      },
      orderBy: sorting
        ? sorting.map((sort) => ({ [sort.id]: sort.desc ? 'desc' : 'asc' }))
        : [{ name: 'asc' }],
    })
    const count = await prisma.movie.count()

    let nextItems: typeof cursor | undefined = undefined

    if (items.length === limit) {
      nextItems = items.length + skip
    }

    return {
      items,
      count,
      nextItems,
    }
  })
