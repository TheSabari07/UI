import { useEffect, useState, useCallback } from 'react'

/**
 * Custom hook to track scroll progress and calculate section visibility
 * Returns scroll position, current section index, and progress for each section
 * Optimized with requestAnimationFrame for 60fps performance
 */
export function useScrollProgress(totalSections) {
  const [scrollY, setScrollY] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)
  const [sectionProgress, setSectionProgress] = useState(
    Array(totalSections).fill(0)
  )

  const calculateProgress = useCallback(() => {
    const scrollPosition = window.scrollY || window.pageYOffset
    const windowHeight = window.innerHeight

    setScrollY(scrollPosition)

    // Calculate current section (0-indexed)
    // Use a threshold slightly before the section boundary for smoother transitions
    const section = Math.floor((scrollPosition + windowHeight * 0.3) / windowHeight)
    const clampedSection = Math.max(0, Math.min(section, totalSections - 1))
    setCurrentSection(clampedSection)

    // Calculate progress for each section (0 to 1)
    const progress = []
    for (let i = 0; i < totalSections; i++) {
      const sectionStart = i * windowHeight
      const sectionEnd = (i + 1) * windowHeight
      let sectionProg = 0

      if (scrollPosition >= sectionStart && scrollPosition < sectionEnd) {
        // Currently in this section - calculate progress
        sectionProg = Math.max(0, Math.min(1, (scrollPosition - sectionStart) / windowHeight))
      } else if (scrollPosition >= sectionEnd) {
        // Past this section
        sectionProg = 1
      }
      // Before this section, sectionProg remains 0

      progress.push(sectionProg)
    }

    setSectionProgress(progress)
  }, [totalSections])

  useEffect(() => {
    let rafId = null
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        ticking = true
        rafId = requestAnimationFrame(() => {
          calculateProgress()
          ticking = false
        })
      }
    }

    const handleResize = () => {
      // Debounce resize with a small delay
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      rafId = requestAnimationFrame(() => {
        calculateProgress()
      })
    }

    // Initial calculation
    calculateProgress()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [calculateProgress])

  return {
    scrollY,
    currentSection,
    sectionProgress,
  }
}

