'use client '

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/modal'
import { FaRegEdit } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

interface DialogProps {
  children: React.ReactNode
  title: string
}

export function CustomDialog({ title, children }: DialogProps) {
  const { isOpen, onOpen, onOpenChange, getButtonProps } = useDisclosure()

  console.log({ isOpen, props: getButtonProps() })

  return (
    <>
      <div className='xs:fixed absolute bottom-2 right-2 z-50 flex flex-col gap-2'>
        <button
          className='flex h-14 w-14 items-center justify-center rounded-full bg-pink-700'
          onClick={onOpen}
        >
          <FaRegEdit />
        </button>
      </div>
      <Modal
        backdrop='blur'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            'bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
              <ModalFooter>
                <button onClick={onClose}>
                  <MdClose />
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
