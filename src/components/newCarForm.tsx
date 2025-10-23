import { ChevronDownIcon } from '../assets/ChevronDownIcon'

export default function NewOwnCarForm() {
  return (
    <div className="mx-auto w-full max-w-sm px-6 py-8">
      <form className="">
        <div>
          <label className="mb-3 block text-base text-white">Name</label>
          <input
            type="text"
            placeholder="e.g. My Nice Moni Car"
            className="w-full rounded-full bg-primary-form px-5 py-4 text-base text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>
        <div className="mt-4">
          <label className="mb-3 block text-base text-white">Type</label>
          <div className="relative">
            <button
              type="button"
              className="w-full rounded-full bg-primary-form px-5 py-4 text-left text-base text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Moni Cooper
            </button>
            <ChevronDownIcon className="absolute right-5 top-1/2 size-8 -translate-y-1/2 text-white" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-3 block text-base text-white">License Plate</label>
            <input
              type="text"
              placeholder="e.g. M-XY 123"
              className="w-full rounded-full bg-primary-form p-4 text-base text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
          <div>
            <label className="mb-3 block text-base text-white">Horse Power</label>
            <input
              type="number"
              placeholder="110"
              className="w-full rounded-full bg-primary-form p-4 text-base text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="mb-3 block text-base text-white">Fuel type</label>
          <div className="relative">
            <button
              type="button"
              className="w-full rounded-full bg-primary-form px-5 py-4 text-left text-base text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              e.g. 150
            </button>
            <ChevronDownIcon className="absolute right-5 top-1/2 size-8 -translate-y-1/2 text-white" />
          </div>
        </div>

        <div className="mt-4">
          <label className="mb-3 block text-base text-white">Additional Information</label>
          <input
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
