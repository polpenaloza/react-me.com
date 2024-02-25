import clsx from 'clsx'

import { Button, ButtonProps } from '@nextui-org/button'

interface iIconButtonProps extends ButtonProps {
  children: React.ReactNode
}

export function IconButton({
  children,
  className,
  ...otherProps
}: iIconButtonProps) {
  return (
    <Button
      {...otherProps}
      className={clsx([className])}
      isIconOnly
      color='danger'
    >
      <>{children}</>
    </Button>
  )
}
