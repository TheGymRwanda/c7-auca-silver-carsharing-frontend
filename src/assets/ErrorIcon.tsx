interface ErrorIconProps {
  className?: string
}

<<<<<<< HEAD
interface ErrorIconProps {
  className?: string
}

export default function ErrorIcon({ className }: ErrorIconProps): ReactElement {
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
        d="M15 9l-6 6M9 9l6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
=======
export default function ErrorIcon({ className }: ErrorIconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
>>>>>>> 466e1c3 (feat: add delete car functionality with confirmation dialog)
    </svg>
  )
}
