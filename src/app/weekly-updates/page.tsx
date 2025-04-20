import Image from 'next/image';

export default function WeeklyUpdates() {
  const pdfUpdates = [
    {
      title: "Weekly Market Update - April 7-11, 2025",
      date: "April 7, 2025",
      description: "From April 7 to April 11, 2025, markets showed mixed performance as SPY rose 0.45%, QQQ gained 0.82%, and IWM declined 0.31%. The week was marked by strong corporate earnings, particularly in the technology sector, while concerns about global economic growth and geopolitical tensions weighed on market sentiment.",
      filename: "market-update-april-7-2025.pdf"
    },
    {
      title: "Weekly Market Update - March 31, 2025",
      date: "March 31, 2025",
      description: "From March 24 to March 28, 2025, markets declined as SPY fell 2.66%, QQQ dropped 3.86%, and IWM lost 3.11%, driven by mixed inflation data, cautious consumer sentiment, and anticipation of key labor reports, potential tariffs, and Federal Reserve commentary.",
      filename: "market-update-march-2023.pdf"
    },
    {
      title: "Market Outlook - Week of March 24, 2025",
      date: "March 24, 2025",
      description: "From March 17 to March 21, 2025, markets posted modest gains—SPY up 0.23%, QQQ up 0.28%, and IWM up 0.57%—as the Fed held rates steady at 4.5%, signaled caution on inflation and growth, and reduced balance sheet rolloffs, while investors awaited key data on GDP, PCE inflation, and corporate profits.",
      filename: "market-outlook-march-24-2024.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <div className="relative h-[400px] mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80 z-10" />
        <Image
          src="/images/investment.jpg"
          alt="Financial Investment"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl text-center">
            Weekly Market Updates
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white/90 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-center">
            Stay informed with our latest market analysis and insights.
          </p>
        </div>
      </div>

      {/* Market Updates Section */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-8">
            {pdfUpdates.map((pdf, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-blue-900">{pdf.title}</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    PDF Download
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{pdf.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">{pdf.date}</span>
                  <a 
                    href={`/pdfs/${pdf.filename}`}
                    download
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 