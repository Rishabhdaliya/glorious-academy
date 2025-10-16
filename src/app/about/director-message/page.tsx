import PageTemplate from "@/components/page-template"

export default function DirectorMessagePage() {
  return (
    <PageTemplate title="Director's Message" description="A message from our director">
      <div className="space-y-6 text-gray-700">
        <p>
          Welcome to Glorious Courses. Our mission is to empower students with knowledge and skills needed to excel in
          their academic pursuits.
        </p>
        <p>
          We believe in personalized education and continuous improvement to ensure every student reaches their full
          potential.
        </p>
      </div>
    </PageTemplate>
  )
}
