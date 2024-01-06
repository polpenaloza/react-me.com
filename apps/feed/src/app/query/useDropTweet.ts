import { useSession } from 'next-auth/react'

import { api } from '@/trpc/react'

export function useDropTweet() {
  const utils = api.useUtils()
  const tweetDropOne = api.post.delete.useMutation()
  const { data: session } = useSession()

  async function dropTweet(postId: number) {
    if (!session) throw new Error('Not signed in')
    const res = await tweetDropOne.mutateAsync({ id: postId })

    await utils.post.invalidate()

    return res
  }

  return {
    dropTweet,
  }
}
