import { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { AboutSection } from '@/components/sections/AboutSection'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { CybersecurityServices } from '@/components/sections/CybersecurityServices'
import { CloudServices } from '@/components/sections/CloudServices'
import { CTABanner } from '@/components/sections/CTABanner'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Netium Technologies | Cybersecurity & Cloud Advisory Services | Kenya',
  description: 'Netium Technologies provides trusted cybersecurity and cloud advisory services for startups and enterprises in Kenya. Get a free security assessment today.',
  openGraph: {
    title: 'Netium Technologies | Cybersecurity & Cloud Advisory',
    description: 'Secure your digital future with expert cybersecurity and cloud services in Kenya.',
    type: 'website',
  },
  keywords: ['cybersecurity', 'cloud advisory', 'cloud migration', 'security assessment', 'Kenya', 'Nairobi'],
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <WhyChooseUs />
        <CybersecurityServices />
        <CloudServices />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
