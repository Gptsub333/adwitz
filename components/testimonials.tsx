import Image from "next/image"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Working with this ADWITZ transformed our brand presence. Their strategic approach to marketing delivered measurable results that exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CMO, TechVision Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop",
    },
    {
      quote:
        "Their creative team brought fresh ideas that completely revitalized our marketing strategy. We've seen a 200% increase in engagement since partnering with them.",
      author: "Michael Chen",
      position: "Marketing Director, Elevate Brands",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
    },
    {
      quote:
        "The depth of expertise across all marketing disciplines is impressive. They truly function as an extension of our team, understanding our goals and delivering results.",
      author: "Jessica Rivera",
      position: "VP of Marketing, Global Solutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2888&auto=format&fit=crop",
    },
  ]

  return (
    <section className="py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 p-8 rounded-lg relative">
              <Quote className="absolute top-6 right-6 h-12 w-12 text-blue-600/30" />
              <p className="text-lg mb-6 relative z-10">"{testimonial.quote}"</p>

              <div className="flex items-center">
                <div className="mr-4 relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={
                      testimonial.image ||
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop"
                    }
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-blue-200 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

