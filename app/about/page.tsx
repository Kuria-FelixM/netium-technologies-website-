import Image from 'next/image'
import { Metadata } from 'next'
import { Shield, Zap, Heart, Target, Users, Globe } from 'lucide-react'
import { Container } from '@/components/Container'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

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

  const teamMembers = [
    {
      name: 'Founder & CEO',
      title: 'Cybersecurity Strategy & Leadership',
      expertise: 'Enterprise security architecture, threat intelligence, risk management',
      image: '/team-member-1.png',
    },
    {
      name: 'Cloud & Infrastructure Lead',
      title: 'Cloud Advisory & Infrastructure Security',
      expertise: 'AWS, Azure, GCP, cloud security, infrastructure design',
      image: '/team-member-2.png',
    },
    {
      name: 'Compliance & Governance Lead',
      title: 'Regulatory Compliance & Governance',
      expertise: 'ISO 27001, NIST, HIPAA, compliance frameworks, audit',
      image: '/team-member-3.png',
    },
  ]

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20 md:py-32">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
              <p className="text-xl text-white text-opacity-90 mb-8">
                Netium Technologies was founded with a simple mission: to make cybersecurity accessible and effective for organizations across Kenya. We recognized a critical gap in the market—many organizations, from startups to enterprises, lacked access to trusted, expert cybersecurity guidance tailored to their unique needs.
              </p>
              <p className="text-lg text-white text-opacity-80">
                What started as a vision has grown into a trusted partner for dozens of organizations navigating the complex digital security landscape. We bring years of combined experience in cybersecurity, cloud infrastructure, and regulatory compliance to every engagement.
              </p>
            </div>
            <Image
              src="/about-hero.png"
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

      {/* Team Section */}
      <section className="py-20 md:py-24 bg-background">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals dedicated to securing your digital future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover bg-muted"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.title}</p>
                  <p className="text-muted-foreground text-sm">{member.expertise}</p>
                </div>
              </div>
            ))}
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
