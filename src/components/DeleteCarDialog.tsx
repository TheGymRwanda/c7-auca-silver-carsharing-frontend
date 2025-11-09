import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Button from '@/UI/Button'
import SuccessIcon from '@/assets/SuccessIcon'
import ErrorIcon from '@/assets/ErrorIcon'

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
  const [errorMessage, setErrorMessage] = useState('')
<<<<<<< HEAD
=======

  const handleClose = () => {
    setIsDeleting(false)
    setShowSuccess(false)
    setShowError(false)
    setErrorMessage('')
    onClose()
  }
>>>>>>> 466e1c3 (feat: add delete car functionality with confirmation dialog)

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await onConfirm()
      setIsDeleting(false)
      setShowSuccess(true)
      setTimeout(() => {
<<<<<<< HEAD
        setShowSuccess(false)
        onClose()
      }, 5000)
=======
        handleClose()
      }, 3000)
>>>>>>> 466e1c3 (feat: add delete car functionality with confirmation dialog)
    } catch (error) {
      setIsDeleting(false)
      setShowError(true)
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred')
      setTimeout(() => {
<<<<<<< HEAD
        setShowError(false)
        setErrorMessage('')
        onClose()
      }, 5000)
=======
        handleClose()
      }, 3000)
>>>>>>> 466e1c3 (feat: add delete car functionality with confirmation dialog)
    }
  }

  return (
    <Dialog
      open={isOpen}
      onClose={showSuccess || showError ? () => {} : handleClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel
          className="relative mx-auto max-w-md rounded-lg border-2 border-white/20 p-8 shadow-2xl"
          style={{ backgroundColor: '#265e78' }}
        >
          {/* Icon at top border center */}
          {(showSuccess || showError) && (
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="rounded-full bg-[#265e78] p-2">
                {showSuccess ? (
                  <SuccessIcon className="size-8 text-green-400" />
                ) : (
                  <ErrorIcon className="size-8 text-red-400" />
                )}
              </div>
            </div>
          )}

          <DialogTitle className="mb-6 text-center text-xl font-bold text-white">
            {showSuccess ? 'Success!' : showError ? 'Error!' : 'Delete Car'}
          </DialogTitle>

          {showSuccess ? (
            <div className="text-center">
              <p className="text-sm text-gray-300">
                The car <span className="font-semibold text-white">{carName}</span> has been
                successfully deleted from your account.
              </p>
            </div>
          ) : showError ? (
            <div className="text-center">
              <p className="mb-3 text-sm text-gray-300">
                Unable to delete the car <span className="font-semibold text-white">{carName}</span>
                .
              </p>
              <p className="text-xs text-red-300">Error: {errorMessage}</p>
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
                  onClick={handleClose}
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
