'use client '

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import { MdClose } from 'react-icons/md'

interface DialogProps {
  open?: boolean
  children: React.ReactNode
  title: string
}

export function CustomDialog({ open, title, children }: DialogProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure({ isOpen: !!open })

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        {/* Full-screen container to center the panel */}
        <div className='fixed inset-0 flex w-screen  items-center justify-center sm:p-4'>
          {/* The actual dialog panel  */}
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='flex flex-col gap-1'>
                  {title}
                </ModalHeader>

                <ModalBody>{children}</ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>
                    <MdClose />
                  </Button>
                  <Button color='primary' onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </div>
      </Modal>
    </>
  )
}
