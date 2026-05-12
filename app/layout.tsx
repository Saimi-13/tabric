import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tabric — Turn spreadsheets into stories',
  description:
    'Upload a spreadsheet. Get dashboards, insights, and an AI chatbot — in under a minute.',
  openGraph: {
    title: 'Tabric — Turn spreadsheets into stories',
    description:
      'Upload a spreadsheet. Get dashboards, insights, and an AI chatbot — in under a minute.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
