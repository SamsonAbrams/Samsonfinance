import Link from 'next/link';
import Image from 'next/image';
import FinanceBackground from '@/components/FinanceBackground';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navigation />
      <FinanceBackground />
      
      {/* Hero Section */}
      <section className="relative h-[600px] mb-16 pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80 z-10" />
        <Image
          src="/images/hero-finance.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            At Finance with Samson...
          </h1>
          <div className="space-y-4 max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl">
              Our mission is simple: to make financial literacy accessible, engaging, and actionable.
            </p>
            <p className="text-lg md:text-xl">
              Whether you're just starting your investing journey or looking to sharpen your understanding of the markets, we're here to help you build confidence with every step.
            </p>
            <p className="text-lg md:text-xl">
              Through weekly market newsletters, 1-on-1 sessions, and educational content tailored for real people—not Wall Street insiders—we break down complex financial topics into clear, digestible insights.
            </p>
            <p className="text-lg md:text-xl">
              Because we believe everyone deserves the tools to invest wisely, plan for the future, and take control of their financial life.
            </p>
          </div>
          <Link 
            href="/book" 
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold mt-8"
          >
            Start Learning
          </Link>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative z-20">
        {/* CTA Section */}
        <section className="py-16 bg-blue-900/90 backdrop-blur-sm text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Financial Knowledge?</h2>
            <p className="text-xl mb-8">
              Join our community of learners and take the first step towards financial literacy.
            </p>
            <Link 
              href="/book" 
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Start Your Learning Journey
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
} 