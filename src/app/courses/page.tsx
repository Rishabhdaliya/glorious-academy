import PageTemplate from "@/components/page-template"

export default function CoursesPage() {
  return (
    <PageTemplate title="Our Courses" description="Explore our comprehensive course offerings">
      <div className="space-y-6 text-gray-700">
        <p>We offer specialized courses for various competitive exams and board examinations:</p>
        <ul className="list-inside list-disc space-y-2">
          <li>Engineering Entrance Exams (JEE Main, JEE Advanced)</li>
          <li>Medical Entrance Exams (NEET)</li>
          <li>Board Examinations (CBSE, State Board)</li>
          <li>MHT CET Preparation</li>
        </ul>
      </div>
    </PageTemplate>
  )
}
