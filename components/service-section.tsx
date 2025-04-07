"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Lightbulb, Palette, Pencil, Monitor, Megaphone, Share2, ChevronRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ServiceSectionProps {
  id: string
  title: string
  description: string
  topics: string[]
  image: string
  icon: string
  isEven: boolean
}

export default function ServiceSection({ id, title, description, topics, image, icon, isEven }: ServiceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Using vanilla JavaScript for the interaction as requested
    const section = sectionRef.current
    if (!section) return

    const topicElements = section.querySelectorAll(".topic-item")

    topicElements.forEach((topic) => {
      topic.addEventListener("click", (e) => {
        const target = e.currentTarget as HTMLElement
        const content = target.querySelector(".topic-content") as HTMLElement
        const icon = target.querySelector(".topic-icon") as HTMLElement
        const isExpanded = target.getAttribute("data-expanded") === "true"

        // Close all other topics first
        topicElements.forEach((otherTopic) => {
          if (otherTopic !== topic) {
            const otherContent = otherTopic.querySelector(".topic-content") as HTMLElement
            const otherIcon = otherTopic.querySelector(".topic-icon") as HTMLElement

            if (otherTopic.getAttribute("data-expanded") === "true") {
              otherTopic.setAttribute("data-expanded", "false")
              otherContent.style.maxHeight = "0"
              otherIcon.style.transform = "rotate(0deg)"
            }
          }
        })

        // Toggle current topic
        if (isExpanded) {
          target.setAttribute("data-expanded", "false")
          content.style.maxHeight = "0"
          icon.style.transform = "rotate(0deg)"
        } else {
          target.setAttribute("data-expanded", "true")
          content.style.maxHeight = content.scrollHeight + "px"
          icon.style.transform = "rotate(90deg)"
        }
      })
    })

    // Cleanup event listeners on component unmount
    return () => {
      topicElements.forEach((topic) => {
        topic.removeEventListener("click", () => {})
      })
    }
  }, [])

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "lightbulb":
        return <Lightbulb className="h-6 w-6" />
      case "palette":
        return <Palette className="h-6 w-6" />
      case "pencil":
        return <Pencil className="h-6 w-6" />
      case "monitor":
        return <Monitor className="h-6 w-6" />
      case "megaphone":
        return <Megaphone className="h-6 w-6" />
      case "share2":
        return <Share2 className="h-6 w-6" />
      default:
        return <Lightbulb className="h-6 w-6" />
    }
  }

  // Generate content for each topic
  const getTopicContent = (topic: string) => {
    // Create different content based on the topic
    const baseContent = `${topic} is a critical component of our ${title.toLowerCase()} services. Our team of experts uses industry-leading methodologies to deliver exceptional results.`

    // Add some specific details based on the topic
    if (topic.toLowerCase().includes("brand")) {
      return `${baseContent} We focus on creating memorable brand experiences that resonate with your target audience and drive customer loyalty.`
    } else if (topic.toLowerCase().includes("market") || topic.toLowerCase().includes("analysis")) {
      return `${baseContent} Our data-driven approach ensures you get actionable insights that inform strategic decisions and create competitive advantages.`
    } else if (topic.toLowerCase().includes("design") || topic.toLowerCase().includes("creative")) {
      return `${baseContent} Our creative team combines artistic vision with strategic thinking to produce designs that are both beautiful and effective.`
    } else if (topic.toLowerCase().includes("digital") || topic.toLowerCase().includes("website")) {
      return `${baseContent} We leverage the latest technologies and best practices to create digital experiences that engage users and drive conversions.`
    } else if (topic.toLowerCase().includes("social") || topic.toLowerCase().includes("community")) {
      return `${baseContent} Our social media strategies build authentic connections with your audience and amplify your brand message across platforms.`
    } else {
      return `${baseContent} Contact us today to learn more about how we can help your business succeed.`
    }
  }

  return (
    <section id={id} ref={sectionRef} className={cn("py-24 scroll-mt-20", isEven ? "bg-gray-50" : "bg-white")}>
      <div className="container mx-auto px-4">
        <div className={cn("grid md:grid-cols-2 gap-12 items-center")}>
          <div className={cn(isEven ? "order-1" : "order-1 md:order-2")}>
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={
                    image ||
                    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" ||
                    "/placeholder.svg"
                  }
                  alt={title}
                  fill
                  className="object-cover"
                />
                <div className={cn("absolute inset-0 bg-gradient-to-t from-black/50 to-transparent")}></div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div
                  className={cn(
                    "flex items-center justify-center w-16 h-16 rounded-full",
                    isEven ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-600",
                  )}
                >
                  {getIcon(icon)}
                </div>
              </div>
            </div>
          </div>

          <div className={cn(isEven ? "order-2" : "order-2 md:order-1")}>
            <div className="max-w-lg">
              <div
                className={cn(
                  "inline-block px-4 py-1 rounded-md text-sm font-medium mb-4",
                  isEven ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-600",
                )}
              >
                Our Expertise
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
              <p className="text-lg text-gray-600 mb-8">{description}</p>

              <div className="grid gap-2 mb-8">
                {topics.map((topic, index) => (
                  <div key={index} className="topic-item cursor-pointer" data-expanded="false">
                    <div className={cn("flex items-start p-3 rounded-md transition-colors", "hover:bg-gray-100")}>
                      <ChevronRight
                        className={cn(
                          "topic-icon h-5 w-5 mt-0.5 mr-2 flex-shrink-0 transition-transform duration-300",
                          isEven ? "text-blue-600" : "text-amber-500",
                        )}
                      />
                      <div className="w-full">
                        <p className="text-gray-800 font-medium">{topic}</p>
                        <div className="topic-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out mt-2 text-sm text-gray-600">
                          <p className="pb-3">{getTopicContent(topic)}</p>
                          <Button
                            size="sm"
                            variant="outline"
                            className={cn(
                              "mt-2",
                              isEven
                                ? "text-blue-700 border-blue-300 hover:bg-blue-50"
                                : "text-amber-600 border-amber-300 hover:bg-amber-50",
                            )}
                          >
                            Learn more
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                className={cn(
                  "group",
                  isEven ? "bg-blue-800 hover:bg-blue-900 text-white" : "bg-amber-500 hover:bg-amber-600 text-white",
                )}
              >
                Learn More About {title}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

