import { ReactElement, ReactNode } from 'react'

interface TypographyProps {
  children: ReactNode
  className?: string
}

// Heading Components
export function H1({ children, className = '' }: TypographyProps): ReactElement {
  return <h1 className={`text-3xl font-semibold text-white ${className}`}>{children}</h1>
}

export function H2({ children, className = '' }: TypographyProps): ReactElement {
  return <h2 className={`text-xl font-bold text-white ${className}`}>{children}</h2>
}

export function H3({ children, className = '' }: TypographyProps): ReactElement {
  return <h3 className={`text-lg font-semibold text-white ${className}`}>{children}</h3>
}

// Brand Title Component
export function BrandTitle({ children, className = '' }: TypographyProps): ReactElement {
  return <h1 className={`font-lora text-5xl text-white ${className}`}>{children}</h1>
}

// Body Text Components
export function BodyLarge({ children, className = '' }: TypographyProps): ReactElement {
  return <p className={`text-lg text-white ${className}`}>{children}</p>
}

export function BodyMedium({ children, className = '' }: TypographyProps): ReactElement {
  return <p className={`text-base text-white ${className}`}>{children}</p>
}

export function BodySmall({ children, className = '' }: TypographyProps): ReactElement {
  return <p className={`text-sm text-white ${className}`}>{children}</p>
}

// Span Components
export function TextLarge({ children, className = '' }: TypographyProps): ReactElement {
  return <span className={`text-lg text-white ${className}`}>{children}</span>
}

export function TextBase({ children, className = '' }: TypographyProps): ReactElement {
  return <span className={`text-base text-white ${className}`}>{children}</span>
}

export function TextSmall({ children, className = '' }: TypographyProps): ReactElement {
  return <span className={`text-sm text-white ${className}`}>{children}</span>
}
