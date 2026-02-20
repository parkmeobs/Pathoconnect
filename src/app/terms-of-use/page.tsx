"use client";

export default function TermsAndConditions() {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#f8fbff] to-[#fff5f2] py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1b2b65]">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-gray-600">
            Effective Date: <span className="font-medium">3rd March 2025</span>
          </p>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            By accessing or using <span className="font-semibold text-[#e85c41]">Pathoconnect.net</span>, 
            you agree to comply with the following terms and conditions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12 text-gray-600 leading-7">

        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            1. Acceptance of Terms
          </h2>
          <p className="mt-4">
            By using this Site, you acknowledge that you have read and agree to these Terms.
            Continued use after updates constitutes acceptance of the modified Terms.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            2. Use of the Site
          </h2>

          <div className="mt-4 space-y-4">
            <p><strong>Eligibility:</strong> You must be at least 18 years old to use this Site.</p>

            <p><strong>Account Registration:</strong> You are responsible for maintaining the confidentiality of your account credentials.</p>

            <div>
              <p className="font-semibold">Restrictions:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Do not violate applicable laws.</li>
                <li>Do not damage or disrupt the Site.</li>
                <li>Do not attempt unauthorized access.</li>
                <li>Do not use the Site for unlawful purposes.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            3. Intellectual Property
          </h2>
          <p className="mt-4">
            All content including text, logos, graphics, and software is owned by Pathoconnect.net 
            and protected by intellectual property laws.
          </p>
          <p className="mt-3">
            You are granted a limited, non-exclusive license for personal, non-commercial use only.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            4. User Content
          </h2>
          <p className="mt-4">
            By submitting content, you grant us a worldwide, royalty-free license 
            to use and display such content for operating our services.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            5. Privacy Policy
          </h2>
          <p className="mt-4">
            Your use of the Site is also governed by our Privacy Policy.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            6. Third-Party Links
          </h2>
          <p className="mt-4">
            We are not responsible for the content or practices of third-party websites.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            7. Disclaimers
          </h2>
          <div className="mt-4 space-y-3">
            <p><strong>Site Availability:</strong> We do not guarantee uninterrupted access.</p>
            <p><strong>Limitation of Liability:</strong> We are not liable for indirect or consequential damages.</p>
            <p><strong>No Warranty:</strong> The Site is provided "as is" without warranties.</p>
          </div>
        </div>

        {/* Section 8 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            8. Indemnification
          </h2>
          <p className="mt-4">
            You agree to indemnify and hold harmless Pathoconnect.net from claims 
            arising from your violation of these Terms.
          </p>
        </div>

        {/* Section 9 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            9. Termination
          </h2>
          <p className="mt-4">
            We may suspend or terminate your access if you violate these Terms.
          </p>
        </div>

        {/* Section 10 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            10. Governing Law
          </h2>
          <p className="mt-4">
            These Terms shall be governed by the laws of India. 
            Courts located in Lucknow, Uttar Pradesh shall have exclusive jurisdiction.
          </p>
        </div>

        {/* Section 11 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            11. Severability
          </h2>
          <p className="mt-4">
            If any provision is deemed unenforceable, the remaining provisions remain valid.
          </p>
        </div>

        {/* Section 12 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            12. Changes to These Terms
          </h2>
          <p className="mt-4">
            We may update these Terms periodically. Continued use constitutes acceptance.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-[#f8fbff] border border-[#dbeafe] p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            13. Contact Information
          </h2>
          <div className="mt-4 space-y-2">
            <p><strong>Pathoconnect.net</strong></p>
            <p>Email: info@pathoconnect.net</p>
            <p>Phone: +91 9910272266</p>
            <p>
              DLF MyPad, Vibhuti Khand, Gomti Nagar,<br />
              Lucknow, Uttar Pradesh, 226010 India
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}