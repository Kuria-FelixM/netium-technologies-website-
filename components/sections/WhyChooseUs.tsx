import { Zap, TrendingUp, Shield, Award } from 'lucide-react'
import { Container } from '../Container'
import { ServicesCard } from '@/components/ui/services-card'

export function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <Award className="w-6 h-6" />,
      title: 'Industry Expertise',
      description: 'Our team brings years of experience in cybersecurity and cloud architecture, delivering solutions tailored to your industry and business model.',
    },
    {
      id: 2,
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Cost-Effective Solutions',
      description: 'We optimize your security investments for maximum ROI, ensuring you get enterprise-grade protection without breaking the budget.',
    },
    {
      id: 3,
      icon: <Shield className="w-6 h-6" />,
      title: 'Compliance & Standards',
      description: 'Stay compliant with global standards while meeting local regulations. We help you navigate ISO 27001, GDPR, and local Kenyan requirements.',
    },
    {
      id: 4,
      icon: <Zap className="w-6 h-6" />,
      title: 'Proactive Support',
      description: '24/7 monitoring and rapid incident response means threats are caught before they impact your business operations.',
    },
  ]

  return (
    <section id="why-us" className="bg-muted py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Netium?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with deep industry knowledge to deliver security solutions that work for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <ServicesCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
