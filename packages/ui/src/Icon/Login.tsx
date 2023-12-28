import { mdiLogin } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconLogin(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon login' path={mdiLogin} />
}
