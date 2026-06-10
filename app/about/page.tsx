import Image from 'next/image'
import { Metadata } from 'next'
import { Shield, Zap, Heart, Target, Users, Globe, Award, BadgeCheck, FileCheck } from 'lucide-react'
import { Container } from '@/components/Container'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'About Netium Technologies | Our Story, Mission & Team',
  description: 'Learn about Netium Technologies, our mission to secure Kenya\'s digital landscape, and our expert team of cybersecurity professionals.',
  openGraph: {
    title: 'About Netium Technologies',
    description: 'Discover our story, mission, and the team behind Netium Technologies cybersecurity services.',
  },
}

export default function AboutPage() {
  const focusAreas = [
    {
      icon: Shield,
      title: 'Cybersecurity Excellence',
      description: 'Delivering industry-leading security solutions and best practices.',
    },
    {
      icon: Zap,
      title: 'Innovation & Adaptation',
      description: 'Staying ahead of evolving threats with cutting-edge technology.',
    },
    {
      icon: Heart,
      title: 'Client Trust',
      description: 'Building long-term relationships based on integrity and results.',
    },
    {
      icon: Target,
      title: 'Precision & Accuracy',
      description: 'Tailoring solutions to each organization\'s unique security needs.',
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'Working closely with clients as trusted security partners.',
    },
    {
      icon: Globe,
      title: 'Local Expertise',
      description: 'Deep knowledge of Kenya\'s business environment and threat landscape.',
    },
  ]

  return (
    <>
      <Navbar />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
      
      {/* Hero Section */}
      <section className="bg-secondary text-white pt-8 pb-8 overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Story</h1>
              <p className="text-base sm:text-lg text-white text-opacity-90 mb-6">
                Netium Technologies was founded with a simple mission: to make cybersecurity accessible and effective for organizations across Kenya. We recognized a critical gap in the market—many organizations, from startups to enterprises, lacked access to trusted, expert cybersecurity guidance tailored to their unique needs.
              </p>
              <p className="text-base sm:text-lg text-white text-opacity-80">
                What started as a vision has grown into a trusted partner for dozens of organizations navigating the complex digital security landscape. We bring years of combined experience in cybersecurity, cloud infrastructure, and regulatory compliance to every engagement.
              </p>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop"
              alt="Netium Technologies team"
              width={500}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-24 bg-background">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To empower organizations across Kenya with trusted, expert cybersecurity and cloud advisory services that protect their digital assets, build resilience, and enable secure growth.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg">
                To be the leading trusted advisor for cybersecurity and cloud transformation in East Africa, helping organizations navigate digital challenges with confidence and strategic insight.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Focus Areas */}
      <section className="py-20 md:py-24 bg-muted">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Focus On</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our approach combines technical expertise with a deep understanding of business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-md transition-shadow">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Credentials & Expertise Section */}
      <section className="py-20 md:py-24 bg-background">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Backed by Certified Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our team holds internationally recognized certifications and deep local knowledge of Kenya's regulatory environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ISO 27001 Certified */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">ISO 27001 Certified</h3>
              <p className="text-muted-foreground">International standard for information security management systems.</p>
            </div>

            {/* AWS & Azure Certified */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50">
                  <BadgeCheck className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">AWS & Azure Certified</h3>
              <p className="text-muted-foreground">Certified solutions architects across major cloud platforms.</p>
            </div>

            {/* CISM Certified */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">CISM Certified</h3>
              <p className="text-muted-foreground">Certified Information Security Manager — globally recognized expertise.</p>
            </div>

            {/* Kenya Data Protection Act */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50">
                  <FileCheck className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Kenya Data Protection Act</h3>
              <p className="text-muted-foreground">Specialists in local compliance with Kenya's Data Protection Act 2019.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Kenya Commitment */}
      <section className="py-20 md:py-24 bg-primary text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Committed to Kenya</h2>
            <p className="text-xl text-white text-opacity-90 mb-8">
              We&apos;re more than a cybersecurity firm—we&apos;re part of Kenya&apos;s digital transformation journey. We understand the unique challenges facing organizations in Kenya, from regulatory requirements to infrastructure considerations. We&apos;re invested in building a more secure digital Kenya, one organization at a time.
            </p>
            <p className="text-lg text-white text-opacity-80">
              Our team is based locally in Nairobi, providing on-the-ground support and deep familiarity with the Kenyan business landscape. We measure our success by the trust our clients place in us and the security improvements we help them achieve.
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}
