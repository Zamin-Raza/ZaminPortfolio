// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Code, Brain, Eye, GraduationCap, Award, Users } from "lucide-react"

// export function About() {
//   const specialties = [
//     { icon: Brain, label: "GenAI & LLMs", color: "text-purple-500" },
//     { icon: Eye, label: "Computer Vision", color: "text-blue-500" },
//     { icon: Code, label: "Full Stack Dev", color: "text-green-500" },
//   ]

//   const achievements = [
//     { icon: GraduationCap, text: "BSCS with 3.64 CGPA" },
//     { icon: Award, text: "Top 5 Finalist - Inter-University Coding" },
//     { icon: Users, text: "TEDx Organizer & Host" },
//   ]

//   return (
//     <section id="about" className="py-20 bg-muted/50">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
//           {/* Left Column - Content */}
//           <div className="space-y-6">
//             <Badge variant="outline" className="text-sm">
//               About Me
//             </Badge>
            
//             <h2 className="text-3xl md:text-4xl font-bold">
//               Full Stack Innovator in <span className="text-primary">AI & Computer Vision</span>
//             </h2>
            
//             <p className="text-lg text-muted-foreground">
//               Recent Computer Science graduate from COMSATS University with a passion for 
//               building cutting-edge AI solutions. I specialize in bridging advanced technologies 
//               like GenAI, LLMs, and Computer Vision with practical full-stack applications.
//             </p>

//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold">My Focus Areas:</h3>
//               <div className="flex flex-wrap gap-3">
//                 {specialties.map((item) => (
//                   <Badge key={item.label} variant="secondary" className="gap-2 py-2">
//                     <item.icon className={`w-4 h-4 ${item.color}`} />
//                     {item.label}
//                   </Badge>
//                 ))}
//               </div>
//             </div>

//             {/* Key Projects Highlight */}
//             <Card>
//               <CardContent className="p-6">
//                 <h4 className="font-semibold mb-3">Notable Projects:</h4>
//                 <ul className="space-y-2 text-sm">
//                   <li>• <strong>SafeSitePlus:</strong> AI-driven construction site safety with computer vision</li>
//                   <li>• <strong>SmartCivicBot:</strong> Municipal complaint system with LangChain & RAG</li>
//                   <li>• <strong>AskPolicy:</strong> AI-powered policy document assistant</li>
//                 </ul>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Right Column - Achievements & Education */}
//           <div className="space-y-8">
//             {/* Education */}
//             <Card>
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
//                   <GraduationCap className="w-5 h-5 text-primary" />
//                   Education
//                 </h3>
//                 <div className="space-y-3">
//                   <div>
//                     <h4 className="font-semibold">Bachelors in Computer Science</h4>
//                     <p className="text-sm text-muted-foreground">COMSATS University • 2021-2025</p>
//                     <p className="text-sm">CGPA: 3.64/4.0</p>
//                     <p className="text-sm">Final Project: Computer Vision Based Construction Site Surveillance</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Achievements */}
//             <Card>
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
//                 <div className="space-y-3">
//                   {achievements.map((item, index) => (
//                     <div key={index} className="flex items-start gap-3">
//                       <item.icon className="w-5 h-5 text-primary mt-0.5" />
//                       <span className="text-sm">{item.text}</span>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* CTA */}
//             <Button className="w-full">
//               View My Projects
//             </Button>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }
"use client"  // Add this at the top

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Eye, Code, Database, Cpu, Cloud } from "lucide-react"

export function About() {
  const focusAreas = [
    { icon: Cloud, label: "Full Stack Solutions", description: "End-to-end web applications" },
    { icon: Code, label: "Backend Development", description: "Scalable APIs and server architecture" },
    { icon: Database, label: "RAG Systems", description: "Retrieval-Augmented Generation applications" },
    { icon: Brain, label: "GenAI & LLMs", description: "Building intelligent chatbots and AI assistants" },
    { icon: Eye, label: "Computer Vision", description: "Object detection and image processing systems" },
    { icon: Cpu, label: "Machine Learning", description: "AI model integration and deployment" },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          
         <h2 className="text-3xl md:text-4xl font-bold mb-6">
  Crafting <span className="text-primary">Digital Solutions</span> Across the Stack
</h2>

<p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
  A passionate Full Stack Developer with a Computer Science foundation. 
  I build <span className="text-primary font-medium">responsive web applications</span> with MERN & Next.js, 
  <span className="text-primary font-medium"> scalable backend systems</span> using Node.js & FastAPI, and 
  <span className="text-primary font-medium"> intelligent features</span> with Computer Vision & LLMs. 
  Focused on creating efficient, user-centric software with attention to performance and SEO.
</p>

          </div>
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">3.64</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">2+</div>
              <div className="text-sm text-muted-foreground">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">Web-dev</div>
              <div className="text-sm text-muted-foreground">Specialization</div>
            </div>
          </div>
          {/* Focus Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {focusAreas.map((area) => (
              <Card key={area.label} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{area.label}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}


          {/* CTA */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('projects')}>
              Explore My Projects
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  )
}