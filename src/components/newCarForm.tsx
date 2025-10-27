import { useCarData } from '@/hooks'
import { useNewCarForm, fuelTypeOptions } from '@/hooks/useNewCarForm'
import CarFormFields from './CarFormFields'
import { useEffect, useRef } from 'react'
import Button from '../UI/Button'

export default function NewOwnCarForm() {
  const { carTypes } = useCarData()
  const {
    formData,
    errors,
    touched,
    isSubmitting,
    isSuccess,
    handleInputChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useNewCarForm()
  const carTypeOptions = carTypes[0].data?.map(type => ({ value: type.id, label: type.name })) || []
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (isSuccess && formRef.current) {
      const firstInput = formRef.current.querySelector('input, select') as HTMLElement
      firstInput?.focus()
    }
  }, [isSuccess])

  return (
    <div className="mx-auto w-full max-w-sm px-6 py-8">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4"
        noValidate
        aria-label="Add new car form"
      >
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

        {isSuccess && (
          <div
            className="mt-4 rounded-lg border border-green-500/50 bg-green-500/20 p-3"
            role="status"
            aria-live="polite"
          >
            <p className="text-sm text-green-400">
              ✅ Car added successfully! Form will reset in 3 seconds.
            </p>
          </div>
        )}

        <div className="mt-20 flex gap-4">
          <Button
            type="button"
            variant="outlineWhite"
            onClick={resetForm}
            disabled={isSubmitting}
            aria-label={isSuccess ? 'Add another car' : 'Cancel form'}
            className="flex-1"
          >
            {isSuccess ? 'Add Another' : 'Cancel'}
          </Button>
          <Button
            type="submit"
            variant="primary"
            loading={isSubmitting}
            disabled={isSuccess}
            aria-label={
              isSubmitting
                ? 'Adding car, please wait'
                : isSuccess
                  ? 'Car added successfully'
                  : 'Add car to system'
            }
            className="flex-1"
          >
            {isSubmitting ? 'Adding...' : isSuccess ? '✓ Added' : 'Add Car'}
          </Button>
        </div>
      </form>
    </div>
  )
}
