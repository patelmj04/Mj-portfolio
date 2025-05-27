import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mj Portfolio',
  description: 'By Mit Patel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favcon.png" />
        <meta property="og:image" content="/preview-image.jpg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
