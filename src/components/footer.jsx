import React from "react";

export default function Footer({ mode }) {
  return (
    <footer
      className={`w-full py-4 px-6 ${
        mode === "dark"
          ? "bg-gray-900 text-gray-200 border-gray-800"
          : "bg-gray-100 text-gray-700 border-gray-300"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-sm">
          &copy; {new Date().getFullYear()} QA Testing Hub. All rights reserved.
        </span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a href="mailto:support@example.com" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
