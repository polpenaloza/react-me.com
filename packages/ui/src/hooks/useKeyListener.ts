import { useRef } from 'react'
import { useEventListener } from 'usehooks-ts'

import { logger } from '../../logger'

const log = logger('keypress')

interface iKeyListener {
  key: string
  callback(): void
}

export function useKeyListener({ key, callback }: iKeyListener) {
  const documentRef = useRef<Document>(document)

  const keyDownHandler = (event: KeyboardEvent) => {
    log('pressed: %s', event.key)

    if (event.key === key) {
      event.preventDefault()
      callback()
    }
  }

  useEventListener('keydown', keyDownHandler, documentRef)
}
