
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-Services Portal - SKELETT Foundation',
  description: 'Revolutionär e-tjänsteportal baserad på SKELETT-arkitekturen med spatial intelligence och multi-tenant support',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
