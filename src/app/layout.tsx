import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Finance with Samson | Financial Education',
  description: 'Professional financial guidance and wealth management services from Samson Abrams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                  Finance with Samson
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                  About
                </Link>
                <Link href="/weekly-updates" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Weekly Market Updates
                </Link>
                <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Blog
                </Link>
                <Link href="/book" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Book a Session
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
        <footer className="bg-blue-900 text-white mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center space-y-4">
              <p className="text-sm">© {new Date().getFullYear()} Finance with Samson. All rights reserved.</p>
              <div className="max-w-3xl mx-auto text-sm text-gray-300">
                <p className="mb-4">
                  The information provided on Finance with Samson is for educational and informational purposes only and should not be construed as financial, investment, tax, or legal advice. While I aim to provide accurate and timely market commentary and general financial insights, the content on this website does not constitute a recommendation to buy or sell any securities or make specific financial decisions.
                </p>
                <p>
                  Any one-on-one discussions are intended to help individuals better understand the basics of financial markets and personal finance, but do not replace professional financial advice tailored to your specific circumstances. Always consult with a licensed financial advisor or other qualified professional before making financial decisions.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 