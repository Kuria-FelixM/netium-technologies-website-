'use client'

import Link from 'next/link'
import { Shield, Mail, Phone, MapPin } from 'lucide-react'
import { Container } from '../Container'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6" />
              <span className="font-bold text-xl">Netium</span>
            </div>
            <p className="text-white text-opacity-80 text-sm leading-relaxed">
              Securing digital futures through trusted cybersecurity and cloud advisory services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white text-opacity-80 hover:text-opacity-100 transition-all text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white text-opacity-80 hover:text-opacity-100 transition-all text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-white text-opacity-80 hover:text-opacity-100 transition-all text-sm">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white text-opacity-80 hover:text-opacity-100 transition-all text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/cybersecurity" className="text-white text-opacity-80 hover:text-opacity-100 transition-all text-sm">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/cloud" className="text-white text-opacity-80 hover:text-opacity-100 transition-all text-sm">
                  Cloud Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-white text-opacity-80 hover:text-opacity-100 transition-all text-sm">
                  Risk Management
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-white text-opacity-80 hover:text-opacity-100 transition-all text-sm">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-white text-opacity-80 text-sm">Applewood Adams, Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@netiumtechnologies.com" className="text-white text-opacity-80 hover:text-opacity-100 transition-all text-sm">
                  info@netiumtechnologies.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+254721939393" className="text-white text-opacity-80 hover:text-opacity-100 transition-all text-sm">
                  +254 721 939 393
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="text-center text-white text-opacity-80 text-sm">
            <p>&copy; {currentYear} Netium Technologies. All rights reserved.</p>
            <p className="mt-2">Securing Kenya&apos;s digital landscape, one organization at a time.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
