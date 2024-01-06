'use client'

import { useSession } from 'next-auth/react'

import { Tweet, type TweetProps } from './Tweet'

interface FeedListProps {
  list: TweetProps[]
}

export function FeedList({ list }: FeedListProps) {
  const { data: session } = useSession()

  return (
    <div className='flow-root'>
      <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
        {list?.map((post) => {
          return (
            <li className='py-3 sm:py-4' key={`tweet-${post.id}`}>
              <Tweet {...post} session={session} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
