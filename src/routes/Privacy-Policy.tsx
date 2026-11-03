import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/Privacy-Policy')({
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 lg:py-16">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-5 sm:p-8 lg:p-12">
          
          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#800000] mb-3">
            Privacy Policy
          </h1>

          <p className="text-[#d90429] uppercase tracking-wider text-md font-semibold mb-8">
            Last Updated: February 2026
          </p>

          <p className="text-gray-700 leading-8 mb-10">
            Welcome to the Privacy Policy of{' '}
            <strong>Zanthium Technosoft Pvt Ltd</strong> ("we," "our," or
            "us"). We are committed to protecting your personal information
            and your right to privacy. This policy explains how we collect,
            use, and safeguard your information when you interact with our
            website, mobile applications, or advertisements.
          </p>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold text-[#800000] mb-6">
              <span className="w-3 h-3 bg-[#eda405] rounded-sm mr-3"></span>
              1. Information We Collect
            </h2>

            <p className="text-gray-700 mb-4">
              We may collect the following information when you contact us or
              use our services:
            </p>

            <ul className="space-y-3 list-disc pl-6 text-gray-700">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Company Name or Project Requirement</li>
              <li>Device and Browser Information</li>
              <li>Any Additional Details You Provide Voluntarily</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold text-[#800000] mb-6">
              <span className="w-3 h-3 bg-[#eda405] rounded-sm mr-3"></span>
              2. How We Use Your Information
            </h2>

            <p className="text-gray-700 mb-4">
              Your data is collected solely for business-related purposes,
              such as:
            </p>

            <ul className="space-y-3 list-disc pl-6 text-gray-700 mb-6">
              <li>Contacting you about your software or app development inquiry</li>
              <li>Sending quotations, demos, and service details</li>
              <li>Providing updates, offers, and follow-up communication</li>
              <li>Improving our services, ads, and website experience</li>
              <li>Complying with legal requirements or dispute resolution</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg text-gray-700">
              <strong>Note:</strong> We <u>never</u> sell, rent, or trade your
              information with third parties.
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold text-[#800000] mb-6">
              <span className="w-3 h-3 bg-[#eda405] rounded-sm mr-3"></span>
              3. Data Storage & Security
            </h2>

            <p className="text-gray-700 leading-8">
              We use industry-standard technical and organizational measures
              to safeguard your personal data from unauthorized access, loss,
              misuse, or disclosure. All information is securely stored and
              accessible only to authorized personnel.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold text-[#800000] mb-6">
              <span className="w-3 h-3 bg-[#eda405] rounded-sm mr-3"></span>
              4. Data Retention
            </h2>

            <p className="text-gray-700 leading-8">
              We retain personal data only as long as necessary to complete
              your request, maintain business records, or meet legal
              obligations. Once fulfilled, your data is securely deleted.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold text-[#800000] mb-6">
              <span className="w-3 h-3 bg-[#eda405] rounded-sm mr-3"></span>
              5. Sharing of Information
            </h2>

            <p className="text-gray-700 mb-4">
              Your personal information may be shared only with:
            </p>

            <ul className="space-y-3 list-disc pl-6 text-gray-700">
              <li>Our internal teams (sales, support, technical)</li>
              <li>Trusted third-party vendors for hosting or analytics</li>
              <li>Legal authorities if required by law</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold text-[#800000] mb-6">
              <span className="w-3 h-3 bg-[#eda405] rounded-sm mr-3"></span>
              6. Your Rights
            </h2>

            <p className="text-gray-700 mb-4">You have the right to:</p>

            <ul className="space-y-3 list-disc pl-6 text-gray-700 mb-6">
              <li>Access, correct, or delete your personal data</li>
              <li>Withdraw consent for communications at any time</li>
              <li>Request a copy of your data stored by us</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg break-all text-gray-700">
              <strong>Note:</strong> To exercise your rights, please contact us
              at{' '}
              <a
                href="mailto:contact@zanthiumtechnosoft.com"
                className="text-[#800000] font-medium hover:underline"
              >
                contact@zanthiumtechnosoft.com
              </a>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold text-[#800000] mb-6">
              <span className="w-3 h-3 bg-[#eda405] rounded-sm mr-3"></span>
              7. Cookies & Tracking
            </h2>

            <p className="text-gray-700 leading-8">
              Our website may use cookies and tracking tools (e.g. Google
              Analytics, Meta Pixel) to analyze traffic and improve user
              experience. You can disable cookies in your browser settings.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold text-[#800000] mb-6">
              <span className="w-3 h-3 bg-[#eda405] rounded-sm mr-3"></span>
              8. Updates to This Policy
            </h2>

            <p className="text-gray-700 leading-8">
              We may occasionally update this Privacy Policy to reflect
              business or legal changes. Updates will be posted on this page
              with a new "Last Updated" date.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-6">
            <h2 className="flex items-center text-2xl font-bold text-[#800000] mb-6">
              <span className="w-3 h-3 bg-[#eda405] rounded-sm mr-3"></span>
              9. Contact Us
            </h2>

            <p className="text-gray-700 mb-6">
              If you have any questions or concerns about this Privacy Policy,
              please contact us:
            </p>

            <div className="border-t pt-6 text-gray-700 space-y-3">
              <div>
                <strong>Zanthium Technosoft Pvt Ltd.</strong>
              </div>

              <div>
                Building No. 28 & 29, In Front of Rudrapur City Railway
                Station,
                <br />
                Rudrapur, Udham Singh Nagar,
                <br />
                Uttarakhand, India - 263153
              </div>

              <div>
                <a
                  href="mailto:contact@zanthiumtechnosoft.com"
                  className="text-[#800000] font-medium hover:underline break-all"
                >
                  contact@zanthiumtechnosoft.com
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t text-center text-md text-gray-500">
            © 2026 Zanthium Technosoft Pvt Ltd. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  )
}