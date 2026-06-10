import { Container } from '../Container'
import { Landmark, Heart, ShoppingCart, Briefcase } from 'lucide-react'

export function TrustBar() {
  const industries = [
    { id: 1, name: 'Fintech', Icon: Landmark },
    { id: 2, name: 'Healthcare', Icon: Heart },
    { id: 3, name: 'E-Commerce', Icon: ShoppingCart },
    { id: 4, name: 'Legal & Enterprise', Icon: Briefcase },
  ]

  return (
    <section className="bg-muted py-12 sm:py-16">
      <Container className="py-0">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">Trusted Partners</p>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-2">Trusted by Startups and Enterprises</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {industries.map((industry) => {
            const Icon = industry.Icon
            return (
              <div
                key={industry.id}
                className="flex flex-col items-center justify-center h-24 bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className="w-8 h-8 text-primary mb-2" />
                <p className="text-sm font-semibold text-foreground">{industry.name}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
