"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export function Hero() {
  const handleViewResume = () => {
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer')
  }

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Text Content - Reduced gap */}
          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm">
              👋 Hello, I'm
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
  Zamin <span className="text-primary">Raza</span>
</h1>

<h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
  <span className="text-primary font-bold">Full Stack Developer</span> | Computer Scientist
</h2>

<p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
  I build <span className="text-primary font-medium">scalable web applications</span> and 
  <span className="text-primary font-medium"> AI-powered solutions</span>. With expertise in modern 
  technologies, I transform ideas into <span className="text-primary font-medium">efficient, user-friendly software</span> 
  that delivers real business value.
</p>

            {/* Tech Focus Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="outline" className="text-xs">Full Stack</Badge>
              <Badge variant="outline" className="text-xs">GenAI & LLMs</Badge>
              <Badge variant="outline" className="text-xs">Computer Vision</Badge>
              <Badge variant="outline" className="text-xs">SEO Optimization</Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button size="lg" className="gap-2" onClick={scrollToProjects}>
                View My Work
                <ArrowDown className="w-4 h-4" />
              </Button>
              
              <Button variant="outline" size="lg" className="gap-2" onClick={handleViewResume}>
                <ExternalLink className="w-4 h-4" />
                View Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <a href="https://github.com/Zamin-Raza" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <a href="https://www.linkedin.com/in/zaminraza110/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <a href="mailto:zaminraza095@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Picture - Improved sizing and positioning */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main profile container */}
              <div className="w-96 h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center p-8">
                {/* Profile image with better sizing */}
                <div className="w-80 h-80 bg-background rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <img 
                    src="/profilepic.jpg"
                    alt="Zamin Raza - Computer Scientist & Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating elements - larger and better positioned */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-primary/20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-primary/15 rounded-full blur-sm"></div>
              <div className="absolute top-1/2 -right-6 w-12 h-12 bg-primary/10 rounded-full blur-sm"></div>
              
              {/* Tech badges around the image */}
              <div className="absolute -top-4 left-8">
                <Badge variant="secondary" className="text-xs animate-pulse">AI</Badge>
              </div>
              <div className="absolute -bottom-4 right-12">
                <Badge variant="secondary" className="text-xs animate-pulse">CV</Badge>
              </div>
              <div className="absolute top-1/2 -left-4">
                <Badge variant="secondary" className="text-xs animate-pulse">Full Stack</Badge>
              </div>
            </div>
          </div>

        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}