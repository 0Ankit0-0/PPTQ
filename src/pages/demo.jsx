import React, { useState } from "react";

const dummyUsers = [
  { email: "student1@example.com", password: "test123", qualityChecked: true },
  { email: "student2@example.com", password: "secure456", qualityChecked: false }
];

const Demo = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const mainBgClass = mode === "light" ? "bg-gray-50" : "bg-gray-900";
  const cardBgClass = mode === "light" ? "bg-white" : "bg-gray-800";
  const textColorClass = mode === "light" ? "text-gray-800" : "text-white";
  const subTextColorClass = mode === "light" ? "text-gray-600" : "text-gray-300";
  const inputBgClass = mode === "light" ? "bg-gray-100" : "bg-gray-700";
  const inputBorderClass = mode === "light" ? "border-gray-300" : "border-gray-600";
  const inputPlaceholderClass = mode === "light" ? "placeholder-gray-500" : "placeholder-gray-400";

  const getMessageClasses = () => {
    switch (messageType) {
      case "success":
        return "text-green-700 bg-green-100 border-green-500 dark:text-green-300 dark:bg-green-900 dark:border-green-700";
      case "error":
        return "text-red-700 bg-red-100 border-red-500 dark:text-red-300 dark:bg-red-900 dark:border-red-700";
      case "warning":
        return "text-orange-700 bg-orange-100 border-orange-500 dark:text-orange-300 dark:bg-orange-900 dark:border-orange-700";
      case "info":
        return "text-blue-700 bg-blue-100 border-blue-500 dark:text-blue-300 dark:bg-blue-900 dark:border-blue-700";
      default:
        return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = dummyUsers.find((u) => u.email === email);

    if (!user) {
      setMessage("❌ User not found (QC failure: Product doesn't exist)");
      setMessageType("error");
    } else if (user.password !== password) {
      setMessage("⚠️ Incorrect password (QA validation failed: Process error in authentication)");
      setMessageType("warning");
    } else if (!user.qualityChecked) {
      setMessage("🔍 Login under review (SQA audit not passed: Software process non-compliance)");
      setMessageType("info");
    } else {
      setMessage("✅ Login successful (QM/QA/QC/SQA Passed: Quality system fully effective!)");
      setMessageType("success");
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${mainBgClass} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className={`max-w-md w-full p-8 space-y-8 ${cardBgClass} rounded-xl shadow-2xl animate-fade-in`}>
        {/* Header Section */}
        <div className="text-center">
          <h2 className={`text-3xl md:text-4xl font-extrabold ${textColorClass}`}>
            Interactive QA Demo
          </h2>
          <p className={`mt-2 text-md md:text-lg ${subTextColorClass}`}>
            Explore how quality concepts apply to a simple login.
          </p>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${inputBorderClass} ${inputBgClass} ${textColorClass} ${inputPlaceholderClass} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${inputBorderClass} ${inputBgClass} ${textColorClass} ${inputPlaceholderClass} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Simulate Login
            </button>
          </div>
        </form>

        {/* Dynamic Message Display */}
        {message && (
          <p className={`mt-4 p-3 rounded-md border-l-4 font-medium ${getMessageClasses()} transition-opacity duration-500 ease-in-out opacity-100`}>
            {message}
          </p>
        )}

        {/* Explanation/Dummy Accounts Section */}
        <div className={`mt-8 p-6 ${cardBgClass} rounded-lg border ${inputBorderClass} shadow-md`}>
          <p className={`text-lg font-semibold mb-3 ${textColorClass}`}>
            Try these scenarios:
          </p>
          <ul className={`list-disc list-inside space-y-2 ${subTextColorClass} text-sm md:text-base`}>
            <li>
              <span className="font-bold text-green-600">Full Success:</span>{" "}
              Use <code className="font-mono text-indigo-500 dark:text-cyan-400">student1@example.com</code> /{" "}
              <code className="font-mono text-indigo-500 dark:text-cyan-400">test123</code>
            </li>
            <li>
              <span className="font-bold text-blue-600">SQA Audit Pending:</span>{" "}
              Use <code className="font-mono text-indigo-500 dark:text-cyan-400">student2@example.com</code> /{" "}
              <code className="font-mono text-indigo-500 dark:text-cyan-400">secure456</code>
            </li>
            <li>
              <span className="font-bold text-orange-600">QA Validation Fail:</span>{" "}
              Enter correct email (<code className="font-mono text-indigo-500 dark:text-cyan-400">student1@example.com</code>) but **incorrect password**.
            </li>
            <li>
              <span className="font-bold text-red-600">QC Failure:</span>{" "}
              Enter an **unregistered email** (e.g., `notfound@example.com`) and any password.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Demo;