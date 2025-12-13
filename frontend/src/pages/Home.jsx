import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollSection from '../components/ScrollSection'
import { useScrollProgress } from '../hooks/useScrollProgress'

const TOTAL_SECTIONS = 6

function Home() {
  const { currentSection, sectionProgress } = useScrollProgress(TOTAL_SECTIONS)

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto'
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  // Section 1: Hero — THE STREETZ COLLECTIVE™
  // Premium dark: Charcoal → Deep Graphite → Near-black
  const heroBackground = (
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#050505]">
      <div className="grain-overlay" />
    </div>
  )
  const heroMidLayer = (
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-1/3 left-1/2 w-[800px] h-[800px] bg-[#1a1a1a] rounded-full blur-3xl" />
    </div>
  )

  // Section 2: STREETZ WEAR™
  // Asphalt Gray → Charcoal with Electric Orange accent (very muted)
  const streetzWearBackground = (
    <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#121212] to-[#080808]">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1a1a1a]/40 rounded-full blur-3xl" />
      </div>
      <div className="grain-overlay" />
    </div>
  )
  const streetzWearMidLayer = (
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[600px] bg-[#151515] rounded-full blur-3xl" />
    </div>
  )

  // Section 3: DEZ STREETZ™
  // Oil Black → Deep Graphite (tactical, industrial)
  const dezStreetzBackground = (
    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#030303]">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-amber-900/12 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-emerald-950/15 rounded-full blur-3xl" />
      </div>
      <div className="grain-overlay" />
    </div>
  )
  const dezStreetzMidLayer = (
    <div className="absolute inset-0 opacity-25">
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-[#0f0f0f] rounded-full blur-3xl" />
    </div>
  )

  // Section 4: JANAI LYNN™
  // Near-black Blue → Charcoal (refined luxury)
  const janaiLynnBackground = (
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0d] via-[#0f0f12] to-[#08080a]">
      <div className="absolute inset-0 opacity-[0.025]">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-amber-800/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-800/15 rounded-full blur-3xl" />
      </div>
      <div className="grain-overlay" />
    </div>
  )
  const janaiLynnMidLayer = (
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-1/3 right-1/4 w-[650px] h-[650px] bg-[#121215] rounded-full blur-3xl" />
    </div>
  )

  // Section 5: STRZ WEAR™
  // Deep Graphite → Asphalt Gray (youth energy)
  const strzWearBackground = (
    <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#111111] to-[#090909]">
      <div className="absolute inset-0 opacity-[0.035]">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-950/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-stone-700/15 rounded-full blur-3xl" />
      </div>
      <div className="grain-overlay" />
    </div>
  )
  const strzWearMidLayer = (
    <div className="absolute inset-0 opacity-25">
      <div className="absolute top-1/2 left-1/3 w-[550px] h-[550px] bg-[#141414] rounded-full blur-3xl" />
    </div>
  )

  // Section 6: STREETZ MEDIA™
  // Oil Black → Charcoal (minimal, typography-focused)
  const streetzMediaBackground = (
    <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#050505] to-[#040404]">
      <div className="grain-overlay" />
    </div>
  )
  const streetzMediaMidLayer = (
    <div className="absolute inset-0 opacity-15">
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#0a0a0a] rounded-full blur-3xl" />
    </div>
  )

  return (
    <div className="relative w-full bg-[#050505] text-gray-200">
      <Navbar />
      {/* Section 1: Hero — THE STREETZ COLLECTIVE™
          Parallax: Slow zoom-out background + drifting vertical parallax */}
      <ScrollSection
        index={0}
        currentSection={currentSection}
        progress={sectionProgress[0] || 0}
        backgroundLayer={heroBackground}
        midLayer={heroMidLayer}
        parallaxType="hero"
      >
        <div className="px-6 sm:px-8 lg:px-16 text-center max-w-6xl mx-auto py-20">
          <h1 className="hero-heading mb-8">
            THE STREETZ<br className="md:hidden" /><span className="hidden md:inline"> </span>COLLECTIVE™
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wider text-gray-200 mt-10">
            WHERE TRUTH HITS HARDER THAN HEADLINES.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-8 tracking-wide">
            Design • Discipline • Culture • Grit
          </p>
        </div>
      </ScrollSection>

      {/* Section 2: STREETZ WEAR™
          Parallax: Classic vertical depth parallax */}
      <ScrollSection
        index={1}
        currentSection={currentSection}
        progress={sectionProgress[1] || 0}
        backgroundLayer={streetzWearBackground}
        midLayer={streetzWearMidLayer}
        parallaxType="vertical"
      >
        <div className="px-6 sm:px-8 lg:px-16 text-center max-w-6xl mx-auto py-20">
          <h2 className="section-heading mb-8">
            STREETZ WEAR™
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wider text-gray-200 mt-10">
            Raw & Authentic Streetwear
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-8 tracking-wide max-w-2xl mx-auto leading-relaxed">
            Hoodies, tees, denim, MY HOOD Capsule. Street-rooted design with Streetz Tag System hardware.
          </p>
        </div>
      </ScrollSection>

      {/* Section 3: DEZ STREETZ™
          Parallax: Diagonal background movement (gritty, industrial) */}
      <ScrollSection
        index={2}
        currentSection={currentSection}
        progress={sectionProgress[2] || 0}
        backgroundLayer={dezStreetzBackground}
        midLayer={dezStreetzMidLayer}
        parallaxType="diagonal"
      >
        <div className="px-6 sm:px-8 lg:px-16 text-center max-w-6xl mx-auto py-20">
          <h2 className="section-heading mb-8">
            DEZ STREETZ™
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wider text-gray-200 mt-10">
            Tactical & Industrial Line
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-8 tracking-wide max-w-2xl mx-auto leading-relaxed">
            Combat boots, field jackets, tactical vests, cargo, hardware. Rugged street-engineering aesthetic.
          </p>
        </div>
      </ScrollSection>

      {/* Section 4: JANAI LYNN™
          Parallax: Smooth scale + fade depth (soft, luxury) */}
      <ScrollSection
        index={3}
        currentSection={currentSection}
        progress={sectionProgress[3] || 0}
        backgroundLayer={janaiLynnBackground}
        midLayer={janaiLynnMidLayer}
        parallaxType="fade-scale"
      >
        <div className="px-6 sm:px-8 lg:px-16 text-center max-w-6xl mx-auto py-20">
          <h2 className="section-heading mb-8">
            JANAI LYNN™
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wider text-gray-200 mt-10">
            Refined Women's Luxury
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-8 tracking-wide max-w-2xl mx-auto leading-relaxed">
            Blouses, wide-leg denim, midi dresses, refined silhouettes. For the modern professional.
          </p>
        </div>
      </ScrollSection>

      {/* Section 5: STRZ WEAR™
          Parallax: Horizontal micro-shift (youth energy) */}
      <ScrollSection
        index={4}
        currentSection={currentSection}
        progress={sectionProgress[4] || 0}
        backgroundLayer={strzWearBackground}
        midLayer={strzWearMidLayer}
        parallaxType="horizontal"
      >
        <div className="px-6 sm:px-8 lg:px-16 text-center max-w-6xl mx-auto py-20">
          <h2 className="section-heading mb-8">
            STRZ WEAR™
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wider text-gray-200 mt-10">
            Global Youth Line
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-8 tracking-wide max-w-2xl mx-auto leading-relaxed">
            Graphic tees, hoodies, caps, collabs. Trend-driven, accessible street culture for the next generation.
          </p>
        </div>
      </ScrollSection>

      {/* Section 6: STREETZ MEDIA™
          Parallax: Minimal motion, typography-driven gravity */}
      <ScrollSection
        index={5}
        currentSection={currentSection}
        progress={sectionProgress[5] || 0}
        backgroundLayer={streetzMediaBackground}
        midLayer={streetzMediaMidLayer}
        parallaxType="minimal"
      >
        <div className="px-6 sm:px-8 lg:px-16 text-center max-w-6xl mx-auto py-20">
          <h2 className="section-heading mb-8">
            STREETZ MEDIA™
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wider text-gray-200 mt-10">
            Truth Hits Harder Than Headlines.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-8 tracking-wide max-w-2xl mx-auto leading-relaxed">
            Content, podcasts, lookbooks, campaigns. The culture arm of The Streetz Collective.
          </p>
        </div>
      </ScrollSection>

      {/* Footer - The weight settles here */}
      <div className="relative w-full bg-[#0a0a0a] border-t border-[#1a1a1a]/30">
        <Footer />
      </div>
    </div>
  )
}

export default Home
