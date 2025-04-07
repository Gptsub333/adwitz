import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Global Rebrand for Tech Leader",
      category: "Branding & Strategy",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2940&auto=format&fit=crop",
      results: "150% increase in brand recognition",
    },
    {
      title: "Integrated Digital Campaign",
      category: "Digital & Social",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2874&auto=format&fit=crop",
      results: "3.2M impressions, 28% conversion rate",
    },
    {
      title: "Product Launch Strategy",
      category: "Advertising & Creative",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2940&auto=format&fit=crop",
      results: "Sold out in 48 hours, 5x ROI",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <div className="inline-block px-4 py-1 rounded-md bg-amber-100 text-amber-600 text-sm font-medium mb-4">
              Case Studies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Work Speaks For Itself</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore how we've helped brands across industries achieve their marketing goals with strategic, creative
              solutions.
            </p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0 border-gray-300 text-gray-700 hover:bg-gray-100">
            View All Case Studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={
                    study.image ||
                    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2940&auto=format&fit=crop"
                  }
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-amber-600 mb-2">{study.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-sm text-gray-600">{study.results}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

