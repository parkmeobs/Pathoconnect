import React from "react";

function DeviceIntegration() {
  return (
    <div className="w-full bg-white text-[#1b2b65]">
      
      {/* Hero Section */}
      <section className="px-6 md:px-16 py-16 bg-gradient-to-br from-[#f5f9ff] to-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          PathoConnect Phlebotomy App Device Integration
        </h1>
        <p className="text-lg md:text-xl max-w-4xl text-gray-600 leading-relaxed">
          Seamless smart device connectivity designed to streamline blood
          collection workflows. PathoConnect integrates with medical devices
          and laboratory systems to ensure real-time data transfer, enhanced
          accuracy, and improved operational efficiency.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="px-6 md:px-16 py-20">
        <h2 className="text-2xl md:text-4xl font-semibold mb-12">
          Key Features of Device Integration
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed">
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#1b2b65]">
              Real-Time Sync with Lab Instruments
            </h3>
            <ul className="space-y-3">
              <li>Automatically syncs barcode scanners, centrifuges, and analyzers.</li>
              <li>Eliminates manual data entry errors.</li>
              <li>Ensures accurate tracking from collection to analysis.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#1b2b65]">
              Barcode & RFID Scanner Compatibility
            </h3>
            <ul className="space-y-3">
              <li>Supports industry-leading barcode & RFID scanners.</li>
              <li>Instant wristband and label scanning.</li>
              <li>Error-free specimen identification.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#1b2b65]">
              Secure LIS Data Transmission
            </h3>
            <ul className="space-y-3">
              <li>HL7 & FHIR-compliant LIS integration.</li>
              <li>HIPAA-compliant encrypted transmission.</li>
              <li>Automated lab order processing.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#1b2b65]">
              IoT-Enabled Blood Collection
            </h3>
            <ul className="space-y-3">
              <li>Real-time blood volume monitoring.</li>
              <li>Hemolysis & clotting detection.</li>
              <li>Smart alerts before sample processing.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#1b2b65]">
              Mobile & Cloud Integration
            </h3>
            <ul className="space-y-3">
              <li>Works across Android & iOS devices.</li>
              <li>Cloud-based real-time record access.</li>
              <li>Instant synchronization across locations.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 md:px-16 py-20 bg-[#f9fafc]">
        <h2 className="text-2xl md:text-4xl font-semibold mb-10">
          Benefits of Device Integration
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-gray-600">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold mb-3">Improved Sample Accuracy</h3>
            <p>Automated data capture minimizes human errors in labeling and entry.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold mb-3">Faster Lab Processing</h3>
            <p>Reduces delays in tracking, testing, and result reporting.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold mb-3">Enhanced Compliance</h3>
            <p>Digital tracking ensures regulatory and audit compliance.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold mb-3">Seamless User Experience</h3>
            <p>Phlebotomists focus on patient care instead of paperwork.</p>
          </div>
        </div>
      </section>

      {/* Supported Devices Section */}
      <section className="px-6 md:px-16 py-20">
        <h2 className="text-2xl md:text-4xl font-semibold mb-10">
          Supported Devices & Compatibility
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-gray-600">
          <div>
            <h4 className="font-semibold mb-2">Barcode Scanners</h4>
            <p>Zebra, Honeywell, Datalogic</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">RFID Scanners</h4>
            <p>HID, GAO, Impinj</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Blood Analyzers</h4>
            <p>Sysmex, Beckman Coulter, Abbott</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Centrifuges & Lab Instruments</h4>
            <p>Thermo Fisher, Eppendorf, BD</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-16 py-16 bg-[#1b2b65] text-white text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Get Started with PathoConnect Device Integration
        </h3>
        <p className="max-w-2xl mx-auto mb-6 text-gray-200">
          Enhance your laboratory efficiency with seamless smart device
          connectivity. Schedule a live demo today.
        </p>

        <div className="space-y-2 mb-6">
          <p>Email: info@pathoconnect.net</p>
          <p>Website: www.pathoconnect.net</p>
        </div>

        <button className="bg-[#e85c41] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
          Request Live Demo
        </button>
      </section>

    </div>
  );
}

export default DeviceIntegration;