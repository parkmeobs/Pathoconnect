import React from "react";

function SoftwareIntegration() {
  return (
    <div className="w-full bg-white text-[#1b2b65]">
      
      {/* Hero Section */}
      <section className="px-6 md:px-16 py-16 bg-gradient-to-br from-[#f5f9ff] to-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Software Integration
        </h1>
        <p className="text-lg md:text-xl max-w-4xl text-gray-600 leading-relaxed">
          Pathoconnect integrates seamlessly with Laboratory Information
          Management Systems (LIMS) and FHIR-based Electronic Medical Records
          (EMRs) using secure REST APIs. This enables real-time data exchange,
          workflow automation, and regulatory-compliant healthcare operations.
        </p>
      </section>

      {/* LIMS Integration Section */}
      <section className="px-6 md:px-16 py-20">
        <h2 className="text-2xl md:text-4xl font-semibold mb-8">
          1. Integration with LIMS
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <li>
                <strong>Sample Management:</strong> Receive and track test
                samples from LIMS systems with accurate cataloging.
              </li>
              <li>
                <strong>Test Results Exchange:</strong> Real-time transmission
                of lab results linked directly to patient records.
              </li>
              <li>
                <strong>Quality Control & Audit Trails:</strong> Maintain
                compliance by synchronizing QC data and audit logs.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Integration Approach
            </h3>
            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <li>REST API-based integration (GET, POST, PUT, DELETE).</li>
              <li>JSON/XML data exchange formats.</li>
              <li>Support for HL7 or proprietary transformations.</li>
              <li>OAuth 2.0 / API Key authentication with HTTPS encryption.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-[#f8fbff] p-8 rounded-xl border border-[#e6efff]">
          <h4 className="font-semibold mb-4">Example Data Flow</h4>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>Pathoconnect requests test order from LIMS.</li>
            <li>LIMS returns sample IDs, status, and order data.</li>
            <li>Completed results are sent back via API.</li>
            <li>Patient record is updated automatically.</li>
          </ol>
        </div>
      </section>

      {/* FHIR EMR Integration Section */}
      <section className="px-6 md:px-16 py-20 bg-[#f9fafc]">
        <h2 className="text-2xl md:text-4xl font-semibold mb-8">
          2. Integration with FHIR-Based EMR
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              FHIR Resources Supported
            </h3>
            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <li><strong>Patient:</strong> Demographics & identifiers</li>
              <li><strong>DiagnosticReport:</strong> Lab reports</li>
              <li><strong>Observation:</strong> Test-specific values</li>
              <li><strong>MedicationRequest:</strong> Prescriptions</li>
              <li><strong>Encounter:</strong> Visit information</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              FHIR API Workflow
            </h3>
            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <li>GET /Patient/{`{id}`} – Retrieve patient data</li>
              <li>POST /DiagnosticReport – Submit lab report</li>
              <li>PUT /DiagnosticReport/{`{id}`} – Update report</li>
              <li>GET /Observation – Retrieve observations</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border">
          <h4 className="font-semibold mb-4">Example Data Flow</h4>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>Retrieve patient data from EMR using FHIR GET.</li>
            <li>Create DiagnosticReport once lab results are ready.</li>
            <li>Send report via POST/PUT to EMR endpoint.</li>
            <li>EMR updates patient record automatically.</li>
          </ol>
        </div>
      </section>

      {/* Key Considerations Section */}
      <section className="px-6 md:px-16 py-20">
        <h2 className="text-2xl md:text-4xl font-semibold mb-10">
          3. Key Integration Considerations
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Data Mapping & Transformation
            </h3>
            <p>
              Align LIMS-specific terms with FHIR resources (e.g., Sample ID →
              Observation.identifier, test values → Observation.value).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Compliance & Security
            </h3>
            <p>
              Ensure HIPAA/GDPR compliance, TLS encryption, audit logging,
              role-based access control, and secure token-based authentication.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Error Handling & Monitoring
            </h3>
            <p>
              Implement retry logic, structured logging, monitoring dashboards,
              and alerting mechanisms for failed transactions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Performance & Scalability
            </h3>
            <p>
              Use efficient API calls, indexing strategies, load balancing, and
              scalable infrastructure to handle growing healthcare data volumes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-16 py-16 bg-[#1b2b65] text-white text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Build Interoperable Healthcare Systems
        </h3>
        <p className="max-w-2xl mx-auto mb-6 text-gray-200">
          Enable real-time data exchange between LIMS and EMR systems using
          secure, standards-based APIs with Pathoconnect.
        </p>
        <button className="bg-[#e85c41] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
          Request Integration Demo
        </button>
      </section>
    </div>
  );
}

export default SoftwareIntegration;