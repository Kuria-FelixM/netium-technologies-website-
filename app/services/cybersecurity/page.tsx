'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, Lock, AlertCircle, Users, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/Container'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumb } from '@/components/Breadcrumb'

export default function CybersecurityPage() {
  const services = [
    {
      icon: AlertCircle,
      title: 'Security Assessments & Audits',
      description: 'Comprehensive evaluation of your security posture, vulnerability scanning, and risk assessment. We identify gaps and provide actionable recommendations.',
    },
    {
      icon: Lock,
      title: 'Incident Response & Forensics',
      description: '24/7 incident response team ready to contain, investigate, and remediate security breaches. Includes post-incident analysis and recommendations.',
    },
    {
      icon: Users,
      title: 'Penetration Testing',
      description: 'Authorized testing of your systems to simulate real-world attacks and identify exploitable vulnerabilities before attackers do.',
    },
    {
      icon: Shield,
      title: 'Security Architecture Design',
      description: 'Design and implementation of secure network and system architectures aligned with industry best practices and compliance requirements.',
    },
    {
      icon: Users,
      title: 'Security Awareness Training',
      description: 'Educate your team on security best practices, phishing awareness, and safe data handling to reduce human-related security risks.',
    },
    {
      icon: CheckCircle,
      title: 'Compliance & Governance',
      description: 'Help achieve and maintain compliance with ISO 27001, NIST, HIPAA, and other regulatory frameworks relevant to your industry.',
    },
  ]

  const howWeWork = [
    {
      step: '01',
      title: 'Assessment',
      description: 'We conduct a thorough assessment of your current security posture, systems, and processes.',
    },
    {
      step: '02',
      title: 'Analysis',
      description: 'Our experts analyze findings to identify vulnerabilities, risks, and gaps in your security framework.',
    },
    {
      step: '03',
      title: 'Recommendations',
      description: 'We provide prioritized, actionable recommendations tailored to your business needs and budget.',
    },
    {
      step: '04',
      title: 'Implementation & Support',
      description: 'We guide implementation, provide training, and offer ongoing support to ensure success.',
    },
  ]

  const scrollToContact = () => {
    if (typeof window !== 'undefined') {
      const contactSection = document.querySelector('#contact') || document.querySelector('footer')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <Navbar />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '#' }, { label: 'Cybersecurity Services' }]} />

      {/* Hero Section */}
      <section className="bg-secondary text-white pt-8 pb-8 overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Cybersecurity Services</h1>
              <p className="text-base sm:text-lg text-white text-opacity-90 mb-6">
                Protect your organization from evolving cyber threats with our comprehensive cybersecurity solutions. From assessments to incident response, we help you build a resilient security posture.
              </p>
              <Button
                onClick={scrollToContact}
                className="bg-white text-secondary hover:bg-gray-100 px-6 py-6 text-lg font-bold flex items-center gap-2 rounded-lg"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&auto=format&fit=crop"
              alt="Cybersecurity Services"
              width={500}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24 bg-background">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Cybersecurity Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions covering all aspects of organizational cybersecurity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* How We Work */}
      <section className="py-20 md:py-24 bg-muted">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven 4-step process ensures effective security implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {howWeWork.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-primary text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Strengthen Your Security?</h2>
            <p className="text-xl text-white text-opacity-90 mb-8">
              Start with a free security assessment from our experts. We&apos;ll evaluate your current posture and provide recommendations tailored to your organization.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-bold flex items-center gap-2 mx-auto"
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}
