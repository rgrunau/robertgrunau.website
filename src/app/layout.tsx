import { Metadata } from "next"
import '@/styles/globals.css'
import { IBM_Plex_Mono } from 'next/font/google'
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
export const plexMono = IBM_Plex_Mono({ weight:['400'] ,subsets: ['latin'] })
export const meta: Metadata = {
  title: 'robertgrunau.website',
  description: 'Robert Grunau\'s personal website',
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={plexMono.className}>
        <Header />
          { children}
        <Footer />
      </body>
    </html>
  )
}