import PageTemplate from "@/components/page-template"

export default function TermsAndConditionsPage() {
  return (
    <PageTemplate title="Terms and Conditions" description="Please read our terms and conditions carefully">
      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Glorious Courses website and services, you accept and agree to be bound by the terms
            and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on
            Glorious Courses website for personal, non-commercial transitory viewing only. This is the grant of a
            license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">3. Disclaimer</h2>
          <p>
            The materials on Glorious Courses website are provided on an 'as is' basis. Glorious Courses makes no
            warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">4. Limitations</h2>
          <p>
            In no event shall Glorious Courses or its suppliers be liable for any damages (including, without
            limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
            inability to use the materials on Glorious Courses website.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">5. Accuracy of Materials</h2>
          <p>
            The materials appearing on Glorious Courses website could include technical, typographical, or photographic
            errors. Glorious Courses does not warrant that any of the materials on its website are accurate, complete,
            or current.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">6. Links</h2>
          <p>
            Glorious Courses has not reviewed all of the sites linked to its website and is not responsible for the
            contents of any such linked site. The inclusion of any link does not imply endorsement by Glorious Courses
            of the site. Use of any such linked website is at the user's own risk.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">7. Modifications</h2>
          <p>
            Glorious Courses may revise these terms of service for its website at any time without notice. By using this
            website, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India, and you
            irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>
      </div>
    </PageTemplate>
  )
}
