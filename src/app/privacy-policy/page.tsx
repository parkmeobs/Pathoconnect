"use client";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#fff5f2] to-[#f8fbff] py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1b2b65]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-600">
            Effective Date: <span className="font-medium">3rd March 2025</span>
          </p>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            At <span className="font-semibold text-[#e85c41]">Pathoconnect.net</span>, 
            we are committed to protecting your privacy and safeguarding your personal information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        
        {/* Section Card */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            1. Information We Collect
          </h2>
          <div className="space-y-3 text-gray-600 leading-7">
            <p><strong>a. Personal Information:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing or shipping address</li>
            </ul>

            <p><strong>b. Non-Personal Information:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Browser type</li>
              <li>Device type</li>
              <li>IP address</li>
              <li>Website usage data</li>
            </ul>

            <p><strong>c. Cookies and Tracking Technologies:</strong></p>
            <p>
              We may use cookies and tracking tools to improve your experience.
              You can control cookies via browser settings.
            </p>
          </div>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 text-gray-600 leading-7 space-y-2 mt-4">
            <li>Provide and improve services</li>
            <li>Respond to inquiries</li>
            <li>Process transactions</li>
            <li>Enhance user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            3. How We Share Your Information
          </h2>
          <div className="space-y-4 text-gray-600 leading-7 mt-4">
            <p><strong>Service Providers:</strong> Trusted partners assisting operations.</p>
            <p><strong>Legal Requirements:</strong> When required by law.</p>
            <p><strong>Business Transfers:</strong> During mergers or acquisitions.</p>
          </div>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            4. Data Security
          </h2>
          <p className="text-gray-600 leading-7 mt-4">
            We implement encryption, firewalls, and secure storage practices.
            However, no method of transmission is 100% secure.
          </p>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            5. Your Rights and Choices
          </h2>
          <ul className="list-disc pl-6 text-gray-600 leading-7 space-y-2 mt-4">
            <li>Access your data</li>
            <li>Correct inaccuracies</li>
            <li>Request deletion</li>
            <li>Opt-out of marketing emails</li>
            <li>Manage cookie preferences</li>
          </ul>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            6. Third-Party Links
          </h2>
          <p className="text-gray-600 leading-7 mt-4">
            We are not responsible for third-party websites linked from our site.
          </p>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            7. Children’s Privacy
          </h2>
          <p className="text-gray-600 leading-7 mt-4">
            Our services are not intended for children under 13.
          </p>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            8. Changes to This Policy
          </h2>
          <p className="text-gray-600 leading-7 mt-4">
            Updates will be posted on this page with a revised effective date.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-[#fff5f2] border border-[#ffd8d0] p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-[#1b2b65]">
            9. Contact Us
          </h2>
          <div className="text-gray-600 leading-7 mt-4 space-y-2">
            <p><strong>Pathoconnect.net</strong></p>
            <p>Email: info@pathoconnect.net</p>
            <p>Phone: +91 9910272266</p>
            <p>
              DLF MyPad, Vibhuti Khand, Gomti Nagar,<br/>
              Lucknow, Uttar Pradesh, 226010 India
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}