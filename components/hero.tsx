"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById("strategy")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
          alt="Marketing ADWITZ hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-20 md:pt-24 md:pb-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-block px-4 py-1 mb-6 rounded-md bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-medium">
              Award-Winning Marketing ADWITZ
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              We Create <span className="text-amber-400">Powerful</span> Brand Experiences
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-xl">
              Strategic marketing solutions that drive growth and deliver measurable results for your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-md px-8 bg-amber-500 hover:bg-amber-600 text-white"
                onClick={scrollToServices}
              >
                Explore Our Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-md px-8 border-amber-400 text-amber-300 hover:text-amber-200 hover:border-amber-300 bg-transparent hover:bg-transparent"
              >
                Watch Showreel
              </Button>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="relative h-[500px] w-full">
              <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-white/10 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop"
                  alt="Marketing showcase"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute bottom-[12px] left-0 w-[60%] h-[40%] bg-amber-500 rounded-lg shadow-xl overflow-hidden">
                <div className="p-6 text-white">
                  <p className="text-3xl font-bold mb-2">94%</p>
                  <p className="text-sm">Client satisfaction rate with our strategic marketing solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-10">
        <ArrowDown className="h-6 w-6 text-white" />
      </div>
    </section>
  )
}

