import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Button from '@/components/Button'

interface DeleteCarDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => Promise<void>
  carName: string
}

export default function DeleteCarDialog({
  isOpen,
  onClose,
  onConfirm,
  carName,
}: DeleteCarDialogProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await onConfirm()
      setIsDeleting(false)
      setShowSuccess(true)
      // Close dialog after showing success for 3 seconds
      setTimeout(() => {
        setShowSuccess(false)
        onClose()
      }, 3000)
    } catch (error) {
      console.error('Failed to delete car:', error)
      setIsDeleting(false)
      setShowError(true)
      // Close dialog after showing error for 3 seconds
      setTimeout(() => {
        setShowError(false)
        onClose()
      }, 3000)
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel
          className="mx-auto max-w-md rounded-lg border-2 border-white/20 p-8 shadow-2xl"
          style={{ backgroundColor: '#265e78' }}
        >
          <DialogTitle className="mb-4 text-lg font-medium text-white">
            {showSuccess ? 'Success!' : showError ? 'Error!' : 'Delete Car'}
          </DialogTitle>

          {showSuccess ? (
            <div className="mb-6 text-center">
              <div className="mb-4 text-4xl">✅</div>
              <p className="text-sm text-green-300">
                Car <span className="font-semibold text-white">{carName}</span> removed
                successfully!
              </p>
            </div>
          ) : showError ? (
            <div className="mb-6 text-center">
              <div className="mb-4 text-4xl">❌</div>
              <p className="text-sm text-red-300">
                Failed to delete car <span className="font-semibold text-white">{carName}</span>.
                Please try again.
              </p>
            </div>
          ) : (
            <>
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
            </>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  )
}
