"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: "STRATEGY", href: "#strategy" },
    { name: "BRANDING", href: "#branding" },
    { name: "CREATIVE", href: "#creative-services" },
    { name: "DIGITAL", href: "#digital" },
    { name: "ADVERTISING", href: "#crm-advertising" },
    { name: "SOCIAL", href: "#social" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Find the current active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        // Account for header height (80px) plus a small buffer
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Function to handle smooth scrolling with offset for header height
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      // Get the actual header height dynamically
      const header = document.querySelector("header")
      const headerHeight = header ? header.getBoundingClientRect().height : 70

      // Calculate position with a smaller offset to reduce extra space
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerHeight + 5 // Adding 5px to reduce the gap

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-bold text-2xl text-blue-900">
            ADWITZ<span className="text-amber-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-800",
                  activeSection === item.href.substring(1)
                    ? "text-blue-800 border-b-2 border-blue-800"
                    : "text-gray-800",
                )}
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-md px-6">Get in Touch</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "py-2 text-sm font-medium transition-colors hover:text-blue-800",
                    activeSection === item.href.substring(1) ? "text-blue-800" : "text-gray-700",
                  )}
                  onClick={(e) => {
                    scrollToSection(e, item.href)
                    closeMenu()
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-amber-500 hover:bg-amber-600 text-white w-full mt-2">Get in Touch</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

