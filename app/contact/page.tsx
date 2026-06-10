import { Metadata } from 'next'
import { ContactSection } from '@/components/sections/ContactSection'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/Container'
import { Mail, Phone, MapPin, Clock, Plus } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Netium Technologies | Get In Touch',
  description: 'Contact Netium Technologies for cybersecurity and cloud advisory services. Get a free assessment from our expert team in Nairobi, Kenya.',
  openGraph: {
    title: 'Contact Netium Technologies',
    description: 'Reach out to our cybersecurity experts for consultation and assessments.',
  },
}

export default function ContactPage() {
  const faqs = [
    {
      question: 'What does a free security assessment include?',
      answer: 'Our free assessment evaluates your current security posture, identifies vulnerabilities, and provides recommendations for improvement. It typically takes 2-3 weeks and includes a comprehensive report.',
    },
    {
      question: 'How quickly can you respond to urgent security incidents?',
      answer: 'We offer 24/7 incident response support for our enterprise clients. For other inquiries, we typically respond within 24 business hours.',
    },
    {
      question: 'Do you work with organizations of all sizes?',
      answer: 'Yes! We serve startups, SMEs, and large enterprises. We tailor our services to match your organization\'s size, budget, and specific security needs.',
    },
  ]

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-secondary text-white py-16 md:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-white text-opacity-90">
              Have questions about our cybersecurity and cloud advisory services? We&apos;re here to help. Reach out today for a free consultation.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Additional Contact Info */}
      <section className="py-20 md:py-24 bg-muted">
        <Container>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Mail className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a href="mailto:info@netiumtechnologies.com" className="text-muted-foreground hover:text-primary transition-colors">
                info@netiumtechnologies.com
              </a>
            </div>
            <div className="flex flex-col items-center text-center">
              <Phone className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <a href="tel:+254721939393" className="text-muted-foreground hover:text-primary transition-colors">
                +254 721 939 393
              </a>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">
                Applewood Adams<br />
                Nairobi, Kenya
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Hours</h3>
              <p className="text-muted-foreground">
                Mon - Fri: 9 AM - 6 PM<br />
                Sat: By Appointment
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-24 bg-background">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our services and process
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <Plus className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}
