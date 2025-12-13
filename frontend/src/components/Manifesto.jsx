import { useScrollReveal } from '../hooks/useScrollReveal.js'

function Manifesto() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 })

  return (
    <section className="w-full bg-neutral-900 py-24 sm:py-32 lg:py-40">
      <div ref={ref} className={`mx-auto max-w-4xl px-6 sm:px-8 lg:px-10 text-center scroll-reveal ${isVisible ? 'visible' : ''}`}>
        <div className="space-y-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          <p>
            Street-rooted culture built on real craft, discipline, and grit.
          </p>
          <p>
            We honor the truth—no fake gloss, no noise, just honest design that speaks.
          </p>
          <p>
            Every piece carries the weight of authenticity, forged in the streets and refined with purpose.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Manifesto

