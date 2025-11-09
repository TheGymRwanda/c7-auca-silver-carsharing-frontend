import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Button from '@/UI/Button'

interface SimpleDeleteDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => Promise<void>
  carName: string
}

export default function SimpleDeleteDialog({
  isOpen,
  onClose,
  onConfirm,
  carName,
}: SimpleDeleteDialogProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await onConfirm()
    } catch (error) {
      // Error handling is done by parent component via toast
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Dialog open={isOpen} onClose={isDeleting ? () => {} : onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel
          className="relative mx-auto max-w-md rounded-lg border-2 border-white/20 p-8 shadow-2xl"
          style={{ backgroundColor: '#265e78' }}
        >
          <DialogTitle className="mb-6 text-center text-xl font-bold text-white">
            Delete Car
          </DialogTitle>

          <p className="mb-6 text-sm text-gray-300">
            Do you really want to delete the car{' '}
            <span className="font-semibold text-white">{carName}</span>?
          </p>

          <div className="flex gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={handleDelete}
              loading={isDeleting}
              className="flex-1"
            >
              Delete
            </Button>
            <Button
              variant="outlineWhite"
              size="sm"
              onClick={onClose}
              disabled={isDeleting}
              className="flex-1 hover:!text-primary-dark"
            >
              Cancel
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
