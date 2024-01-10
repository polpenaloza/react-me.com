'use client'

import { FeedList } from '@/components/Feed'
import { Scrollbars } from '@/components/ScrollBars'
import { useGetPosts } from '@/query/useGetPosts'

export default function Home() {
  const { flatData, isError, isLoading, isFetching, fetchNextPage } =
    useGetPosts({})

  return (
    <div className='relative flex w-full flex-col items-center justify-center'>
      <Scrollbars
        showMessage={Boolean(isError)}
        isError={isError}
        isLoading={Boolean(isLoading || isFetching)}
        hasData={Boolean(!isLoading && flatData?.length > 0)}
        onScroll={fetchNextPage}
      >
        <FeedList list={flatData} />
      </Scrollbars>
    </div>
  )
}
