import React, { useState, useEffect } from "react";
import questions from "./store/qs.json";

const Quizz = ({ mode }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const textColorClass = mode === "light" ? "text-gray-800" : "text-white";
  const subTextColorClass =
    mode === "light" ? "text-gray-700" : "text-gray-300";
  const cardBgClass = mode === "light" ? "bg-white" : "bg-gray-800";
  const optionDefaultBgClass = mode === "light" ? "bg-gray-50" : "bg-gray-700";
  const optionDefaultBorderClass =
    mode === "light" ? "border-gray-200" : "border-gray-600";
  const optionDefaultTextColor =
    mode === "light" ? "text-gray-800" : "text-gray-200";

  useEffect(() => {
    const shuffleOptions = (qs) =>
      qs.map((q) => {
        const optionsArray = Object.entries(q.options).sort(
          () => Math.random() - 0.5
        );
        const shuffled = Object.fromEntries(optionsArray);
        return { ...q, options: shuffled };
      });

    const initialShuffledQuestions = shuffleOptions(
      [...questions].sort(() => Math.random() - 0.5)
    );
    setShuffledQuestions(initialShuffledQuestions);
  }, []);

  if (!shuffledQuestions.length)
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          mode === "light" ? "bg-gray-50" : "bg-gray-900"
        }`}
      >
        <p className={`text-center text-xl ${subTextColorClass}`}>
          Loading Quiz...
        </p>
      </div>
    );

  const currentQ = shuffledQuestions[currentIndex];

  const handleOptionClick = (key) => {
    if (selectedOption) return;
    setSelectedOption(key);
    if (key === currentQ.answer) {
      setScore((prev) => prev + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowExplanation(false);

    const shuffleOptions = (qs) =>
      qs.map((q) => {
        const optionsArray = Object.entries(q.options).sort(
          () => Math.random() - 0.5
        );
        const shuffled = Object.fromEntries(optionsArray);
        return { ...q, options: shuffled };
      });
    setShuffledQuestions(
      shuffleOptions([...questions].sort(() => Math.random() - 0.5))
    );
    setQuizStarted(false);
  };

  const getScoreComment = (finalScore, totalQuestions) => {
    const percentage = (finalScore / totalQuestions) * 100;

    if (finalScore <= 3) {
      return "Looks like you need a bit more practice on these concepts!";
    } else if (finalScore > 3 && finalScore < 7) {
      return "Solid effort! You've got a good grasp, keep learning!";
    } else if (finalScore >= 7 && finalScore < totalQuestions) {
      return "Excellent work! You're really good at this!";
    } else if (finalScore === totalQuestions) {
      return "Perfect score! You're a Quality Management master!";
    }
  };

  if (currentIndex >= shuffledQuestions.length) {
    const totalQuestions = shuffledQuestions.length;
    const comment = getScoreComment(score, totalQuestions);

    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          mode === "light" ? "bg-gray-50" : "bg-gray-900"
        }`}
      >
        <div
          className={`max-w-xl mx-auto p-8 ${cardBgClass} rounded-xl shadow-2xl text-center animate-fade-in`}
        >
          <h1 className="text-3xl font-extrabold text-green-600 dark:text-green-400 mb-4">
            Quiz Completed!
          </h1>
          <p className={`text-xl ${textColorClass} mb-2`}>
            Your Score: <span className="font-bold">{score}</span> out of{" "}
            <span className="font-bold">{totalQuestions}</span>
          </p>
          <p className={`text-lg ${subTextColorClass} mb-6 italic`}>
            "{comment}"
          </p>
          <button
            className="mt-6 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleRestartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          mode === "light" ? "bg-gray-50" : "bg-gray-900"
        }`}
      >
        <div
          className={`max-w-2xl mx-auto p-8 ${cardBgClass} rounded-xl shadow-2xl text-center animate-fade-in`}
        >
          <h1
            className={`text-3xl md:text-4xl font-extrabold ${textColorClass} mb-4`}
          >
            Welcome to the Quality Quiz!
          </h1>
          <p className={`text-lg md:text-xl ${subTextColorClass} mb-6`}>
            Test your knowledge on Quality Assurance, Control, and Management.
          </p>
          <button
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setQuizStarted(true)}
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        mode === "light" ? "bg-gray-50" : "bg-gray-900"
      }`}
    >
      <div
        className={`max-w-2xl mx-auto p-6 ${cardBgClass} rounded-lg shadow-xl animate-fade-in`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-xl font-semibold ${subTextColorClass}`}>
            Level:{" "}
            <span className="font-bold text-indigo-600 dark:text-cyan-400">
              {currentQ.level}
            </span>
          </h2>
          <p className={`text-md ${subTextColorClass}`}>
            Question {currentIndex + 1} of {shuffledQuestions.length}
          </p>
        </div>
        <h1
          className={`text-2xl md:text-3xl font-bold ${textColorClass} mb-6 leading-relaxed`}
        >
          {currentQ.question}
        </h1>
        <div className="space-y-4">
          {Object.entries(currentQ.options).map(([key, value]) => (
            <button
              key={key}
              onClick={() => handleOptionClick(key)}
              className={`w-full text-left px-5 py-3 rounded-xl border-2 transition-all duration-300 ease-in-out
                ${
                  selectedOption
                    ? key === currentQ.answer
                      ? "bg-green-100 border-green-500 text-green-800 dark:bg-green-900 dark:border-green-600 dark:text-green-200"
                      : key === selectedOption
                      ? "bg-red-100 border-red-500 text-red-800 dark:bg-red-900 dark:border-red-600 dark:text-red-200"
                      : `${optionDefaultBgClass} ${optionDefaultBorderClass} ${optionDefaultTextColor} opacity-70 cursor-not-allowed`
                    : `${optionDefaultBgClass} ${optionDefaultBorderClass} ${optionDefaultTextColor} hover:bg-indigo-50 hover:border-indigo-300 dark:hover:bg-gray-600 dark:hover:border-cyan-500`
                }
                ${
                  !!selectedOption
                    ? "cursor-not-allowed"
                    : "cursor-pointer transform hover:-translate-y-1"
                }
              `}
              disabled={!!selectedOption}
            >
              <span className="font-bold mr-2">{key}.</span> {value}
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className="mt-8 p-5 border-l-4 border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-100 rounded-lg shadow-inner animate-fade-in-up">
            <p className="font-bold text-lg mb-2">Explanation:</p>
            <p className="text-md leading-relaxed">{currentQ.explanation}</p>
          </div>
        )}

        {selectedOption && (
          <div className="mt-8 text-right">
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizz;
