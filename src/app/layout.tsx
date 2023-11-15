import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '5 Popular Algos',
  description: '5 Popular Algos',
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

