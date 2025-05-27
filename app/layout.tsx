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
        <meta name="google-adsense-account" content="ca-pub-6208542351236103">
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
