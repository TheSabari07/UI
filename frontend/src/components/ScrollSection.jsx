/**
 * ScrollSection Component
 * 
 * Multi-layer parallax with 3D perspective illusion.
 * Each section has background (slowest), mid (medium), and foreground (fastest) layers.
 * Creates physical depth feeling similar to Shopify Editions and Apple product pages.
 * 
 * Props:
 * - index: Section index (0-based)
 * - currentSection: Currently active section index
 * - progress: Scroll progress within this section (0 to 1)
 * - backgroundLayer: React node for background parallax layer
 * - midLayer: Optional mid-layer element for additional depth
 * - children: Main content (foreground layer)
 * - className: Additional Tailwind classes
 * - parallaxType: Unique motion type ('hero' | 'vertical' | 'diagonal' | 'fade-scale' | 'horizontal' | 'minimal')
 */
function ScrollSection({
  index,
  currentSection,
  progress,
  backgroundLayer,
  midLayer,
  children,
  className = '',
  parallaxType = 'vertical',
}) {
  // Check for reduced motion preference (accessibility)
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  // Calculate transform values based on scroll position
  const isActive = currentSection === index
  const isBefore = currentSection > index
  const isAfter = currentSection < index

  // Multi-layer parallax values
  // Background: 30-40% scroll speed (slowest, furthest)
  // Mid: 55-65% scroll speed (medium depth)
  // Foreground: 90-100% scroll speed (fastest, closest)
  let scale = 1
  let opacity = 1
  let backgroundTranslateY = 0
  let backgroundTranslateX = 0
  let backgroundScale = 1
  let midTranslateY = 0
  let midTranslateX = 0
  let midScale = 1
  let foregroundTranslateY = 0
  let foregroundTranslateX = 0
  let foregroundScale = 1

  // Reduce motion effects if user prefers reduced motion
  const motionMultiplier = prefersReducedMotion ? 0.3 : 1

  // Unique parallax behaviors per section type with STRONGER values
  const calculateParallax = () => {
    if (isActive) {
      // Currently viewing this section - unique behavior based on type
      switch (parallaxType) {
        case 'hero':
          // Slow zoom-out background + drifting vertical parallax
          // Background moves at 35% speed, mid at 60%, foreground at 95%
          backgroundTranslateY = progress * 80 * motionMultiplier
          backgroundScale = 1 + progress * 0.05 * motionMultiplier // Zoom out
          midTranslateY = progress * 120 * motionMultiplier
          midScale = 1 + progress * 0.02 * motionMultiplier
          foregroundTranslateY = progress * 180 * motionMultiplier
          foregroundScale = 1 - progress * 0.02 * motionMultiplier
          scale = 1 - progress * 0.03 * motionMultiplier
          opacity = 1 - progress * 0.2
          break

        case 'vertical':
          // Classic vertical depth parallax (stronger)
          // Background: 35%, Mid: 60%, Foreground: 95%
          backgroundTranslateY = progress * 100 * motionMultiplier
          midTranslateY = progress * 150 * motionMultiplier
          foregroundTranslateY = progress * 220 * motionMultiplier
          scale = 1 - progress * 0.04 * motionMultiplier
          opacity = 1 - progress * 0.25
          break

        case 'diagonal':
          // Diagonal background movement (gritty, industrial)
          // Background moves diagonal at 40%, mid at 60%, foreground at 90%
          backgroundTranslateY = progress * 90 * motionMultiplier
          backgroundTranslateX = progress * -45 * motionMultiplier
          midTranslateY = progress * 140 * motionMultiplier
          midTranslateX = progress * 25 * motionMultiplier
          foregroundTranslateY = progress * 200 * motionMultiplier
          foregroundTranslateX = progress * 15 * motionMultiplier
          scale = 1 - progress * 0.04 * motionMultiplier
          opacity = 1 - progress * 0.25
          break

        case 'fade-scale':
          // Smooth scale + fade depth (soft, luxury)
          // Background: 30%, Mid: 55%, Foreground: 90%
          backgroundTranslateY = progress * 75 * motionMultiplier
          backgroundScale = 1 - progress * 0.03 * motionMultiplier
          midTranslateY = progress * 130 * motionMultiplier
          midScale = 1 - progress * 0.015 * motionMultiplier
          foregroundTranslateY = progress * 200 * motionMultiplier
          foregroundScale = 1 - progress * 0.01 * motionMultiplier
          scale = 1 - progress * 0.05 * motionMultiplier
          opacity = 1 - progress * 0.3
          break

        case 'horizontal':
          // Horizontal micro-shift (youth energy)
          // Background: 35%, Mid: 60%, Foreground: 95%
          backgroundTranslateX = progress * 50 * motionMultiplier
          backgroundTranslateY = progress * 60 * motionMultiplier
          midTranslateX = progress * -30 * motionMultiplier
          midTranslateY = progress * 100 * motionMultiplier
          foregroundTranslateX = progress * -20 * motionMultiplier
          foregroundTranslateY = progress * 180 * motionMultiplier
          scale = 1 - progress * 0.03 * motionMultiplier
          opacity = 1 - progress * 0.22
          break

        case 'minimal':
          // Minimal motion, typography-driven gravity
          // Background: 25%, Mid: 50%, Foreground: 80%
          backgroundTranslateY = progress * 50 * motionMultiplier
          midTranslateY = progress * 100 * motionMultiplier
          foregroundTranslateY = progress * 160 * motionMultiplier
          scale = 1 - progress * 0.02 * motionMultiplier
          opacity = 1 - progress * 0.18
          break

        default:
          // Fallback to vertical
          backgroundTranslateY = progress * 100 * motionMultiplier
          midTranslateY = progress * 150 * motionMultiplier
          foregroundTranslateY = progress * 220 * motionMultiplier
          scale = 1 - progress * 0.04 * motionMultiplier
          opacity = 1 - progress * 0.25
      }
    } else if (isBefore) {
      // Past this section - consistent fade out
      scale = 1 - 0.08 * motionMultiplier
      opacity = 0.25
      foregroundTranslateY = -30 * motionMultiplier
      midTranslateY = -50 * motionMultiplier
      backgroundTranslateY = -80 * motionMultiplier
    } else if (isAfter) {
      // Upcoming section - consistent fade in
      const distance = index - currentSection
      const normalizedDistance = Math.min(distance, 2)
      scale = 0.88 + (1 - normalizedDistance / 2) * 0.08 * motionMultiplier
      opacity = 0.35 + (1 - normalizedDistance / 2) * 0.4
      foregroundTranslateY = (60 - normalizedDistance * 20) * motionMultiplier
      midTranslateY = (100 - normalizedDistance * 30) * motionMultiplier
      backgroundTranslateY = (160 - normalizedDistance * 50) * motionMultiplier
    }
  }

  calculateParallax()

  return (
    <div
      className="relative h-screen w-full"
      style={{
        perspective: '1200px', // 3D perspective container
        perspectiveOrigin: 'center center',
      }}
    >
      <section
        className={`relative h-screen w-full overflow-hidden ${className}`}
        style={{
          transform: `scale(${scale})`,
          opacity: opacity,
          transformStyle: 'preserve-3d',
          willChange: 'transform, opacity',
        }}
      >
      {/* Background layer - slowest parallax (30-40% scroll speed) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${backgroundTranslateY}px) translateX(${backgroundTranslateX}px) scale(${backgroundScale}) translateZ(-100px)`,
          willChange: 'transform',
          filter: 'blur(0.5px)', // Subtle blur for depth
        }}
      >
        {backgroundLayer}
      </div>

      {/* Mid layer - medium parallax (55-65% scroll speed) */}
      {midLayer && (
        <div
          className="absolute inset-0 z-5"
          style={{
            transform: `translateY(${midTranslateY}px) translateX(${midTranslateX}px) scale(${midScale}) translateZ(-50px)`,
            willChange: 'transform',
          }}
        >
          {midLayer}
        </div>
      )}

      {/* Foreground content layer - fastest parallax (90-100% scroll speed) */}
      <div
        className="relative z-10 h-full w-full flex items-center justify-center"
        style={{
          transform: `translateY(${foregroundTranslateY}px) translateX(${foregroundTranslateX}px) scale(${foregroundScale}) translateZ(0px)`,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </section>
    </div>
  )
}

export default ScrollSection

