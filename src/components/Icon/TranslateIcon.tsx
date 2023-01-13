import { mdiTranslate } from '@mdi/js'

import BaseIcon, { BaseProps } from './BaseIcon'

export const TranslateIcon = (props: Omit<BaseProps, 'path'>) => {
  return <BaseIcon {...props} path={mdiTranslate} />
}

export default TranslateIcon
