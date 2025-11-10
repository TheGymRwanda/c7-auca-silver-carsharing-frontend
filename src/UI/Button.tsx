import { forwardRef, cloneElement, isValidElement } from 'react'
import classNames from 'classnames'

import LoadingSpinner from '@/assets/LoadingSpinner'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outlineWhite' | 'outlineIndigo'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  asChild?: boolean
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      asChild = false,
      className = '',
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    const variantClasses = {
      primary: 'bg-white text-primary hover:bg-gray-50 focus:ring-primary',
      secondary: 'bg-primary text-white hover:bg-primary focus:ring-primary',
      ghost: 'bg-ghost-light text-primary hover:bg-ghost-dark focus:ring-ghost-light',
      outlineWhite:
        'border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary focus:ring-primary',
      outlineIndigo:
        'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-white',
    }
    const sizeClasses = {
      xs: 'h-8 px-3 text-xs',
      sm: 'h-9 px-4 text-sm',
      md: 'h-12 px-6 text-base',
      lg: 'h-14 px-8 text-lg',
      xl: 'h-16 px-10 text-xl',
    }
    const buttonClasses = classNames(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className,
    )

    const isDisabled = disabled || loading

    if (asChild) {
      if (isValidElement(children)) {
        return cloneElement(children, {
          className: classNames(buttonClasses, children.props.className),
          ...props,
        })
      }
      return children
    }

    return (
      <button ref={ref} className={buttonClasses} disabled={isDisabled} {...props}>
        {loading && <LoadingSpinner />}
        {!loading && children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
