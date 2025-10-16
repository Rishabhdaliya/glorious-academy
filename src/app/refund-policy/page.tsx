import PageTemplate from "@/components/page-template"

export default function RefundPolicyPage() {
  return (
    <PageTemplate title="Refund & Cancellation Policy" description="Our refund and cancellation policy">
      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">Refund Policy</h2>
          <p>
            At Glorious Courses, we are committed to providing quality education and services. Our refund policy is as
            follows:
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">1. Refund Eligibility</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Within 7 days of enrollment:</strong> Full refund if no classes have been attended
            </li>
            <li>
              <strong>Within 14 days of enrollment:</strong> 75% refund if less than 25% of the course has been
              completed
            </li>
            <li>
              <strong>Within 30 days of enrollment:</strong> 50% refund if less than 50% of the course has been
              completed
            </li>
            <li>
              <strong>After 30 days:</strong> No refund is applicable
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">2. Refund Process</h2>
          <p>
            To request a refund, students must submit a written request to our administration office. The refund will be
            processed within 10-15 business days after approval.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">3. Cancellation Policy</h2>
          <p>
            Students can cancel their enrollment at any time. However, refunds will be processed according to the refund
            eligibility criteria mentioned above.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">4. Non-Refundable Items</h2>
          <p>The following are non-refundable:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Registration fees</li>
            <li>Study materials and books provided</li>
            <li>Mock test fees</li>
            <li>Administrative charges</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">5. Special Circumstances</h2>
          <p>
            In case of medical emergencies or other special circumstances, students may request for a refund or course
            transfer. Such requests will be reviewed on a case-by-case basis.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">6. Contact Us</h2>
          <p>
            For any queries regarding refunds or cancellations, please contact our administration office or visit our
            contact page.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">7. Policy Changes</h2>
          <p>
            Glorious Courses reserves the right to modify this refund and cancellation policy at any time. Changes will
            be communicated to all students in advance.
          </p>
        </section>
      </div>
    </PageTemplate>
  )
}
