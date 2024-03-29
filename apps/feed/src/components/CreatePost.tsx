'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { api } from '@/trpc/react'

import { CustomDialog } from './Dialog'

export function CreatePost() {
  const utils = api.useUtils()
  const router = useRouter()
  const [name, setName] = useState('')

  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      router.refresh()
      await utils.post.invalidate()
      setName('')
    },
  })

  return (
    <CustomDialog title='New Post'>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          createPost.mutate({ name })
        }}
        className='flex w-full flex-col gap-2'
      >
        <div className='relative w-full'>
          <input
            type='text'
            id='website-admin'
            className='block w-full min-w-0 flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  '
            placeholder='What is happening?'
            disabled={createPost.isPending}
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <button
            type='submit'
            className='absolute end-0 top-0 h-full rounded-e-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'
          >
            {createPost.isPending ? 'Posting...' : 'Post'}
          </button>
        </div>
      </form>
    </CustomDialog>
  )
}
