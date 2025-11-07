import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/shared/theme-provider'
import { WhatsAppFloat } from '@/components/shared/whatsapp-float'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zamin Raza - Portfolio',
  description: 'Full Stack Innovator | GenAI, LLMs & Computer Vision',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Explicit favicon declaration */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        
        {/* Cache buster - force refresh */}
        <link rel="icon" href="/favicon.ico?version=2" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  )
}