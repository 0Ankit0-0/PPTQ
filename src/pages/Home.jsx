import React from "react";
import {
  Sparkles,
  ArrowRight,
  Users,
  BookOpen,
  Target,
  Award,
} from "lucide-react";

export default function Home({ mode, setCurrentPage }) {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: "Quality Management (QM)",
      description:
        "Comprehensive framework for managing quality across the entire organization",
      details:
        "Strategic approach to ensure quality standards are maintained throughout all business processes.",
    },
    {
      icon: <Target className="h-8 w-8 text-indigo-600 dark:text-cyan-400" />,
      title: "Quality Assurance (QA)",
      description:
        "Proactive approach to prevent defects through process improvement and planning",
      details:
        "Focus on preventing defects by improving processes and establishing quality standards.",
    },
    {
      icon: (
        <BookOpen className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Quality Control (QC)",
      description:
        "Reactive approach to identify and fix defects through testing and inspection",
      details:
        "Detection and correction of defects through systematic testing and inspection methods.",
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600 dark:text-orange-400" />,
      title: "Software Quality Assurance (SQA)",
      description:
        "Specialized QA practices focused specifically on software development processes",
      details:
        "Comprehensive approach to ensure software quality through systematic monitoring and evaluation.",
    },
  ];

  return (
    <div
      className={
        mode === "light" ? "bg-white text-gray-800" : "bg-gray-900 text-white"
      }
    >
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div
          className={`container mx-auto px-4 ${
            mode === "light" ? "text-center" : "text-center"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            <span>Welcome To PPTQ!</span>
          </h1>
          <p className="flex items-center justify-center text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-500 animate-fade-in-up">
            <Sparkles className="text-indigo-600 dark:text-indigo-400 mr-2" />
            Learn About Quality Assurance, Control, & Management
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 animate-fade-in-up delay-100">
            Master Software Testing Concepts
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-600 dark:text-gray-400 animate-fade-in-up delay-200">
            Explore the fundamental principles of software testing through
            interactive demonstrations and real-world examples.
          </p>
          <button
            onClick={() => setCurrentPage("concepts")}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up delay-300"
          >
            Start Learning
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6 text-gray-900 dark:text-white">
            What You'll Learn
          </h2>
          <p className="text-xl md:text-2xl text-center mb-12 text-gray-600 dark:text-gray-300">
            Core Concepts For....
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-6 flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex-shrink-0 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <h4 className="text-md font-medium mb-3 text-gray-700 dark:text-gray-200">
                  {feature.description}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
