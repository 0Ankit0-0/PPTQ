import { useState } from "react";
import { Menu, X, Moon, Sun, Code } from "lucide-react";

export default function Navbar({
  mode,
  currentPage,
  setCurrentPage,
  toggleMode,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "aboutUs", label: "About Us" },
    { id: "demo", label: "Demo Simulation" },
    { id: "concepts", label: "Concept" },
    { id: "quiz", label: "Quiz" },
  ];

  const navButtonClasses = (id) =>
    `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
      currentPage === id
        ? "bg-indigo-100 text-indigo-700 shadow-md dark:bg-cyan-900 dark:text-cyan-300"
        : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 dark:text-gray-500 dark:hover:text-cyan-400 dark:hover:bg-gray-800"
    }`;

  return (
    <nav
      className={`px-4 py-4 shadow-md flex items-center justify-between flex-wrap z-50 sticky top-0 ${
        mode === "light" ? "bg-white text-gray-800" : "bg-gray-900 text-white"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 text-xl font-bold flex-shrink-0">
        <Code color="#35b0c0"/>
        <span className="hidden sm:inline">PPTQ</span>{" "}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-4 items-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={navButtonClasses(item.id)}
          >
            {item.label}
          </button>
        ))}
        {/* Theme Toggle for Desktop */}
        <button
          onClick={toggleMode}
          className={`ml-4 p-2 rounded-full transition-colors duration-300 ${
            mode === "light"
              ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
              : "bg-gray-700 text-gray-500 hover:bg-gray-600"
          }`}
          aria-label="Toggle dark mode"
        >
          {mode === "light" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu Toggle and Theme Toggle */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMode}
          className={`mr-3 p-2 rounded-full transition-colors duration-300 ${
            mode === "light"
              ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
          aria-label="Toggle dark mode"
        >
          {mode === "light" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-2 rounded-md transition-colors duration-200 ${
            mode === "light"
              ? "text-gray-600 hover:bg-gray-100"
              : "text-gray-500 hover:bg-gray-800"
          }`}
          aria-label="Open menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          className={`w-full md:hidden flex flex-col gap-2 py-4 mt-2 rounded-b-lg shadow-lg ${
            mode === "light"
              ? "bg-white border-t border-gray-200"
              : "bg-gray-900 border-t border-gray-700"
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setIsMenuOpen(false);
              }}
              className={navButtonClasses(item.id) + " w-full text-left"}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
