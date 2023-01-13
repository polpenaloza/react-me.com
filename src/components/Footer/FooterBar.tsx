import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default function FooterBar({ children }: Props) {
  const year = new Date().getFullYear()

  return (
    <footer className='flex items-center justify-center p-2'>
      <div className='text-center text-xs md:mb-0 md:text-left md:text-sm'>
        <b>
          &copy;{year},{` `}
          <a
            target={'_blank'}
            href='https://twitter.com/polpenaloza'
            rel='noopener noreferrer'
          >
            @polpenaloza
          </a>
        </b>
        {children}
      </div>
    </footer>
  )
}
