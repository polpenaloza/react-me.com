'use client '

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/modal'
import { IconButton } from '../Button/IconButton'

import { IconCancel } from '../Icon/Cancel'
import { IconEdit } from '../Icon/Edit'

interface DialogProps {
  children: React.ReactNode
  title: string
  open?: boolean
}

export function CustomDialog({ title, children, open }: DialogProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <div className='xs:fixed absolute bottom-2 right-2 z-50 flex flex-col gap-2'>
        <IconButton onClick={onOpen}>
          <IconEdit />
        </IconButton>
      </div>
      <Modal
        backdrop='blur'
        isOpen={isOpen || open}
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
              {/* <ModalFooter>
                <button onClick={onClose}>
                  <IconCancel />
                </button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
