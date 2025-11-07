"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiMongodb,
  SiPython,
  SiFastapi,
  SiGit,
  SiDocker,
  SiOpencv,
  SiTensorflow,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
//   SiAmazonaws,
  SiLinux
} from "react-icons/si"
import { 
  Brain, 
  Users, 
  Mic, 
  BookOpen,
  Cpu,
  Database
} from "lucide-react"
import React from "react"  // Add this import

// const techSkills = [
//   // Core Technologies
//   { icon: SiReact, name: "React", category: "frontend", level: 90 },
//   { icon: SiNextdotjs, name: "Next.js", category: "frontend", level: 85 },
//   { icon: SiNodedotjs, name: "Node.js", category: "backend", level: 88 },
//   { icon: SiMongodb, name: "MongoDB", category: "backend", level: 82 },
//   { icon: SiPython, name: "Python", category: "backend", level: 90 },
//   { icon: SiFastapi, name: "FastAPI", category: "backend", level: 85 },
  
//   // AI/ML Technologies
//   { icon: Brain, name: "LangChain", category: "ai", level: 80 },
//   { icon: Cpu, name: "LLMs", category: "ai", level: 75 },
//   { icon: SiOpencv, name: "OpenCV", category: "ai", level: 78 },
//   { icon: SiTensorflow, name: "TensorFlow", category: "ai", level: 70 },
//   { icon: Database, name: "YOLO", category: "ai", level: 75 },
  
//   // Tools & Others
//   { icon: SiGit, name: "Git", category: "tools", level: 88 },
//   { icon: SiJavascript, name: "JavaScript", category: "frontend", level: 85 },
//   { icon: SiTypescript, name: "TypeScript", category: "frontend", level: 80 },
//   { icon: SiTailwindcss, name: "Tailwind", category: "frontend", level: 85 },
//   { icon: SiFirebase, name: "Firebase", category: "backend", level: 75 },
//   { icon: SiDocker, name: "Docker", category: "tools", level: 70 },
// //   { icon: SiAmazonaws, name: "AWS", category: "tools", level: 65 },
//   { icon: SiLinux, name: "Linux", category: "tools", level: 75 }
// ]
const techSkills = [
  // Core Technologies
  { icon: SiReact, name: "React", category: "frontend", level: 90, color: "text-blue-500" },
  { icon: SiNextdotjs, name: "Next.js", category: "frontend", level: 85, color: "text-black dark:text-white" },
  { icon: SiNodedotjs, name: "Node.js", category: "backend", level: 88, color: "text-green-600" },
  { icon: SiMongodb, name: "MongoDB", category: "backend", level: 82, color: "text-green-500" },
  { icon: SiPython, name: "Python", category: "backend", level: 90, color: "text-blue-400" },
  { icon: SiFastapi, name: "FastAPI", category: "backend", level: 85, color: "text-teal-500" },
  
  // AI/ML Technologies
  { icon: Brain, name: "LangChain", category: "ai", level: 80, color: "text-purple-500" },
  { icon: Cpu, name: "LLMs", category: "ai", level: 75, color: "text-orange-500" },
  { icon: SiOpencv, name: "OpenCV", category: "ai", level: 78, color: "text-red-500" },
  { icon: SiTensorflow, name: "TensorFlow", category: "ai", level: 70, color: "text-orange-500" },
  { icon: Database, name: "YOLO", category: "ai", level: 75, color: "text-blue-600" },
  
  // Tools & Others
  { icon: SiGit, name: "Git", category: "tools", level: 88, color: "text-orange-600" },
  { icon: SiJavascript, name: "JavaScript", category: "frontend", level: 85, color: "text-yellow-500" },
  { icon: SiTypescript, name: "TypeScript", category: "frontend", level: 80, color: "text-blue-600" },
  { icon: SiTailwindcss, name: "Tailwind", category: "frontend", level: 85, color: "text-cyan-500" },
  { icon: SiFirebase, name: "Firebase", category: "backend", level: 75, color: "text-yellow-500" },
  { icon: SiDocker, name: "Docker", category: "tools", level: 70, color: "text-blue-500" },
//   { icon: SiAmazonaws, name: "AWS", category: "tools", level: 65, color: "text-orange-500" },
  { icon: SiLinux, name: "Linux", category: "tools", level: 75, color: "text-yellow-700" }
]

const softSkills = [
  { icon: Users, name: "Team Management", category: "leadership" },
  { icon: Mic, name: "Public Speaking", category: "communication" },
  { icon: BookOpen, name: "Teaching/Mentoring", category: "communication" },
  { icon: Users, name: "Event Management", category: "leadership" }
]

const categories = [
  { id: "all", name: "All Skills" },
  { id: "ai", name: "AI/ML" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "tools", name: "Tools & DevOps" }
]

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const filteredSkills = selectedCategory === "all" 
    ? techSkills 
    : techSkills.filter(skill => skill.category === selectedCategory)

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Tech Stack
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From AI/Computer Vision to full-stack development. 
            Hover over skills to see proficiency levels.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Badge
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 transition-all"
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Badge>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <Card 
                  className="relative group cursor-pointer w-24 h-24 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <CardContent className="p-0 flex flex-col items-center justify-center gap-2">
                    {/* Icon */}
                    {/* <div className="text-2xl text-primary">
                      {React.createElement(skill.icon)}
                    </div> */}
                    <div className={`text-2xl ${skill.color}`}>
  {React.createElement(skill.icon)}
</div>
                    
                    {/* Skill Name */}
                    <span className="text-xs font-medium text-center">
                      {skill.name}
                    </span>

                    {/* Progress Bar on Hover */}
                    <AnimatePresence>
                      {hoveredSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-background border rounded-full px-2 py-1 shadow-lg"
                        >
                          <div className="w-16 bg-secondary rounded-full h-1">
                            <div 
                              className="bg-primary h-1 rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                          <span className="text-[10px] font-medium">{skill.level}%</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Professional Skills</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {softSkills.map((skill) => (
              <Badge 
                key={skill.name} 
                variant="secondary" 
                className="px-6 py-3 text-sm gap-2"
              >
                <skill.icon className="w-4 h-4" />
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}