'use client'

import { Loader } from '@workspace/ui/src/Loader'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { useGetPosts } from '@/query/useGetPosts'

const FeedList = dynamic(() => import('@/components/Feed'), {
  ssr: false,
  loading: () => <Loader />,
})
const Scrollbars = dynamic(() => import('@workspace/ui/src/ScrollBars'), {
  ssr: false,
  loading: () => <Loader />,
})

export default function Home() {
  const { flatData, isError, isLoading, isFetching, fetchNextPage } =
    useGetPosts({})

  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  )
}
