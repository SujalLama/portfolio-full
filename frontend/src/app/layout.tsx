// import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/layouts/Header'
import ThemeProvider from '@/providers/ThemeProvider'
import Footer from '@/layouts/Footer'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_MEDIA_URL!),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
