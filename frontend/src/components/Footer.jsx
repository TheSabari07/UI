function Footer() {
  return (
    <footer className="w-full text-gray-300">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gray-400">
              THE STREETZ COLLECTIVE™
            </p>
            <p className="mt-3 text-lg font-semibold text-gray-100">
              Where Truth Hits Harder Than Headlines.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Design. Discipline. Culture. Grit.
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gray-500">
              Truthful • Bold • Real
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-gray-500">
            <span className="h-px w-10 bg-neutral-700" />
            <span>Hardware Division</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer