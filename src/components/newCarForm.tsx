import { ChevronDownIcon } from '../assets/ChevronDownIcon'
import Button from '@/UI/Button'
import { Input } from '@/utils/Typography'

export default function NewOwnCarForm() {
  return (
    <div className="mx-auto w-full max-w-sm px-6 py-8">
      <form>
        <div>
          <Input
            id="car-name"
            label="Name"
            type="text"
            placeholder="e.g. My Nice Moni Car"
            className="rounded-full bg-primary-form px-5 py-4 text-base placeholder:text-white/70 focus:ring-white/30"
          />
        </div>
        <div className="mt-4">
          <label className="mb-3 block text-base text-white">Type</label>
          <div className="relative">
            <Button
              type="button"
              variant="ghost"
              className="w-full rounded-full bg-primary-form px-5 py-4 text-left text-base text-white/70 focus:ring-white/30"
            >
              Moni Cooper
            </Button>
            <ChevronDownIcon className="absolute right-5 top-1/2 size-8 -translate-y-1/2 text-white" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <Input
              id="license-plate"
              label="License Plate"
              type="text"
              placeholder="e.g. M-XY 123"
              className="rounded-full bg-primary-form p-4 text-base placeholder:text-white/70 focus:ring-white/30"
            />
          </div>
          <div>
            <Input
              id="horse-power"
              label="Horse Power"
              type="number"
              placeholder="110"
              className="rounded-full bg-primary-form p-4 text-base placeholder:text-white/70 focus:ring-white/30"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="mb-3 block text-base text-white">Fuel type</label>
          <div className="relative">
            <Button
              type="button"
              variant="ghost"
              className="w-full rounded-full bg-primary-form px-5 py-4 text-left text-base text-white/70 focus:ring-white/30"
            >
              e.g. 150
            </Button>
            <ChevronDownIcon className="absolute right-5 top-1/2 size-8 -translate-y-1/2 text-white" />
          </div>
        </div>

        <div className="mt-4">
          <Input
            id="additional-info"
            label="Additional Information"
            placeholder="e.g. No smoking"
            className="resize-none rounded-3xl bg-primary-form px-5 py-4 text-base placeholder:text-white/70 focus:ring-white/30"
          />
        </div>

        <div className="mt-20 flex gap-4">
          <Button type="button" variant="outlineWhite" className="flex-1">
            Cancel
          </Button>
          <Button type="submit" variant="primary" className="flex-1">
            Add Car
          </Button>
        </div>
      </form>
    </div>
  )
}
