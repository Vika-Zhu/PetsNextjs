import './css/style.css'
import './css/globals.css'


import type { Metadata } from 'next'
import { Jost } from 'next/font/google'

const inter = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
