import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function ContactCta() {
  return (
    <section className="py-20 bg-amber-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
          Ready to Transform Your Marketing Strategy?
        </h2>
        <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
          Let's discuss how our team can help you achieve your business goals through strategic marketing solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            className="bg-white text-amber-600 hover:bg-transparent hover:text-white border border-white px-8 font-semibold transition-colors"
          >
            View Our Work
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

