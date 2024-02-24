'use client'

import { type Post, type User } from '@prisma/client'
import { Avatar } from '@workspace/ui/src/Avatar'
import { Loading } from '@workspace/ui/src/Loader/Loading'
import { type DefaultSession } from 'next-auth'
import { useState } from 'react'
import { MdDelete } from 'react-icons/md'

import { useDropTweet } from '@/query/useDropTweet'
import { formatDateRelative } from '@/utils/format-date-relative'

import { CustomDialog } from './Dialog'
import { Image } from './Image'
import { Link } from './Link'

interface Session extends DefaultSession {
  user: {
    id: string
  } & DefaultSession['user']
}

export interface TweetProps extends Post {
  createdBy: User
  name: string
  session?: Session | null
}

export function Tweet({ createdAt, createdBy, name, session, id }: TweetProps) {
  const username = createdBy?.name?.toLocaleLowerCase().replace(/ /g, '_')
  const [showModal, setShowModal] = useState(false)
  const [isBusy, setIsBusy] = useState(false)
  const { dropTweet } = useDropTweet()

  function handleShowModal() {
    setShowModal(true)
  }

  function handleHideModal() {
    setShowModal(false)
  }

  async function handleDropTweet() {
    setIsBusy(true)
    await dropTweet(id)
    setIsBusy(false)
  }

  return (
    <div className='flex w-full items-start'>
      <div className='flex-shrink-0'>
        <Link href={`/user/${createdBy.id}`}>
          <Avatar name={createdBy.name ?? undefined} size='h-8 w-8'>
            <Image src={createdBy.image as string} alt={'name'} fit />
          </Avatar>
        </Link>
      </div>
      <button
        className='min-w-0 flex-1 pl-4 text-left'
        type='button'
        onClick={handleShowModal}
        disabled={isBusy}
      >
        <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
          {createdBy.name}
          <span className='italix hidden px-2 text-xs text-gray-600/80 sm:inline-block'>
            @{username}
          </span>
        </p>
        <p className='text-sm text-gray-500 dark:text-gray-400'>{name}</p>
      </button>
      <div className='xs:text-base flex h-full items-start text-xs font-semibold text-gray-900 dark:text-white'>
        {formatDateRelative(createdAt)} ago
      </div>

      <CustomDialog
        isOpen={showModal}
        setIsOpen={handleHideModal}
        title='Tweet'
      >
        <div className='grid grid-flow-row-dense grid-cols-4 items-center gap-2'>
          <div className='col-span-3'>
            <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
              {createdBy.name}
              <span className='italix hidden px-2 text-xs text-gray-600/80 sm:inline-block'>
                @{username}
              </span>
            </p>
            <p className='text-sm text-gray-500 dark:text-gray-400'>{name}</p>
          </div>
          {session?.user?.id === createdBy.id ? (
            <div className='relative flex justify-end'>
              <button
                onClick={handleDropTweet}
                className='flex h-8 w-8 items-center justify-center rounded-full border border-pink-800 bg-pink-600 text-xl'
                disabled={isBusy}
              >
                <MdDelete />
              </button>
              {isBusy ? (
                <div className='absolute'>
                  <Loading />
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </CustomDialog>
    </div>
  )
}
