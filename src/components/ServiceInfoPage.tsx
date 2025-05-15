'use client'

export default function ServiceInfoPage() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md text-slate-200">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 text-center text-slate-100 tracking-tight">
        About Our Service
      </h1>
      <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
        <p>
          Welcome! This application showcases a modern tech stack and responsive design principles.
        </p>
        <p>
          Built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI, it demonstrates best practices in web development.
        </p>
        <p>
          The counter feature is just one example of the interactive components we can build.
        </p>
        <p>
          Explore the app to see how different elements adapt to your screen size.
        </p>
      </div>
    </div>
  )
}
