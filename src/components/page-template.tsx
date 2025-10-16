import type React from "react"
interface PageTemplateProps {
  title: string
  description: string
  children?: React.ReactNode
}

export default function PageTemplate({ title, description, children }: PageTemplateProps) {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
          <p className="mt-4 text-lg text-gray-600">{description}</p>
        </div>
        <div className="rounded-lg bg-white p-8 shadow-sm">
          {children || (
            <p className="text-gray-600">This page is under development. Check back soon for more information.</p>
          )}
        </div>
      </div>
    </main>
  )
}
