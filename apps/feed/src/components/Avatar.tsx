import classNames from 'classnames/dedupe'

import { Image } from './Image'

interface AvatarProps {
  imgSrc?: string | null
  name?: string | null
  size?: string
}

export function Avatar({ imgSrc, name, size }: AvatarProps) {
  const [first, second] = (name ?? 'N A').split(' ')

  const avatarSize = size ?? 'h-10 w-10'

  return (
    <div className={classNames(['relative', avatarSize])}>
      <div className='bg-purple group table h-full w-full cursor-pointer overflow-hidden rounded-full text-center shadow-inner ring-2 ring-gray-300'>
        <span className='hidden align-middle font-bold text-white group-hover:table-cell'>
          {first?.charAt(0)}
          {second ? second.charAt(0) : first?.charAt(1)}
        </span>
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={`avatar ${name}`}
            className='visible h-full w-full object-cover object-center group-hover:hidden'
          />
        ) : (
          <div
            className={classNames([
              'bg-gray-10 relative overflow-hidden rounded-full',
              avatarSize,
            ])}
          >
            <svg
              className='absolute -left-1 h-12 w-12 text-gray-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}
