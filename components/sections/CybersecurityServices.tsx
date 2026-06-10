import { Lock, Eye, Users, Phone, Layers } from 'lucide-react'
import { Container } from '../Container'
import { ServicesCard } from '@/components/ui/services-card'

export function CybersecurityServices() {
  const services = [
    {
      id: 1,
      icon: <Layers className="w-6 h-6" />,
      title: 'Security Strategy & Risk Assessment',
      description: 'We analyze your current security posture, identify vulnerabilities, and develop comprehensive strategies aligned with your business objectives.',
    },
    {
      id: 2,
      icon: <Eye className="w-6 h-6" />,
      title: 'Security Audits & Penetration Testing',
      description: 'Proactive testing to uncover weaknesses before attackers do. Our detailed audits provide actionable insights for improvement.',
    },
    {
      id: 3,
      icon: <Users className="w-6 h-6" />,
      title: 'Security Awareness Training',
      description: 'Empower your team with knowledge. Our training programs reduce human-related security incidents and build a security-conscious culture.',
    },
    {
      id: 4,
      icon: <Phone className="w-6 h-6" />,
      title: 'Mobile Device Management (MDM)',
      description: 'Secure and manage company devices across your organization. Protect sensitive data while maintaining employee productivity.',
    },
    {
      id: 5,
      icon: <Lock className="w-6 h-6" />,
      title: 'Data Encryption & Protection',
      description: 'End-to-end encryption solutions to protect your most sensitive data. From rest to transit, we ensure your information stays confidential.',
    },
  ]

  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Cybersecurity Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive security solutions designed to protect your organization from evolving threats.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServicesCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
