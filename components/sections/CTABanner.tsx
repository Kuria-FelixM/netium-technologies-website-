'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '../Container'

export function CTABanner() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-secondary text-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Secure Your Digital Future?</h2>
          <p className="text-lg text-white text-opacity-90 mb-8">
            Get a free security assessment from our experts. We&apos;ll analyze your current setup and recommend tailored solutions for your organization.
          </p>
          <Button
            onClick={() => scrollToSection('#contact')}
            className="bg-white text-secondary hover:bg-gray-100 px-8 py-4 text-lg font-bold flex items-center gap-2 mx-auto"
          >
            Get Free Assessment
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Container>
    </section>
  )
}
