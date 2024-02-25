import { ReactNode } from 'react'

import { Button, ButtonProps } from '@nextui-org/button'
interface iButtonProps extends ButtonProps {
  children: ReactNode
}

export function UIButton({ children, className, ...otherProps }: iButtonProps) {
  return (
    <Button {...otherProps} className={className}>
      <>{children}</>
    </Button>
  )
}
