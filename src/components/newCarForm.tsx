import { ChevronDownIcon } from '../assets/ChevronDownIcon'

function handleFormSubmission() {}

export default function NewOwnCarForm() {
  return (
    <div className="mx-auto max-w-sm px-6 py-8">
      <form onSubmit={handleFormSubmission} className="space-y-6">
        <div>
          <label className="mb-2 block text-sm text-white">Name</label>
          <input
            type="text"
            placeholder="e.g. My Nice Moni Car"
            className="w-full rounded-full bg-primary-light px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-white">Type</label>
          <div className="relative">
            <button
              type="button"
              className="w-full rounded-full bg-white/20 px-4 py-3 text-left text-white focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Moni Cooper
            </button>
            <ChevronDownIcon className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-white" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block text-sm text-white">License Plate</label>
            <input
              type="text"
              placeholder="e.g. M-XY 123"
              className="w-full rounded-full bg-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-white">Horse Power</label>
            <input
              type="number"
              placeholder="110"
              className="w-full rounded-full bg-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm text-white">Fuel type</label>
          <div className="relative">
            <button
              type="button"
              className="w-full rounded-full bg-white/20 px-4 py-3 text-left text-white focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              e.g. 150
            </button>
            <ChevronDownIcon className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-white" />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm text-white">Additional Information</label>
          <textarea
            placeholder="e.g. No smoking"
            rows={3}
            className="w-full resize-none rounded-3xl bg-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        <div className="mt-12 space-y-4">
          <button
            type="button"
            className="w-full rounded-full border-2 border-white bg-transparent px-6 py-3 text-white transition-colors hover:bg-white/10"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full rounded-full bg-white px-6 py-3 font-medium text-primary-dark transition-colors hover:bg-white/90"
          >
            Add Car
          </button>
        </div>
      </form>
    </div>
  )
}
