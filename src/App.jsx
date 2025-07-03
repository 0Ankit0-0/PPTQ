import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Demo from "./pages/demo";
import Concepts from "./pages/concepts";
import Quiz from "./pages/Quizz";
import AboutUS from "./pages/aboutUs";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor =
      mode === "light" ? "white" : "#000000";
  }, [mode]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} mode={mode} />;
      case "demo":
        return <Demo mode={mode} />;
      case "concepts":
        return <Concepts mode={mode} />;
      case "aboutUs":
        return <AboutUS mode={mode}/>;
      case "quiz":
        return <Quiz mode={mode} />;
      default:
        return <Home setCurrentPage={setCurrentPage} mode={mode} />;
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        toggleMode={toggleMode}
        mode={mode}
      />
      <main className="animate-fade-in-up">{renderPage()}</main>
      <Footer mode={mode}/>
    </div>
  );
}

export default App;
