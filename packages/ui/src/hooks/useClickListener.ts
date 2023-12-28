import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import { logger } from '../../logger'

const log = logger('keypress')

interface iKeyListener {
  callback(): void
  idCaller: string
}

export function useClickListener({ callback, idCaller }: iKeyListener) {
  const ref = useRef(null)

  const handleClickOutside = () => {
    log('clicked outside idCaller %s ', idCaller)
    callback()
  }

  useOnClickOutside(ref, handleClickOutside)

  return [ref]
}
