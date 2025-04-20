'use client';

import { useEffect } from 'react';
import FinanceBackground from '@/components/FinanceBackground';

export default function BookingPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen relative">
      <FinanceBackground />
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Schedule a Consultation</h1>
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/samsonabrams5"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
    </main>
  );
} 