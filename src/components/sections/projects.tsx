import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"

const projects = [
  {
    title: "SafeSitePlus",
    description: "AI-driven construction site monitoring platform with computer vision for PPE compliance detection and real-time safety alerts.",
    tech: ["Computer Vision", "OpenCV", "Python", "FastAPI", "React"],
    category: "AI/Computer Vision",
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "SmartCivicBot",
    description: "Municipal complaint management system using LangChain with Structured Output + RAG for automated department routing.",
    tech: ["LangChain", "RAG", "FastAPI", "React", "Semantic Search"],
    category: "GenAI",
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "AskPolicy",
    description: "AI-powered policy assistant with semantic search and natural language querying of PDF documents using vector databases.",
    tech: ["LangChain", "Vector DB", "FastAPI", "React"],
    category: "GenAI",
    github: "#",
    live: "#",
    featured: false
  },
  {
    title: "Quizlytic",
    description: "Educational chatbot generating quizzes and summaries using LangGraph and Tavily for enhanced learning experiences.",
    tech: ["LangGraph", "Tavily", "React", "FastAPI"],
    category: "GenAI",
    github: "#",
    live: "#",
    featured: false
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building cutting-edge AI solutions that solve real-world problems. 
            Each project showcases my expertise in GenAI, Computer Vision, and full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`group hover:shadow-lg transition-all duration-300 ${
              project.featured ? 'border-primary/20' : ''
            }`}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {project.description}
                    </CardDescription>
                  </div>
                  {project.featured && (
                    <Badge variant="default" className="ml-2">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Project Category */}
                <Badge variant="outline">
                  {project.category}
                </Badge>
              </CardContent>
              
              <CardFooter className="flex gap-4">
                {/* <Button size="sm" className="gap-2 flex-1">
                  <Github className="w-4 h-4" />
                  Code
                </Button> */}
                {/* <Button variant="outline" size="sm" className="gap-2 flex-1">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button> */}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            <Eye className="w-4 h-4" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}