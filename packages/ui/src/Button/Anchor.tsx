import { Link, LinkProps } from '@nextui-org/react'
import { ReactNode } from 'react'
export interface iButtonProps extends LinkProps {
  children: ReactNode
}

export function AnchorButton({ children, ...otherProps }: iButtonProps) {
  return (
    <Link {...otherProps} isExternal>
      <>{children}</>
    </Link>
  )
}
