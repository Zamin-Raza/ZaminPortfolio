"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Collegue",
    role: "Developer at ZenDev",
    content: "Zamin demonstrated exceptional technical skills in building scalable backend systems. His work on our AI-powered chatbot integration was delivered ahead of schedule with excellent code quality.",
    avatar: "/avatars/1.jpg",
    rating: 5,
    project: ""
  },
  {
    name: "Shahryar Ahmed", 
    role: "Project Partner",
    content: "Working with Zamin was a great experience. His backend APIs were well-documented and reliable. He has a strong understanding of both frontend and backend development.",
    avatar: "/avatars/2.jpg",
    rating: 5,
    project: "SafeSitePlus"
  },
  {
    name: "Aleeza Maryam",
    role: "TEDx CUI Attendee",
    content: "Zamin's leadership in organizing TEDx events was impressive. He managed logistics seamlessly and created a professional atmosphere for speakers and attendees.",
    avatar: "/avatars/3.jpg",
    rating: 4,
    project: "TEDx CUI 2024"
  },
  {
    name: "FYP Supervisor",
    role: "Computer Science Department",
    content: "Zamin showed exceptional problem-solving skills in his final year project. His computer vision-based surveillance system demonstrated deep technical understanding and innovation.",
    avatar: "/avatars/4.jpg",
    rating: 5,
    project: "Academic Project"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What People <span className="text-primary">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from colleagues, clients, and collaborators about my work and professionalism.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full border-0 shadow-lg bg-background">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote className="w-8 h-8 text-primary/30" />
                      </div>

                      {/* Content */}
                      <p className="text-muted-foreground mb-6 flex-grow italic">
                        "{testimonial.content}"
                      </p>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating 
                                ? "text-yellow-500 fill-yellow-500" 
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 mt-auto">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback className="bg-primary/10">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {testimonial.project}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">10+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">5★</div>
            <div className="text-sm text-muted-foreground">Avg Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">2+</div>
            <div className="text-sm text-muted-foreground">Years Exp</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div> */}
      </div>
    </section>
  )
}