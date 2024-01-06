import classNames from 'classnames/dedupe'
import { type ReactNode, useEffect, useRef } from 'react'

import { ErrorApi } from './ErrorApi'
import { Loading } from './Loading'
import { Message } from './Message'

interface ScrollbarsProps {
  addedHeight?: number
  addPadding?: number
  children: ReactNode
  className?: string
  hasData: boolean
  isError: boolean
  isLoading: boolean
  showMessage: boolean
  onScroll(): void
}

export function Scrollbars({
  children,
  className,
  onScroll,
  isError,
  isLoading,
  hasData,
  showMessage,
}: ScrollbarsProps) {
  const loaderRef = useRef(null)

  useEffect(() => {
    const current = loaderRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0]

        if (target?.isIntersecting) {
          onScroll()
        }
      },
      { threshold: 1 }
    )

    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [onScroll])

  return (
    <div
      className={classNames([
        'scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200 relative h-full w-full',
        className,
      ])}
    >
      {showMessage && isError ? <ErrorApi /> : null}
      {showMessage && !isError && !isLoading && !hasData ? (
        <Message text='No Data' />
      ) : null}
      {children}
      {!showMessage && isLoading ? (
        <div className='py-10'>
          <Loading />
        </div>
      ) : null}
      <div ref={loaderRef}></div>
    </div>
  )
}
