import { useCarData } from '@/hooks'
import { useNewCarForm, fuelTypeOptions } from '@/hooks/useNewCarForm'
import CustomSelect from './CustomSelect'

export default function NewOwnCarForm() {
  const { carTypes } = useCarData()
  const { formData, handleInputChange, handleSubmit } = useNewCarForm()

  const carTypeOptions = carTypes[0].data
    ? carTypes[0].data.map(type => ({
        value: type.id,
        label: type.name,
      }))
    : []

  return (
    <div className="mx-auto w-full max-w-sm px-6 py-8">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="mb-3 block text-base text-white">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={e => handleInputChange('name', e.target.value)}
            placeholder="e.g. My Nice Moni Car"
            className="w-full rounded-full bg-primary-form px-5 py-4 text-base text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        <div className="mt-4">
          <label className="mb-3 block text-base text-white">Type</label>
          <CustomSelect
            value={formData.carTypeId}
            onChange={value => handleInputChange('carTypeId', Number(value))}
            options={carTypeOptions}
            placeholder="Select car type"
          />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-3 block text-base text-white">License Plate</label>
            <input
              type="text"
              value={formData.licensePlate}
              onChange={e => handleInputChange('licensePlate', e.target.value)}
              placeholder="e.g. M-XY 123"
              className="w-full rounded-full bg-primary-form p-4 text-base text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
          <div>
            <label className="mb-3 block text-base text-white">Horse Power</label>
            <input
              type="number"
              value={formData.horsepower}
              onChange={e => handleInputChange('horsepower', e.target.value)}
              placeholder="110"
              className="w-full rounded-full bg-primary-form p-4 text-base text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="mb-3 block text-base text-white">Fuel type</label>
          <CustomSelect
            value={formData.fuelType}
            onChange={value => handleInputChange('fuelType', value)}
            options={fuelTypeOptions}
            placeholder="Select fuel type"
          />
        </div>

        <div className="mt-4">
          <label className="mb-3 block text-base text-white">Additional Information</label>
          <input
            type="text"
            value={formData.info}
            onChange={e => handleInputChange('info', e.target.value)}
            placeholder="e.g. No smoking"
            className="w-full resize-none rounded-3xl bg-primary-form px-5 py-4 text-base text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        <div className="mt-20 flex gap-4">
          <button
            type="button"
            className="flex-1 rounded-full border-2 border-white bg-transparent px-6 py-2 text-base text-white transition-colors hover:bg-white/10"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 rounded-full bg-white px-6 py-2 text-base font-medium text-primary-dark transition-colors hover:bg-white/90"
          >
            Add Car
          </button>
        </div>
      </form>
    </div>
  )
}
