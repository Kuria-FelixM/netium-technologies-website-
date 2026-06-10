'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Cloud, Database, Shield, Zap, BarChart3, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/Container'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumb } from '@/components/Breadcrumb'

export default function CloudPage() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Strategy & Planning',
      description: 'Develop a comprehensive cloud strategy aligned with your business goals, including platform selection and migration roadmap.',
    },
    {
      icon: Database,
      title: 'Cloud Migration',
      description: 'Plan and execute seamless migration of your applications and data to the cloud with minimal downtime.',
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Implement security best practices, identity management, and compliance controls in your cloud environment.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize cloud infrastructure for performance, cost efficiency, and scalability.',
    },
    {
      icon: BarChart3,
      title: 'Cost Optimization',
      description: 'Analyze and optimize your cloud spending to reduce costs while maintaining performance and security.',
    },
    {
      icon: Lock,
      title: 'Disaster Recovery & Business Continuity',
      description: 'Design and implement disaster recovery and backup solutions to ensure your critical systems stay available.',
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud & Hybrid Solutions',
      description: 'Design solutions that work across multiple cloud providers or hybrid environments for flexibility and resilience.',
    },
    {
      icon: Database,
      title: 'Database Services',
      description: 'Architecture, migration, and optimization of databases in the cloud with focus on security and performance.',
    },
    {
      icon: Zap,
      title: 'Managed Services & Support',
      description: 'Ongoing management, monitoring, and support for your cloud infrastructure and applications.',
    },
  ]

  const platforms = [
    {
      name: 'Amazon Web Services (AWS)',
      services: ['EC2', 'S3', 'RDS', 'Lambda', 'VPC', 'IAM', 'CloudWatch'],
    },
    {
      name: 'Microsoft Azure',
      services: ['Virtual Machines', 'App Service', 'SQL Database', 'Azure Kubernetes', 'Azure DevOps', 'Cosmos DB'],
    },
    {
      name: 'Google Cloud Platform (GCP)',
      services: ['Compute Engine', 'Cloud Storage', 'Cloud SQL', 'BigQuery', 'Kubernetes Engine', 'Cloud Functions'],
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
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '#' }, { label: 'Cloud Advisory' }]} />

      {/* Hero Section */}
      <section className="bg-secondary text-white pt-8 pb-8 overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Cloud Advisory Services</h1>
              <p className="text-base sm:text-lg text-white text-opacity-90 mb-6">
                Transform your infrastructure with secure, scalable cloud solutions. From strategy to implementation, we guide your cloud journey with expertise in AWS, Azure, and GCP.
              </p>
              <Button
                onClick={scrollToContact}
                className="bg-white text-secondary hover:bg-gray-100 px-6 py-6 text-lg font-bold flex items-center gap-2 rounded-lg"
              >
                Get Free Cloud Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop"
              alt="Cloud Advisory Services"
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Cloud Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cloud solutions covering strategy, migration, security, and optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Cloud Platforms */}
      <section className="py-20 md:py-24 bg-muted">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cloud Platforms We Support</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert knowledge across all major cloud providers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">{platform.name}</h3>
                <div className="space-y-2">
                  {platform.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Cloud Section */}
      <section className="py-20 md:py-24 bg-background">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Why Move to the Cloud?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cost Efficiency</h3>
                  <p className="text-muted-foreground">Pay only for what you use. Reduce capital expenditure and optimize operational costs.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Scalability</h3>
                  <p className="text-muted-foreground">Scale your infrastructure up or down based on demand without major upfront investment.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Security</h3>
                  <p className="text-muted-foreground">Leverage enterprise-grade security features and compliance certifications from cloud providers.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Flexibility</h3>
                  <p className="text-muted-foreground">Access your applications and data from anywhere, enabling modern distributed work environments.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">From Infrastructure to Innovation</h3>
                <p className="text-white text-opacity-90 mb-4">
                  Move from maintaining infrastructure to focusing on innovation. Let cloud providers handle the heavy lifting while your team focuses on your business.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Checkmark />
                    <span className="text-muted-foreground">Assess your current infrastructure and applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Checkmark />
                    <span className="text-muted-foreground">Develop a tailored migration strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Checkmark />
                    <span className="text-muted-foreground">Execute migration with minimal disruption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Checkmark />
                    <span className="text-muted-foreground">Optimize and support your cloud environment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-primary text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl text-white text-opacity-90 mb-8">
              Start with a free cloud consultation. We&apos;ll assess your current setup and provide recommendations for cloud adoption.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-bold flex items-center gap-2 mx-auto"
            >
              Get Free Cloud Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}

function Checkmark() {
  return (
    <svg
      className="w-6 h-6 text-primary flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}
