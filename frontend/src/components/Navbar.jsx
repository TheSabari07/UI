function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 sm:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-200 sm:text-sm hover-lux-text cursor-default">
          THE STREETZ COLLECTIVE™
        </span>
        <nav className="flex items-center gap-8 text-sm font-medium text-gray-200/80">
        </nav>
      </div>
    </header>
  )
}

export default Navbar

