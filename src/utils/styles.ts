// Common Tailwind CSS utility classes
export const styles = {
  // Layout patterns
  centerContainer: 'flex h-full flex-col items-center justify-center',
  flexCol: 'flex flex-col',
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',

  // Page layouts
  pageContainer: 'min-h-screen p-4 font-serif',
  fullHeightContainer: 'flex h-full flex-col p-4 font-serif',
  centerContent: 'flex w-full justify-center',
  maxWidthContainer: 'w-full max-w-xs',

  // Button patterns
  primaryButton:
    'block w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-cyan-800',
  secondaryButton:
    'block w-full rounded-full border border-white px-6 py-3 text-center text-base text-white',
  outlineButton: 'w-full rounded-full border border-white px-6 py-3 text-base text-white',

  // Loading/Error states
  loadingText: 'p-4 text-center font-serif text-white',
  errorText: 'p-4 text-center font-serif text-red-400',
  centerText: 'p-4 text-center font-serif',

  // Card patterns
  cardContainer: 'rounded-2xl bg-white/10 p-4 backdrop-blur-sm',
  cardRow: 'flex items-center gap-2 text-white',

  // Navigation
  backLink: 'inline-flex items-center gap-2 text-white hover:text-white',
  detailsLink: 'text-sm font-semibold text-yellow-400 transition-colors hover:text-yellow-300',

  // Combined common patterns
  menuLink: 'flex items-center space-x-3 py-3 text-white transition-colors hover:text-gray-300',
  detailRow: 'flex items-center gap-3 text-white',
  iconWhite: 'size-5 text-white',
  iconContainer: 'size-6 text-white',
  textWhite: 'text-white',
  textBase: 'text-base',
  textLg: 'text-lg',
} as const
