import { Cloud, Zap, BarChart3, Database, RefreshCw, GitBranch, AlertTriangle, Gauge, DollarSign } from 'lucide-react'
import { Container } from '../Container'
import { ServicesCard } from '@/components/ui/services-card'

export function CloudServices() {
  const services = [
    {
      id: 1,
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Strategy & Planning',
      description: 'Develop a cloud roadmap aligned with your business goals. We help you select the right providers and architecture for your needs.',
    },
    {
      id: 2,
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Cloud Architecture Design',
      description: 'Design scalable, secure, and cost-efficient cloud infrastructure. From multi-cloud to hybrid solutions, we build what works for you.',
    },
    {
      id: 3,
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Cloud Migration Services',
      description: 'Seamlessly migrate your applications and data to the cloud. Minimal downtime, maximum reliability throughout the transition.',
    },
    {
      id: 4,
      icon: <Gauge className="w-6 h-6" />,
      title: 'Cloud Performance Optimization',
      description: 'Continuously optimize your cloud environment for speed and efficiency. Reduce latency and improve user experience.',
    },
    {
      id: 5,
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Cloud Security & Compliance',
      description: 'Implement security best practices across your cloud infrastructure. Ensure compliance with industry standards and regulations.',
    },
    {
      id: 6,
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Cloud Monitoring & Analytics',
      description: 'Gain deep insights into your cloud usage and performance. Real-time monitoring to ensure optimal uptime and resource utilization.',
    },
    {
      id: 7,
      icon: <Database className="w-6 h-6" />,
      title: 'Database Migration & Management',
      description: 'Migrate and manage databases in the cloud with ease. Ensure data integrity, security, and optimal performance.',
    },
    {
      id: 8,
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Cloud Cost Management',
      description: 'Optimize your cloud spending without sacrificing performance. Identify cost-saving opportunities across your cloud environment.',
    },
    {
      id: 9,
      icon: <Zap className="w-6 h-6" />,
      title: 'Cloud Disaster Recovery',
      description: 'Ensure business continuity with robust disaster recovery solutions. Automatic failover and rapid recovery capabilities.',
    },
  ]

  return (
    <section className="bg-muted py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Cloud Advisory Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Navigate your cloud journey with confidence. From strategy to implementation and beyond.
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
