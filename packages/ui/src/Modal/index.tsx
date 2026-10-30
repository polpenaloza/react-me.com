import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'

import { IconButton } from '../Button/IconButton'
import { IconCancel } from '../Icon/Cancel'
import { IconEdit } from '../Icon/Edit'

interface DialogProps {
  children: React.ReactNode
  onOpenChange?: (open: boolean) => void
  title: string
  open?: boolean
}

export function CustomDialog({
  title,
  children,
  open,
  onOpenChange,
}: DialogProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const isOpen = open ?? internalOpen
  const handleOpenChange = (nextOpen: boolean) => {
    if (open === undefined) setInternalOpen(nextOpen)
    onOpenChange?.(nextOpen)
  }

  return (
    <Dialog.Root onOpenChange={handleOpenChange} open={isOpen}>
      <div className='xs:fixed absolute bottom-2 right-2 z-50 flex flex-col gap-2'>
        <Dialog.Trigger asChild>
          <IconButton aria-label='Open editor'>
            <IconEdit />
          </IconButton>
        </Dialog.Trigger>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 z-50 bg-zinc-900/60 backdrop-blur-sm' />
        <Dialog.Content className='fixed left-1/2 top-1/2 z-50 max-h-[min(90vh,48rem)] w-[min(90vw,40rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl bg-white p-0 text-slate-900 shadow-xl dark:bg-slate-900 dark:text-slate-100'>
          <header className='flex items-center justify-between gap-4 border-b border-slate-200 p-4 dark:border-slate-700'>
            <Dialog.Title className='text-lg font-semibold'>
              {title}
            </Dialog.Title>
            <Dialog.Close asChild>
              <IconButton aria-label='Close dialog'>
                <IconCancel />
              </IconButton>
            </Dialog.Close>
          </header>
          <div className='p-4'>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
