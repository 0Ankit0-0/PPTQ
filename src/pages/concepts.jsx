import React, { useEffect, useState } from "react";
import ConceptData from "./store/concept.json";

export default function Concepts({ mode }) {
  const [concepts, setConcepts] = useState([]);

  useEffect(() => {
    const allConcepts = [
      ...ConceptData.qm,
      ...ConceptData.qa,
      ...ConceptData.qc,
      ...ConceptData.sqa,
    ];
    setConcepts(allConcepts);
  }, []);

  const comparisonTableData = [
    {
      attribute: "Focus",
      qa: "Process quality and defect prevention",
      qc: "Product quality and defect detection",
      qm: "Overall quality strategy and policies",
      sqa: "Software-specific quality processes and practices",
    },
    {
      attribute: "Type",
      qa: "Preventive/Process-Oriented",
      qc: "Detective/Product-Oriented",
      qm: "Strategic/Managerial",
      sqa: "Integrated (QA + QC) for Software",
    },
    {
      attribute: "Goal",
      qa: "Ensure correct processes are followed",
      qc: "Ensure the final product meets requirements",
      qm: "Establish quality framework and goals",
      sqa: "Ensure software meets quality and process standards",
    },
    {
      attribute: "Approach",
      qa: "Process-oriented (proactive)",
      qc: "Product-oriented (reactive)",
      qm: "Top-down (management-led)",
      sqa: "Continuous quality control and process audits in software",
    },
    {
      attribute: "Stage in SDLC",
      qa: "Early and ongoing (from planning to deployment)",
      qc: "During and after development (mainly testing)",
      qm: "All stages (planning to maintenance)",
      sqa: "Throughout all SDLC phases with focus on software",
    },
    {
      attribute: "Activities",
      qa: "Process definition, reviews, audits",
      qc: "Testing, inspection, bug tracking",
      qm: "Define policies, audits, improvement plans",
      sqa: "Test planning, code reviews, audits, metrics",
    },
    {
      attribute: "Tools/Techniques",
      qa: "Standards (IEEE 730), process checklists, peer reviews",
      qc: "Testing tools (Selenium, JUnit), defect tracking",
      qm: "ISO 9001, CMMI, PDCA cycle",
      sqa: "CI/CD tools, automated testing, traceability matrices",
    },
    {
      attribute: "Responsibility",
      qa: "QA teams, process engineers",
      qc: "Testers, developers",
      qm: "Top-level management and quality departments",
      sqa: "SQA engineers, independent software QA teams",
    },
    {
      attribute: "Example",
      qa: "Conducting process audits during development",
      qc: "Running unit and regression tests to find bugs",
      qm: "Establishing company-wide coding standards and quality KPIs",
      sqa: "Automated build pipelines that run tests and code scans",
    },
  ];

  // Dynamic class names based on mode
  const mainBgClass = mode === "light" ? "bg-gray-50" : "bg-gray-900";
  const textColorClass = mode === "light" ? "text-gray-800" : "text-white";
  const subTextColorClass =
    mode === "light" ? "text-gray-600" : "text-gray-300";
  const cardBgClass = mode === "light" ? "bg-white" : "bg-gray-800";
  const tableHeaderBgClass = mode === "light" ? "bg-gray-100" : "bg-gray-700";
  const tableRowHoverClass =
    mode === "light" ? "hover:bg-gray-50" : "hover:bg-gray-700";
  const tableBorderClass =
    mode === "light" ? "divide-gray-200" : "divide-gray-700";

  return (
    <div className={`${mainBgClass} py-16 md:py-24`}>
      {/* Introduction Section */}
      <section className="container mx-auto px-4 mb-16 md:mb-24 text-center">
        <h1
          className={`text-4xl md:text-5xl font-extrabold leading-tight mb-6 ${textColorClass}`}
        >
          Understanding Quality Concepts In Detail
        </h1>
        <p
          className={`text-lg md:text-xl max-w-3xl mx-auto ${subTextColorClass}`}
        >
          Dive deep into the core principles of Quality Management, Quality
          Assurance, Quality Control, and Software Quality Assurance.
        </p>
      </section>

      {/* Main Concepts Section */}
      <section className="container mx-auto px-4 mb-16 md:mb-24">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${textColorClass}`}
        >
          Key Quality Disciplines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className={`${cardBgClass} rounded-lg shadow-xl p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl`}
            >
              <h3 className={`text-2xl font-bold mb-3 ${concept.colorClass}`}>
                {concept.title}
              </h3>
              <p className={`text-md font-medium mb-4 ${subTextColorClass}`}>
                {concept.definition}
              </p>
              <div className={`text-sm ${subTextColorClass}`}>
                <div className="mb-3">
                  <strong>Scope:</strong>
                  <ul className="list-disc ml-4 mt-1">
                    {concept.scope?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-3">
                  <strong>Methodology:</strong>
                  <ul className="list-disc ml-4 mt-1">
                    {concept.methodology?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-3">
                  <strong>Examples:</strong>
                  <ul className="list-disc ml-4 mt-1">
                    {concept.examples?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Comparison Section */}
      <section className="container mx-auto px-4">
        <div className={`${cardBgClass} rounded-2xl shadow-lg overflow-hidden`}>
          <div
            className={`px-6 py-4 border-b ${tableBorderClass} ${tableHeaderBgClass}`}
          >
            <h2 className={`text-2xl font-bold ${textColorClass}`}>
              Quick Comparison
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className={`min-w-full divide-y ${tableBorderClass}`}>
              <thead className={tableHeaderBgClass}>
                <tr>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium ${subTextColorClass} uppercase tracking-wider`}
                  >
                    Aspect
                  </th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium ${subTextColorClass} uppercase tracking-wider`}
                  >
                    QA
                  </th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium ${subTextColorClass} uppercase tracking-wider`}
                  >
                    QC
                  </th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium ${subTextColorClass} uppercase tracking-wider`}
                  >
                    QM
                  </th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium ${subTextColorClass} uppercase tracking-wider`}
                  >
                    SQA
                  </th>
                </tr>
              </thead>
              <tbody className={`${cardBgClass} divide-y ${tableBorderClass}`}>
                {comparisonTableData.map((row, index) => (
                  <tr key={index} className={tableRowHoverClass}>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${textColorClass}`}
                    >
                      {row.attribute}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-normal text-sm ${subTextColorClass}`}
                    >
                      {row.qa}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-normal text-sm ${subTextColorClass}`}
                    >
                      {row.qc}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-normal text-sm ${subTextColorClass}`}
                    >
                      {row.qm}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-normal text-sm ${subTextColorClass}`}
                    >
                      {row.sqa}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
