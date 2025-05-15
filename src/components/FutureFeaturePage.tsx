'use client'

export default function FutureFeaturePage() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md text-slate-200">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 text-center text-slate-100 tracking-tight">
        Coming Soon!
      </h1>
      <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
        <p>
          We are constantly working on new and exciting features to enhance your experience.
        </p>
        <p>
          Here are some of the things you can look forward to:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4 text-slate-300">
          <li>Advanced User Profiles</li>
          <li>Real-time Data Dashboards</li>
          <li>Integration with Third-Party Services</li>
          <li>AI-Powered Recommendations</li>
        </ul>
        <p>
          Stay tuned for updates!
        </p>
      </div>
    </div>
  )
}
