import { useNavigate } from 'react-router-dom'
import Button from '@/UI/Button'

interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  const navigate = useNavigate()

  return (
    <div className="mb-6 flex items-center">
      <Button
        onClick={() => navigate(-1)}
        variant="ghost"
        className="bg-transparent p-0 text-white focus:outline-none focus:ring-0 focus:ring-offset-0"
      >
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Button>
      <h1 className="flex-1 text-center text-2xl font-bold text-white">{title}</h1>
      <div className="w-6"></div>
    </div>
  )
}
