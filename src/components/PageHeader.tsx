import { useNavigate } from 'react-router-dom'

interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  const navigate = useNavigate()

  return (
    <div className="mb-6 flex items-center">
      <button onClick={() => navigate(-1)} className="text-white">
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <h1 className="flex-1 text-center text-2xl font-bold text-white">{title}</h1>
      <div className="w-6"></div>
    </div>
  )
}
