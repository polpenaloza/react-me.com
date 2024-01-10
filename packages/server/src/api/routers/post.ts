import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { DEFAULT_LIMIT } from '../../_constants'
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '../../api/trpc'
import { logger } from '../../logger'
import { ratelimit } from '../../rate-limit-upstash'

const log = logger('api:post')

export const postRouter = createTRPCRouter({
  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const { user } = ctx.session

      const { success } = await ratelimit.limit(user.id)

      log('success %s', success)
      if (!success) throw new TRPCError({ code: 'TOO_MANY_REQUESTS' })

      return ctx.db.post.delete({
        where: {
          id: input.id,
        },
      })
    }),
  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const { user } = ctx.session

      const { success } = await ratelimit.limit(user.id)

      log('success %s', success)
      if (!success) throw new TRPCError({ code: 'TOO_MANY_REQUESTS' })

      return ctx.db.post.create({
        data: {
          name: input.name,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      })
    }),

  getAll: publicProcedure
    .input(
      z.object({
        userId: z.string().nullish(),
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.number().nullish(),
        search: z.string().nullish(),
        sorting: z
          .array(z.object({ id: z.string(), desc: z.boolean() }))
          .nullish(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { cursor, sorting, search } = input
      const limit = input.limit ?? DEFAULT_LIMIT
      const skip = cursor ?? 0
      const orderBy = sorting ?? [{ id: 'createdAt', desc: true }]

      const query = {
        skip,
        take: limit,
        orderBy: orderBy.reduce(
          (memo, order) => ({
            [order.id]: order.desc ? 'desc' : 'asc',
          }),
          {}
        ),
        where: {
          name: {
            contains: search ?? '',
          },
        },
        include: { createdBy: true },
      }

      if (input.userId) {
        Object.assign(query, {
          where: {
            ...query.where,
            createdById: input.userId,
          },
        })
      }

      const items = await ctx.db.post.findMany({
        ...query,
      })

      let nextItems: typeof cursor | undefined = undefined

      if (items.length === limit) {
        nextItems = items.length + skip
      }

      return {
        items,
        nextItems,
      }
    }),
  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: 'desc' },
      where: { createdBy: { id: ctx.session.user.id } },
    })
  }),
})
