import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: 'Austin Jian',
  description: 'Personal website of Austin Jian',
  icons: {
    icon: '/favicon.png', 
  },
};

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

