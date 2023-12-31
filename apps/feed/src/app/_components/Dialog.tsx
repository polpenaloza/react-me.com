import { Dialog } from '@headlessui/react'
import { MdClose } from 'react-icons/md'

interface DialogProps {
  isOpen: boolean
  setIsOpen: () => void
  children: React.ReactNode
  title: string
}

export function CustomDialog({
  isOpen,
  setIsOpen,
  title,
  children,
}: DialogProps) {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen()} className='relative z-50'>
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />

      {/* Full-screen container to center the panel */}
      <div className='fixed inset-0 flex w-screen  items-center justify-center sm:p-4'>
        {/* The actual dialog panel  */}
        <Dialog.Panel className='relative mx-auto h-full w-full rounded-xl border-2 border-violet-950 bg-violet-900 p-8 sm:h-auto sm:max-w-sm'>
          <button
            className='absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 text-xl font-bold text-white'
            onClick={() => setIsOpen()}
          >
            <MdClose />
          </button>
          <Dialog.Title>{title}</Dialog.Title>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
