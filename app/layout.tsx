import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import '@/styles/style.scss'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/footer'
import { ThemeMenuProvider } from '@/components/common/Navbar/Theme/ThemeMenuProvider'
import { Setup } from '@/utils'
import axios from 'axios'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Impact consulting',
  description: 'Impact consulting for nonprofit organization for kids in africa that need help',
}
axios.defaults.withCredentials = true;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={inter.className}>
      <ThemeMenuProvider>
        <link rel="icon" type="image" href="/images/Logo-black.png" />
          <Setup />
          <Navbar />
          {children}
          <Footer />
      </ThemeMenuProvider>
      </body>
    </html>
  )
}
