import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skill"
import { Experience } from "@/components/sections/experience"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contacts"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Skills/>
      <Experience/>
      <Testimonials/>
      <Contact/>
      
      
      
      {/* Next sections will go here */}
      {/* <div className="h-screen bg-background" id="skills">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold">Skills Section</h1>
        </div>
      </div> */}
    </main>
  )
}