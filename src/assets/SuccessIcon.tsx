<<<<<<< HEAD
import { ReactElement } from 'react'

=======
>>>>>>> 466e1c3 (feat: add delete car functionality with confirmation dialog)
interface SuccessIconProps {
  className?: string
}

<<<<<<< HEAD
export default function SuccessIcon({ className }: SuccessIconProps): ReactElement {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
=======
export default function SuccessIcon({ className }: SuccessIconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
>>>>>>> 466e1c3 (feat: add delete car functionality with confirmation dialog)
    </svg>
  )
}
