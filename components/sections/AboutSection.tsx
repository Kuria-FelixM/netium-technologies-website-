import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { Container } from '../Container'

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <Image
              src="/about-illustration.png"
              alt="Netium team collaborating on cybersecurity solutions"
              width={500}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">About Netium Technologies</h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Netium Technologies, we believe that cybersecurity and cloud advisory should be accessible to every business, regardless of size. Our mission is to empower startups and enterprises across Kenya with the knowledge and tools they need to thrive in a digital-first world.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Mission Card */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Our Mission
                </h3>
                <p className="text-sm text-muted-foreground">
                  To deliver world-class cybersecurity and cloud advisory services that enable businesses to grow securely and sustainably.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Our Vision
                </h3>
                <p className="text-sm text-muted-foreground">
                  A Kenya where every organization, from startups to enterprises, operates with confidence knowing their digital assets are protected.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Founded on principles of collaboration, transparency, and continuous learning, we partner with our clients to build security strategies that align with their unique business goals.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
