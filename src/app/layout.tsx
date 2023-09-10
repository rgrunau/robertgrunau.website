import { Metadata } from "next"
import '@/styles/globals.css'
import { IBM_Plex_Mono } from 'next/font/google'
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
export const plexMono = IBM_Plex_Mono({ weight:['400'] ,subsets: ['latin'] })


const meta: Metadata = {
  title: 'robertgrunau.website',
  description: 'Robert Grunau\'s personal website',
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content={meta.description || ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`bg-purple ${plexMono.className}`}>
        <Header />
          { children}
        <Footer />
      </body>
    </html>
  )
}