import { useScrollReveal } from '../hooks/useScrollReveal.js'

function CorePillars() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 })

  const pillars = [
    {
      title: 'DESIGN',
      description: 'Precision, craft, and purpose.',
    },
    {
      title: 'DISCIPLINE',
      description: 'Consistency over noise.',
    },
    {
      title: 'CULTURE',
      description: 'Street-rooted truth and community.',
    },
    {
      title: 'GRIT',
      description: 'Built through pressure and persistence.',
    },
  ]

  return (
    <section className="w-full bg-black py-24 sm:py-32 lg:py-40">
      <div ref={ref} className={`mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 scroll-reveal ${isVisible ? 'visible' : ''}`}>
        <div className="grid grid-cols-1 gap-12 sm:gap-16 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="border-t border-neutral-800 pt-8 hover-lux"
            >
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-[0.15em] text-gray-200 mb-4">
                {pillar.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CorePillars

