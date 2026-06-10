import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Netium Technologies | Cybersecurity & Cloud Advisory Services | Nairobi, Kenya',
  description: 'Netium Technologies is a trusted cybersecurity and cloud advisory partner for startups and businesses in Kenya. We help you navigate the digital landscape securely and efficiently.',
  openGraph: {
    title: 'Netium Technologies | Cybersecurity & Cloud Advisory Services',
    description: 'Trusted cybersecurity and cloud advisory partner for startups and businesses in Kenya.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  keywords: ['cybersecurity', 'cloud advisory', 'digital security', 'Kenya', 'nairobi'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {/* TODO: Add Google Analytics GA4 tag here before going live
            Replace GA_MEASUREMENT_ID with your actual GA4 measurement ID
            <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        */}
      </body>
    </html>
  )
}
