import { ReactElement, ReactNode } from 'react'
import CustomSelect from '../components/CustomSelect'

interface TypographyProps {
  children: ReactNode
  className?: string
}

interface LabelProps extends TypographyProps {
  htmlFor?: string
  required?: boolean
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  error?: string
  className?: string
}

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  touched?: boolean
  onBlur?: () => void
  className?: string
}

interface FormSelectProps {
  label: string
  value: string | number | null
  onChange: (value: string | number) => void
  onBlur?: () => void
  options: { value: string | number; label: string }[]
  placeholder: string
  error?: string
  touched?: boolean
  className?: string
}

export function H1({ children, className = '' }: TypographyProps): ReactElement {
  return <h1 className={`font-lora text-3xl font-semibold text-white ${className}`}>{children}</h1>
}

export function H2({ children, className = '' }: TypographyProps): ReactElement {
  return <h2 className={`font-lora text-xl font-bold text-white ${className}`}>{children}</h2>
}

export function H3({ children, className = '' }: TypographyProps): ReactElement {
  return <h3 className={`font-lora text-lg font-semibold text-white ${className}`}>{children}</h3>
}

export function BrandTitle({ children, className = '' }: TypographyProps): ReactElement {
  return <h1 className={`font-lora text-5xl text-white ${className}`}>{children}</h1>
}

export function BodyLarge({ children, className = '' }: TypographyProps): ReactElement {
  return <p className={`text-lg text-white ${className}`}>{children}</p>
}

export function BodyMedium({ children, className = '' }: TypographyProps): ReactElement {
  return <p className={`text-base text-white ${className}`}>{children}</p>
}

export function BodySmall({ children, className = '' }: TypographyProps): ReactElement {
  return <p className={`text-sm text-white ${className}`}>{children}</p>
}

export function TextLarge({ children, className = '' }: TypographyProps): ReactElement {
  return <span className={`text-lg text-white ${className}`}>{children}</span>
}

export function TextBase({ children, className = '' }: TypographyProps): ReactElement {
  return <span className={`text-base text-white ${className}`}>{children}</span>
}

export function TextSmall({ children, className = '' }: TypographyProps): ReactElement {
  return <span className={`text-sm text-white ${className}`}>{children}</span>
}

export function LabelText({
  children,
  className = '',
  htmlFor,
  required,
}: LabelProps): ReactElement {
  return (
    <label
      htmlFor={htmlFor}
      className={`mb-1 block text-sm font-medium text-white ${required ? 'after:ml-0.5 after:text-red-500 after:content-["*"]' : ''} ${className}`}
    >
      {children}
    </label>
  )
}

export function Input({ id, label, error, className = '', ...props }: InputProps): ReactElement {
  return (
    <div className="w-full">
      <LabelText htmlFor={id}>{label}</LabelText>
      <input
        id={id}
        className={`
          w-full
          rounded-md
          border
          bg-gray-800
          px-3
          py-2
          text-white
          placeholder:text-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          ${error ? 'border-red-500' : 'border-gray-600'}
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export function FormField({
  label,
  error,
  touched,
  onBlur,
  className = '',
  ...props
}: FormFieldProps): ReactElement {
  const hasError = error && touched

  return (
    <div className="w-full">
      <label className="mb-3 block text-base text-white">{label}</label>
      <input
        onBlur={onBlur}
        className={`w-full rounded-full bg-primary-form px-5 py-4 text-base text-white placeholder:text-white/70 focus:outline-none focus:ring-2 ${
          hasError ? 'ring-2 ring-red-500 focus:ring-red-500' : 'focus:ring-white/30'
        } ${className}`}
        {...props}
      />
      {hasError && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  )
}

export function FormSelect({
  label,
  value,
  onChange,
  onBlur,
  options,
  placeholder,
  error,
  touched,
  className = '',
}: FormSelectProps): ReactElement {
  const hasError = error && touched

  return (
    <div className="w-full">
      <label className="mb-3 block text-base text-white">{label}</label>
      <CustomSelect
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        options={options}
        placeholder={placeholder}
        error={hasError ? error : undefined}
        className={className}
      />
      {hasError && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  )
}
