function IndustrialDivider() {
  return (
    <section className="relative w-full h-32 bg-neutral-950 flex items-center justify-center overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(38 38 38) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(38 38 38) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Thin horizontal line */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="border-t border-neutral-800"></div>
      </div>
      
      {/* Optional micro coordinate-style text (very subtle) */}
      <div className="absolute bottom-4 right-6 sm:right-8 lg:right-10 text-[8px] text-neutral-700 font-mono tracking-wider opacity-30">
        40.7128° N, 74.0060° W
      </div>
    </section>
  )
}

export default IndustrialDivider

