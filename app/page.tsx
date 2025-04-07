import Header from "@/components/header"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import ServiceSection from "@/components/service-section"
import Testimonials from "@/components/testimonials"
import CaseStudies from "@/components/case-studies"
import ContactCta from "@/components/contact-cta"

export default function Home() {
  const services = [
    {
      id: "strategy",
      title: "STRATEGY",
      description: "Strategic planning to position your brand for success in the market.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
      icon: "lightbulb",
      topics: [
        "Brand auditing",
        "Market analysis",
        "Content strategy",
        "Messaging development",
        "Customer journey mapping",
        "Persona development",
        "Integrated campaign ideation",
        "Focus groups and market research",
      ],
    },
    {
      id: "branding",
      title: "BRANDING",
      description: "Develop a distinctive brand identity that resonates with your audience.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2940&auto=format&fit=crop",
      icon: "palette",
      topics: [
        "Brand development and standards",
        "Positioning and tone of voice",
        "Brand storytelling",
        "Product naming",
        "Tradeshows and events",
        "Logo design",
        "Sales enablement",
        "Experiential marketing",
      ],
    },
    {
      id: "creative-services",
      title: "CREATIVE SERVICES",
      description: "Bring your brand to life with compelling creative assets.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop",
      icon: "pencil",
      topics: [
        "Concepting and ideation",
        "Design",
        "Content creation",
        "Copywriting",
        "Package design and rollout",
        "Photography",
        "Illustration and animation",
        "Visual effects",
      ],
    },
    {
      id: "digital",
      title: "DIGITAL",
      description: "Establish a powerful digital presence across all platforms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2815&auto=format&fit=crop",
      icon: "monitor",
      topics: [
        "Website design",
        "Website development",
        "User Experience Design",
        "Video",
        "Digital advertising",
        "Email campaigns",
        "Lead nurture",
      ],
    },
    {
      id: "crm-advertising",
      title: "CRM ADVERTISING",
      description: "Connect with your audience through targeted advertising campaigns.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop",
      icon: "megaphone",
      topics: [
        "Print",
        "Direct response",
        "Promotions",
        "Broadcast",
        "Out of Home (OOH)",
        "Point of Sale (POS)",
        "Media planning and buying",
        "In-store sampling",
      ],
    },
    {
      id: "social",
      title: "SOCIAL",
      description: "Build community and engagement through strategic social media.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop",
      icon: "share2",
      topics: [
        "Content development",
        "Community management",
        "Social ad buying",
        "Analytics",
        "Social listening",
        "Influencer programs",
        "Social strategy",
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
   
      <div>
        {services.map((service, index) => (
          <ServiceSection
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            topics={service.topics}
            image={service.image}
            icon={service.icon}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
      <CaseStudies />
      <Testimonials />
      <ContactCta />
      <Footer />
    </main>
  )
}

