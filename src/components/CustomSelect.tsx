import classNames from 'classnames'
import { ChevronDownIcon } from '../assets/ChevronDownIcon'

interface Option {
  value: string | number
  label: string
}

interface CustomSelectProps {
  value: string | number | null
  onChange: (value: string | number) => void
  onBlur?: () => void
  options: Option[]
  placeholder: string
  className?: string
  error?: string
}

export default function CustomSelect({
  value,
  onChange,
  onBlur,
  options,
  placeholder,
  className = '',
  error,
}: CustomSelectProps) {
  return (
    <div className={classNames('group relative rounded', className)}>
      <select
        value={value || ''}
        onChange={e => {
          const val = e.target.value
          if (val === '') {
            onChange('')
          } else {
            const numVal = Number(val)
            onChange(isNaN(numVal) ? val : numVal)
          }
        }}
        onBlur={onBlur}
        className={classNames(
          'w-full cursor-pointer appearance-none rounded-full bg-primary-form px-5 py-4 text-base text-white transition-all duration-200 focus:outline-none focus:ring-2',
          {
            'ring-2 ring-red-500 focus:ring-red-500': error,
            'hover:ring-1 hover:ring-white/20 focus:ring-white/30': !error,
          },
        )}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${value}-error` : undefined}
      >
        <option value="" className="mx-2 box-border bg-primary-form py-2 text-white/70">
          {placeholder}
        </option>
        {options.map(option => (
          <option
            key={option.value}
            value={option.value}
            className="bg-primary-form py-2 text-white hover:bg-white/10"
          >
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute right-5 top-1/2 size-6 -translate-y-1/2 text-white/70 transition-all duration-200 group-hover:text-white" />
    </div>
  )
}
