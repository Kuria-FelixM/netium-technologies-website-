'use client'

import { useState } from 'react'
import { Menu, X, Shield, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const serviceItems = [
    { label: 'Cybersecurity Services', href: '/services/cybersecurity' },
    { label: 'Cloud Advisory', href: '/services/cloud' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:text-secondary transition-colors">
            <Shield className="w-6 h-6" />
            <span>Netium</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm font-medium">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact">
              <Button className="bg-primary hover:bg-blue-700 text-white px-8 py-5 font-semibold text-lg">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Services Dropdown */}
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left px-4 py-2 flex items-center justify-between text-foreground hover:text-primary hover:bg-muted rounded transition-colors font-medium"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-2">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
              
              <div className="px-4 pt-2">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-blue-700 text-white py-3 font-semibold text-base">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
