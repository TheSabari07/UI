import { useScrollReveal } from '../hooks/useScrollReveal.js'

function StreetzMedia() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 })

  return (
    <section className="w-full bg-black py-24 sm:py-32 lg:py-40">
      <div ref={ref} className={`mx-auto max-w-4xl px-6 sm:px-8 lg:px-10 text-center scroll-reveal ${isVisible ? 'visible' : ''}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.15em] text-gray-200 mb-8">
          STREETZ MEDIA™
        </h2>
        <div className="space-y-4 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          <p>
            Culture documentation through real stories, street-rooted truth, and unfiltered voices.
          </p>
          <p>
            No noise, no filters—just the raw documentation of what moves us.
          </p>
        </div>
      </div>
    </section>
  )
}

export default StreetzMedia

