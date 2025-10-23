import { ChevronDownIcon } from '../assets/ChevronDownIcon'

interface Option {
  value: string | number
  label: string
}

interface CustomSelectProps {
  value: string | number | null
  onChange: (value: string | number) => void
  options: Option[]
  placeholder: string
  className?: string
}

export default function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
  className = '',
}: CustomSelectProps) {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value || ''}
        onChange={e => onChange(e.target.value === '' ? '' : e.target.value)}
        className="w-full cursor-pointer appearance-none rounded-full bg-primary-form px-5 py-4 text-base text-white focus:outline-none focus:ring-2 focus:ring-white/30"
      >
        <option value="" className="bg-primary-form text-white">
          {placeholder}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value} className="bg-primary-form text-white">
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute right-5 top-1/2 size-8 -translate-y-1/2 text-white" />
    </div>
  )
}
