import { TrendingUp, Users, Award, BarChart3 } from "lucide-react"

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact By The Numbers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've helped businesses of all sizes achieve remarkable results through strategic marketing initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 mb-4">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">250%</h3>
            <p className="text-gray-600">Average ROI for our clients</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-4">
              <Users size={28} />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600">Clients worldwide</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 mb-4">
              <Award size={28} />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">75+</h3>
            <p className="text-gray-600">Industry awards</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-4">
              <BarChart3 size={28} />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">12M+</h3>
            <p className="text-gray-600">Leads generated</p>
          </div>
        </div>
      </div>
    </section>
  )
}

