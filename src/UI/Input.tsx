import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  leftIcon?: React.ReactNode
  className?: string
  containerClassName?: string
}

export default function Input({ leftIcon, className, containerClassName, ...props }: InputProps) {
  return (
    <div className={`relative ${containerClassName ?? ''}`}>
      {leftIcon ? (
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/70">
          {leftIcon}
        </span>
      ) : null}
      <input
        className={[
          'w-full rounded-full bg-white/10 border border-white/20',
          leftIcon ? 'pl-12 pr-6 py-4' : 'px-6 py-4',
          'text-white placeholder-white/70',
          'focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent',
          'transition-all duration-200',
          className ?? '',
        ].join(' ')}
        {...props}
      />
    </div>
  )
}
