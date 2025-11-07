import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "ZenDev",
    period: "Sep 2023 - Present",
    location: "Remote",
    description: "Designed and implemented RESTful APIs, database schemas, and backend architecture. Developed responsive user interfaces using React and Next.js.",
    achievements: [
      "Led technical decisions and ensured seamless integration across the stack",
      "Collaborated on scalable solutions with full ownership of frontend and backend modules",
      "Built responsive UIs with React and Next.js"
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "REST APIs"],
    type: "job"
  },
  {
    title: "Director Event Management & Logistics",
    company: "COMSATS Tech Summit",
    period: "2024",
    location: "Islamabad",
    description: "Led the organization and execution of an inter-university tech competition with 500+ participants.",
    achievements: [
      "Designed problem statements and managed evaluation criteria",
      "Coordinated logistics for large-scale tech event",
      "Managed team of 20+ volunteers"
    ],
    tech: ["Leadership", "Event Management", "Team Coordination"],
    type: "leadership"
  },
  {
    title: "Web Developer",
    company: "XposureVerse",
    period: "Nov 2024",
    location: "Remote", 
    description: "Built responsive web interfaces and assisted in developing frontend features.",
    achievements: [
      "Developed responsive web interfaces using HTML, CSS, JavaScript",
      "Fixed UI/UX issues and collaborated using Git",
      "Worked with project management tools"
    ],
    tech: ["HTML", "CSS", "JavaScript", "Git"],
    type: "job"
  },
  {
    title: "General Secretary",
    company: "C3 Society - COMSATS Islamabad",
    period: "2023 - 2024",
    location: "Islamabad",
    description: "Led one of the largest student societies at COMSATS University.",
    achievements: [
      "Managed society operations and events",
      "Coordinated with multiple departments",
      "Organized technical and non-technical events"
    ],
    tech: ["Leadership", "Management", "Public Speaking"],
    type: "leadership"
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Experiences
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My<span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From technical development to leadership roles. 
            Building experience across full-stack development and team management.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 to-primary/10 hidden md:block"></div>
            
            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row'
                  }`}
                >
                  {/* Left Content - For even indexes */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                          <div>
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                              {exp.title}
                            </h3>
                            <p className="text-lg text-primary font-semibold">{exp.company}</p>
                          </div>
                          <Badge variant={exp.type === "job" ? "default" : "secondary"}>
                            {exp.type === "job" ? "Professional" : "Leadership"}
                          </Badge>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <ul className="space-y-2 mb-4">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot - Visible only on medium+ screens */}
                  <div className="hidden md:flex w-4 h-4 bg-primary rounded-full border-4 border-background z-10 flex-shrink-0"></div>

                  {/* Right Spacer - For alignment */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'} hidden md:block`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Badge variant="secondary" className="text-sm">
            Open to new opportunities
          </Badge>
        </div>
      </div>
    </section>
  )
}