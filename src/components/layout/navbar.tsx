
"use client"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import Link from "next/link"
import { Download } from "lucide-react"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" }
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sections = navItems.map(item => ({
      id: item.href.replace('#', ''),
      element: document.getElementById(item.href.replace('#', ''))
    }))

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset for navbar height

      let currentSection = "home"
      
      // Find which section is currently in view
      for (const section of sections) {
        if (section.element) {
          const sectionTop = section.element.offsetTop
          const sectionHeight = section.element.offsetHeight
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.id
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)
    
    // Check initial position
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer')
  }

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-xl">
          Zamin Raza
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink 
                      className={`text-sm font-medium transition-colors relative py-2 ${
                        isActive 
                          ? "text-primary font-semibold" 
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {item.name}
                      {/* Active underline */}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                      )}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Theme Toggle & Resume Button */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" size="sm" onClick={handleDownloadResume} className="gap-2">
            <Download className="w-4 h-4" />
            Resume
          </Button>
        </div>
      </div>
    </nav>
  )
}