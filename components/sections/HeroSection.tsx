'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '../Container'

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative bg-gradient-to-b from-secondary via-blue-900 to-secondary text-white pt-8 pb-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-25" />
      <div className="absolute top-1/2 -right-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-overlay filter blur-2xl opacity-20" />

      {/* Content */}
      <Container className="relative z-10 py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-balance">
              Secure Your Digital Future Today
            </h1>
            <p className="text-base sm:text-lg text-white text-opacity-90 mb-6 leading-relaxed text-balance">
              Navigate the digital landscape with confidence. Netium Technologies provides trusted cybersecurity and cloud advisory services designed for startups and enterprises across Kenya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-primary hover:bg-blue-700 text-white px-6 py-6 text-lg font-bold flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start rounded-lg"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => scrollToSection('#services')}
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-secondary px-6 py-6 text-lg font-bold w-full sm:w-auto justify-center sm:justify-start transition-all rounded-lg"
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="hidden lg:flex justify-center items-center">
            <Image
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop"
              alt="Team working on cybersecurity solutions"
              width={500}
              height={500}
              priority
              className="w-full max-w-md drop-shadow-2xl rounded-lg"
            />
          </div>
        </div>
      </Container>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 opacity-5 w-96 h-96 rounded-full bg-primary blur-3xl" />
    </section>
  )
}
