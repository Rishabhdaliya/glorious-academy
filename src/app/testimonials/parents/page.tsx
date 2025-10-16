import PageTemplate from "@/components/page-template"

export default function ParentTestimonialsPage() {
  return (
    <PageTemplate title="Parent Testimonials" description="What parents say about Glorious Courses">
      <div className="space-y-6 text-gray-700">
        <div className="rounded-lg bg-gray-100 p-4">
          <p className="italic">
            "We are very satisfied with the progress our child has made at Glorious Courses. The faculty is supportive
            and the environment is conducive to learning."
          </p>
          <p className="mt-2 font-semibold">- Parent Name</p>
        </div>
        <div className="rounded-lg bg-gray-100 p-4">
          <p className="italic">
            "The regular updates and communication from the institute keep us informed about our child's progress. We
            highly recommend Glorious Courses."
          </p>
          <p className="mt-2 font-semibold">- Another Parent</p>
        </div>
      </div>
    </PageTemplate>
  )
}
