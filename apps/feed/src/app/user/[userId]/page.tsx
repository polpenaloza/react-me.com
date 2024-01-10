'use client'

import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'
import React from 'react'

import { Loading } from '@/components/Loading'
import { useGetPosts } from '@/query/useGetPosts'

const FeedList = dynamic(() => import('@/components/Feed'), {
  ssr: false,
  loading: () => <Loading />,
})
const Scrollbars = dynamic(() => import('@/components/ScrollBars'), {
  ssr: false,
  loading: () => <Loading />,
})

export default function UserProfilePage() {
  const { userId } = useParams()

  const { flatData, isError, isLoading, isFetching, fetchNextPage } =
    useGetPosts({ userId: userId as string, enabled: !!userId })

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
