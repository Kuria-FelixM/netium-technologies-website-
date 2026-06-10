'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '../Container'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields')
      return
    }
    // Form submission logic would go here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', service: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Information & Image */}
          <div>
            <Image
              src="/contact-illustration.png"
              alt="Netium Technologies contact us"
              width={500}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg mb-8"
            />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <a href="mailto:info@netiumtechnologies.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@netiumtechnologies.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                  <a href="tel:+254721939393" className="text-muted-foreground hover:text-primary transition-colors">
                    +254 721 939 393
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">Applewood Adams, Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Response Time</h4>
                  <p className="text-muted-foreground">Typically within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-800 font-semibold mb-2">Thank You!</p>
                <p className="text-green-700">We&apos;ve received your message and will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="cybersecurity">Cybersecurity Services</option>
                    <option value="cloud">Cloud Advisory</option>
                    <option value="assessment">Security Assessment</option>
                    <option value="training">Security Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell us about your security needs..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-700 text-white py-4 font-bold text-base"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
