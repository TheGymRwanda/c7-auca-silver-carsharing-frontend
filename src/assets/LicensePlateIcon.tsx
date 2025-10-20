import { ReactElement } from 'react'

interface LicensePlateIconProps {
  className?: string
}

export default function LicensePlateIcon({ className }: LicensePlateIconProps): ReactElement {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      className={className}
    >
      {/* Top horizontal line */}
      <path d="M2 5L22 5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Rectangle in the middle */}
      <rect x="3" y="9" width="18" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bottom horizontal line */}
      <path d="M2 19L22 19" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
