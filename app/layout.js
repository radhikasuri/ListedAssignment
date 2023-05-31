import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ weight: '700', subsets: ['latin'] })

export const metadata = {
  title: 'Listed Inc',
  description: 'Next.js Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
