import { useEffect } from 'react'
import SuccessIcon from '@/assets/SuccessIcon'
import ErrorIcon from '@/assets/ErrorIcon'

interface ToastProps {
  message: string
  type: 'success' | 'error'
  isVisible: boolean
  onClose: () => void
}

export default function Toast({ message, type, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  return (
    <div className="animate-in slide-in-from-right fixed right-4 top-4 z-50 duration-300">
      <div
        className={`flex items-center gap-3 rounded-lg p-4 shadow-lg ${
          type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
        }`}
      >
        {type === 'success' ? (
          <SuccessIcon className="size-5 shrink-0" />
        ) : (
          <ErrorIcon className="size-5 shrink-0" />
        )}
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  )
}
