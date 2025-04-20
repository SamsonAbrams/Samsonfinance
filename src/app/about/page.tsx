import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-8 mb-8">
        <div className="relative w-48 h-48 flex-shrink-0">
          <Image
            src="/samson.jpg"
            alt="Samson Abrams"
            fill
            className="object-cover rounded-full object-[center_15%]"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold text-blue-900">About Samson Abrams</h1>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Professional Background</h2>
        <p className="text-gray-700 mb-4">
          Samson Abrams began his passion for finance when he started LaGuardia High School's first investment club. In March 2020, at the beginning of the pandemic, Samson's investment club came to a halt. It was then that he decided to begin experiencing what it is like to invest in financial markets. After graduating from LaGuardia High School, Samson Abrams was extremely interested in continuing to teach people about finance. This is when he decided to start Finance with Samson, a social media platform which teaches young people about both the basics of finance and current events happening witin financial markets. Samson Abrams is also the president of Boston University's first stock trading club, Stock Trading at Boston University, where he teaches Boston University students about how to manage their personal finances.
        </p>
        <p className="text-gray-700 mb-4">
          Additionally, Samson Abrams has experience both interning and working at major asset management firms including UBS, PIMCO, and Franklin Templeton.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Philosophy</h2>
        <p className="text-gray-700 mb-4">
          I believe that all young people should learn about finance because:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>It is important to understand how to manage your personal finances</li>
          <li>It is important to understand what is currently happening in the world</li>
          <li>Finance is a great way to understand how to manage your emotions</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Services</h2>
        <p className="text-gray-700 mb-4">
          I offer comprehensive financial services including:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>A detailed weekly financial newsletter</li>
          <li>One-on-one consultations for beginners</li>
          <li>Videos about current events in financial markets</li>
        </ul>
      </div>
    </div>
  );
} 