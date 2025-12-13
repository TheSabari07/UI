function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-neutral-950 flex items-center justify-center overflow-hidden">
      {/* Subtle noise/grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
      
      {/* Hero content */}
      <div className="relative z-10 px-6 sm:px-8 lg:px-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.15em] text-gray-200 animate-fade-in">
          WHERE TRUTH HITS<br />HARDER THAN HEADLINES.
        </h1>
      </div>
    </section>
  )
}

export default Hero

