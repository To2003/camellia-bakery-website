import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

import './globals.css'

const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const _inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Camellia | Tortas y Postres',
  description: 'Pasteleria artesanal con los mejores ingredientes. Tortas, cupcakes, cookies y mas. Pedidos por WhatsApp.',
  icons: {
    icon: '/icon.png', 
    apple: '/icon.png', 
  },
}

export const viewport: Viewport = {
  themeColor: '#a0522d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
