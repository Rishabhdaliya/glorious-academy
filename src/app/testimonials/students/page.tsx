import PageTemplate from "@/components/page-template"

export default function StudentTestimonialsPage() {
  return (
    <PageTemplate title="Student Testimonials" description="Hear from our successful students">
      <div className="space-y-6 text-gray-700">
        <div className="rounded-lg bg-gray-100 p-4">
          <p className="italic">
            "Glorious Courses helped me achieve my dream of getting into a top engineering college. The faculty is
            excellent and the study material is comprehensive."
          </p>
          <p className="mt-2 font-semibold">- Student Name</p>
        </div>
        <div className="rounded-lg bg-gray-100 p-4">
          <p className="italic">
            "The personalized attention and regular mock tests at Glorious Courses made all the difference in my
            preparation."
          </p>
          <p className="mt-2 font-semibold">- Another Student</p>
        </div>
      </div>
    </PageTemplate>
  )
}
