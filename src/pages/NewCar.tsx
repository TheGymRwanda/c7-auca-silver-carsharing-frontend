import { H1 } from '../utils/Typography'

export default function NewCar() {
  return (
    <div className="min-h-screen w-full flex-col justify-center bg-primary-dark align-middle">
      <H1 className="my-8 w-full text-center text-4xl font-normal">New Car</H1>
      <div id="FormSpace" className="flex w-full items-center justify-center">
        <div
          id="FormPlaceHolder"
          className="h-[300px] w-[250px] rounded-md border-2 border-gray-400"
        ></div>
      </div>
    </div>
  )
}
