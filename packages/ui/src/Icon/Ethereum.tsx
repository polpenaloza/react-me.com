import { mdiEthereum } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconEthereum(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon ethereum' path={mdiEthereum} />
}
