import React from "react";
import ankit from "./assets/ankit.jpeg";
import asmith from "./assets/asmith.jpeg";
import Dhruv from "./assets/Dhruv.jpeg";
import omkar from "./assets/omkar.png";

const teamMembers = [
  {
    name: "Ankit Vishwakarma",
    role: "Developer",
    description:
      "Responsible for coding and implementing core features of the application, ensuring robust and scalable solutions.",
    image: ankit,
  },
  {
    name: "Asmith Mahendrakar",
    role: "Documentation Lead",
    description:
      "Leads the creation of clear and comprehensive documentation, making the project understandable for all users and contributors.",
    image: asmith,
  },
  {
    name: "Dhruv Suthar",
    role: "QA Engineer",
    description:
      "Focuses on establishing quality processes, preventing defects, and ensuring the overall quality assurance framework.",
    image: Dhruv,
  },
  {
    name: "Omkar Ghanekar",
    role: "Tester + Bug Tracker",
    description:
      "Dedicated to identifying, reporting, and tracking bugs, ensuring the product is thoroughly tested before release.",
    image: omkar,
  },
];

const aboutUs = ({ mode }) => {
  const mainBgClass = mode === "light" ? "bg-gray-50" : "bg-gray-900";
  const cardBgClass = mode === "light" ? "bg-white" : "bg-gray-800";
  const textColorClass = mode === "light" ? "text-gray-800" : "text-white";
  const subTextColorClass =
    mode === "light" ? "text-gray-600" : "text-gray-300";

  return (
    <div className={`min-h-screen ${mainBgClass} py-16 md:py-24`}>
      <section className="container mx-auto px-4 mb-16 md:mb-24 text-center">
        <h1
          className={`text-4xl md:text-5xl font-extrabold leading-tight mb-6 ${textColorClass}`}
        >
          Meet Our Team
        </h1>
        <p
          className={`text-lg md:text-xl max-w-3xl mx-auto ${subTextColorClass}`}
        >
          We are a dedicated team passionate about delivering high-quality
          software and insightful content on Quality Assurance, Control, and
          Management.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`${cardBgClass} rounded-lg shadow-xl p-6 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl flex flex-col items-center`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-indigo-500 dark:ring-cyan-400"
              />
              <h3 className={`text-xl font-bold mb-1 ${textColorClass}`}>
                {member.name}
              </h3>
              <p className={`text-md font-semibold mb-3 ${subTextColorClass}`}>
                {member.role}
              </p>
              <p className={`text-sm ${subTextColorClass}`}>
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mt-16 md:mt-24 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${textColorClass}`}>
          Our Mission
        </h2>
        <p
          className={`text-lg md:text-xl max-w-4xl mx-auto ${subTextColorClass}`}
        >
          To provide clear, concise, and interactive learning resources on
          software quality concepts, empowering students and professionals alike
          to excel in the field.
        </p>
      </section>
    </div>
  );
};

export default aboutUs;
