import { useCarData } from '@/hooks'
import { useNewCarForm, fuelTypeOptions } from '@/hooks/useNewCarForm'
import CarFormFields from './CarFormFields'

export default function NewOwnCarForm() {
  const { carTypes } = useCarData()
  const { formData, errors, touched, isSubmitting, handleInputChange, handleBlur, handleSubmit } =
    useNewCarForm()
  const carTypeOptions = carTypes[0].data?.map(type => ({ value: type.id, label: type.name })) || []

  return (
    <div className="mx-auto w-full max-w-sm px-6 py-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <CarFormFields
          formData={formData}
          errors={errors}
          touched={touched}
          handleInputChange={handleInputChange}
          handleBlur={handleBlur}
          carTypeOptions={carTypeOptions}
          fuelTypeOptions={fuelTypeOptions}
        />

        {errors.submit && (
          <div className="mt-4 rounded-lg border border-red-500/50 bg-red-500/20 p-3">
            <p className="text-sm text-red-400">{errors.submit}</p>
          </div>
        )}

        <div className="mt-20 flex gap-4">
          <button
            type="button"
            disabled={isSubmitting}
            className="flex-1 rounded-full border-2 border-white bg-transparent px-6 py-2 text-base text-white transition-colors hover:bg-white/10 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 rounded-full bg-white px-6 py-2 text-base font-medium text-primary-dark transition-colors hover:bg-white/90 disabled:opacity-50"
          >
            {isSubmitting ? 'Adding...' : 'Add Car'}
          </button>
        </div>
      </form>
    </div>
  )
}
