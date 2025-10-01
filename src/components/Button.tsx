import React from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline-white' | 'outline-teal'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  fullWidth?: boolean
  icon?: React.ReactNode
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      disabled = false,
      fullWidth = false,
      icon = null,
      loading = false,
      className = '',
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variantClasses = {
      primary: 'bg-white text-teal-500 hover:bg-gray-50 focus:ring-teal-500',
      secondary: 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500',
      ghost:
        'bg-gray-400 text-indigo-700 hover:bg-gray-500 focus:ring-indigo-900 transition-colors',
      outline:
        'border-2 border-white text-white bg-transparent hover:bg-white hover:text-teal-700 focus:ring-white',
      destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      link: 'text-teal-600 underline-offset-4 hover:underline focus:ring-teal-500',
    }

    const sizeClasses = {
      xs: 'h-8 px-3 text-xs',
      sm: 'h-9 px-4 text-sm',
      md: 'h-12 px-6 text-base',
      lg: 'h-14 px-8 text-lg',
      xl: 'h-16 px-10 text-xl',
    }

    const widthClass = fullWidth ? 'w-full' : ''

    const buttonClasses =
      `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`.trim()

    const isDisabled = disabled || loading

    return (
      <button ref={ref} className={buttonClasses} disabled={isDisabled} {...props}>
        {loading && (
          <svg className="-ml-1 mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {icon && !loading && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
