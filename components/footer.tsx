import Link from "next/link"
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Facebook } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">
              ADWITZ<span className="text-amber-500">.</span>
            </h3>
            <p className="mb-6 text-gray-400 max-w-md">
              We're a full-service marketing ADWITZ dedicated to helping brands grow through strategic, creative
              solutions that drive measurable results.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-800 hover:text-white transition-colors"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-800 hover:text-white transition-colors"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-800 hover:text-white transition-colors"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-800 hover:text-white transition-colors"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>
                  123 Marketing Street, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-amber-500 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-amber-500 flex-shrink-0" />
                <span>info@marketingADWITZ.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#strategy" className="text-gray-400 hover:text-white transition-colors">
                  Strategy
                </Link>
              </li>
              <li>
                <Link href="#branding" className="text-gray-400 hover:text-white transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="#creative-services" className="text-gray-400 hover:text-white transition-colors">
                  Creative Services
                </Link>
              </li>
              <li>
                <Link href="#digital" className="text-gray-400 hover:text-white transition-colors">
                  Digital
                </Link>
              </li>
              <li>
                <Link href="#crm-advertising" className="text-gray-400 hover:text-white transition-colors">
                  CRM Advertising
                </Link>
              </li>
              <li>
                <Link href="#social" className="text-gray-400 hover:text-white transition-colors">
                  Social
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© {currentYear} Marketing ADWITZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

