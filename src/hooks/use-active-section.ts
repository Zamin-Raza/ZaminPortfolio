"use client"
import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of viewport
      threshold: 0,
    }

    sectionIds.forEach((sectionId) => {
      const section = document.getElementById(sectionId)
      if (section) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId)
              // Update URL without page reload
              window.history.replaceState(null, '', `#${sectionId}`)
            }
          })
        }, options)

        observer.observe(section)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [sectionIds])

  return activeSection
}