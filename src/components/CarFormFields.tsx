import { FormField, FormSelect } from '../utils/Typography'
import { FormData } from '../hooks/useNewCarForm'
import { FuelType } from '../utils/api'

interface CarFormFieldsProps {
  formData: FormData
  errors: Record<string, string>
  touched: Record<string, boolean>
  handleInputChange: (field: keyof FormData, value: string | number | FuelType | null) => void
  handleBlur: (field: keyof FormData) => void
  carTypeOptions: { value: number; label: string }[]
  fuelTypeOptions: { value: FuelType; label: string }[]
  isLoadingCarTypes?: boolean
}

export default function CarFormFields({
  formData,
  errors,
  touched,
  handleInputChange,
  handleBlur,
  carTypeOptions,
  fuelTypeOptions,
  isLoadingCarTypes = false,
}: CarFormFieldsProps) {
  return (
    <>
      <FormField
        label="Name"
        type="text"
        value={formData.name}
        onChange={e => handleInputChange('name', e.target.value)}
        onBlur={() => handleBlur('name')}
        placeholder="e.g. My Nice Moni Car"
        error={errors.name}
        touched={touched.name}
      />

      <FormSelect
        label="Type"
        value={formData.carTypeId}
        onChange={value => handleInputChange('carTypeId', Number(value))}
        onBlur={() => handleBlur('carTypeId')}
        options={carTypeOptions}
        placeholder={isLoadingCarTypes ? 'Loading car types...' : 'Select car type'}
        error={errors.carTypeId}
        touched={touched.carTypeId}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          label="License Plate"
          type="text"
          value={formData.licensePlate}
          onChange={e => handleInputChange('licensePlate', e.target.value)}
          onBlur={() => handleBlur('licensePlate')}
          placeholder="e.g. M-XY 123"
          error={errors.licensePlate}
          touched={touched.licensePlate}
          className="p-4"
        />
        <FormField
          label="Horse Power"
          type="number"
          value={formData.horsepower}
          onChange={e => handleInputChange('horsepower', e.target.value)}
          onBlur={() => handleBlur('horsepower')}
          placeholder="110"
          error={errors.horsepower}
          touched={touched.horsepower}
          className="p-4"
        />
      </div>

      <FormSelect
        label="Fuel type"
        value={formData.fuelType}
        onChange={value => handleInputChange('fuelType', value)}
        onBlur={() => handleBlur('fuelType')}
        options={fuelTypeOptions}
        placeholder="Select fuel type"
        error={errors.fuelType}
        touched={touched.fuelType}
      />

      <FormField
        label="Additional Information"
        type="text"
        value={formData.info}
        onChange={e => handleInputChange('info', e.target.value)}
        onBlur={() => handleBlur('info')}
        placeholder="e.g. No smoking"
        error={errors.info}
        touched={touched.info}
        className="rounded-3xl"
      />
    </>
  )
}
