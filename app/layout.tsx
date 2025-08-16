
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hyperspeed Background',
  description: 'Next.js app with Three.js hyperspeed background',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
