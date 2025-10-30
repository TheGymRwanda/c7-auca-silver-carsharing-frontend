import NewOwnCarForm from '@/components/newCarForm'
import { H1 } from '@/utils/Typography'

export default function AddCar() {
  return (
    <div className="min-h-screen w-full flex-col justify-center bg-primary-dark align-middle">
      <H1 className="mb-2 mt-8 w-full text-center text-4xl font-normal">New Car</H1>
      <div id="FormSpace" className="flex w-full items-center justify-center">
        <NewOwnCarForm />
      </div>
    </div>
  )
}
