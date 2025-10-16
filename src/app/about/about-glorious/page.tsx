import PageTemplate from "@/components/page-template"

export default function AboutGloriousPage() {
  return (
    <PageTemplate title="About Glorious Courses" description="Learn more about our institution and mission">
      <div className="space-y-6 text-gray-700">
        <p>
          Glorious Courses is a leading educational institution dedicated to providing quality education and
          comprehensive coaching for competitive exams.
        </p>
        <p>
          With years of experience and a team of dedicated educators, we have helped thousands of students achieve their
          academic goals.
        </p>
      </div>
    </PageTemplate>
  )
}
