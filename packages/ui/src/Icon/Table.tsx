import { mdiViewList } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconTable(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon table' path={mdiViewList} />
}
