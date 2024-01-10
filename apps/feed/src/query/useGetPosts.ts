import { useMemo } from 'react'

import { api } from '@/trpc/react'

interface GetPostsProps {
  enabled?: boolean
  search?: string
  sorting?: Array<{ id: string; desc: boolean }>
  userId?: string
}

export function useGetPosts({
  search,
  sorting,
  userId,
  ...otherProps
}: GetPostsProps) {
  const utils = api.useUtils()

  const { data, isFetching, fetchNextPage, ...otherInfiniteQueryProps } =
    api.post.getAll.useInfiniteQuery(
      {
        search,
        sorting,
        userId,
      },
      {
        ...otherProps,
        getNextPageParam: (lastPage) => lastPage.nextItems,
      }
    )

  const flatData = useMemo(
    () => data?.pages?.flatMap((page) => page.items) ?? [],
    [data?.pages]
  )

  return {
    ...otherInfiniteQueryProps,
    isFetching,
    fetchNextPage,
    flatData,
    invalidatePosts: () => utils.post.invalidate(),
  }
}
