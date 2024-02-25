import clsx from 'clsx'

import { Image } from './Image'
import { Link } from './Link'

export function Logo({
  isBlack,
  size = 'md',
}: {
  isBlack?: boolean
  size?: 'sm' | 'md' | 'lg'
}) {
  /** @variables */
  const imgUrl = '/logo.png'

  /** @render */
  return (
    <Link className={clsx(['flex items-center p-0'])} href='/'>
      <div
        className={clsx(['relative'], {
          invert: isBlack,
          'h-32 w-32': size === 'md',
          'h-20 w-20': size === 'sm',
        })}
      >
        <Image priority src={imgUrl} height={120} width={120} alt='logo' />
      </div>
    </Link>
  )
}
