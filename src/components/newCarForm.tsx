import { useCars } from '@/hooks/useCars'
import { useNewCarForm, fuelTypeOptions } from '@/hooks/useNewCarForm'
import CarFormFields from '@/components/CarFormFields'
import { useEffect, useRef, useMemo } from 'react'
import Button from '@/UI/Button'
import SuccessIcon from '@/assets/SuccessIcon'

export default function NewCarForm() {
  const { carTypes, loading } = useCars()
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

  const formRef = useRef<HTMLFormElement>(null)

  const carTypeOptions = useMemo(
    () => carTypes.map(type => ({ value: type.id, label: type.name })),
    [carTypes],
  )
  const isLoadingCarTypes = loading

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
          isLoadingCarTypes={isLoadingCarTypes}
        />

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
            {isSubmitting ? (
              'Adding...'
            ) : isSuccess ? (
              <span className="flex items-center gap-2">
                <SuccessIcon className="size-4" aria-label="Success" />
                Added
              </span>
            ) : (
              'Add Car'
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
