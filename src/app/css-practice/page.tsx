"use client";

import { useState } from "react";

interface QuizQuestion {
  id: number;
  question: string;
  code: string;
  options: string[];
  correct: number;
  explanation: string;
}

const cssQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What will be the final color of the text?",
    code: `.text {
  color: red;
  color: blue;
  color: green !important;
}`,
    options: ["red", "blue", "green", "black (default)"],
    correct: 2,
    explanation: "The !important declaration gives the green color the highest specificity, overriding all other declarations."
  },
  {
    id: 2,
    question: "Which CSS Grid property creates implicit tracks?",
    code: `.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  ??? : 100px;
}`,
    options: [
      "grid-auto-rows", 
      "grid-template-rows", 
      "grid-row-gap", 
      "grid-auto-columns"
    ],
    correct: 0,
    explanation: "grid-auto-rows defines the size of implicitly created row tracks when content exceeds the explicitly defined grid template."
  },
  {
    id: 3,
    question: "What does this Flexbox code create?",
    code: `.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}`,
    options: [
      "Items arranged vertically with equal spacing",
      "Items arranged horizontally with equal spacing between them, centered vertically",
      "Items arranged horizontally, centered both ways",
      "Items arranged in a grid pattern"
    ],
    correct: 1,
    explanation: "flex-direction: row creates horizontal layout, justify-content: space-between distributes items with equal space between them, and align-items: center centers them vertically."
  },
  {
    id: 4,
    question: "Which CSS selector has the highest specificity?",
    code: `/* A */ .nav ul li a { color: red; }
/* B */ #header a { color: blue; }
/* C */ a.active { color: green; }
/* D */ nav a { color: yellow; }`,
    options: ["A", "B", "C", "D"],
    correct: 1,
    explanation: "Specificity calculation: A (0,0,3,1), B (0,1,0,1), C (0,0,1,1), D (0,0,0,2). ID selectors (#header) have higher specificity than class selectors."
  },
  {
    id: 5,
    question: "What is the result of this calc() function?",
    code: `.element {
  width: calc(100% - 2rem);
  max-width: calc(500px + 2em);
  font-size: 16px;
}`,
    options: [
      "Error - cannot mix units",
      "width: 98%, max-width: 532px (assuming 1em = 16px)",
      "width: 100%, max-width: 500px",
      "Depends on parent container"
    ],
    correct: 1,
    explanation: "calc() can mix different units. With font-size: 16px, 2em = 32px, so max-width becomes 532px. Width becomes 100% minus 32px (2rem)."
  },
  {
    id: 6,
    question: "Which CSS custom property declaration is correct?",
    code: `/* Which one correctly defines and uses a CSS variable? */`,
    options: [
      ":root { $primary-color: blue; } .element { color: $primary-color; }",
      ":root { --primary-color: blue; } .element { color: var(--primary-color); }",
      ":root { @primary-color: blue; } .element { color: @primary-color; }",
      ".element { color: var(primary-color: blue); }"
    ],
    correct: 1,
    explanation: "CSS custom properties use -- prefix for definition and var() function for usage. This is the standard CSS syntax, unlike SASS ($) or LESS (@) variables."
  },
  {
    id: 7,
    question: "What will this CSS animation do?",
    code: `@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.element {
  animation: slideIn 0.5s ease-out forwards;
}`,
    options: [
      "Element slides in from left and fades in",
      "Element slides in from right and fades in", 
      "Element slides out to left and fades out",
      "Element rotates and scales"
    ],
    correct: 0,
    explanation: "translateX(-100%) starts the element completely off-screen to the left, then animates to translateX(0) while opacity goes from 0 to 1, creating a slide-in-from-left with fade effect."
  },
  {
    id: 8,
    question: "Which media query syntax is correct for CSS4 range syntax?",
    code: `/* Modern range syntax for responsive design */`,
    options: [
      "@media (min-width: 768px) and (max-width: 1024px)",
      "@media (768px <= width <= 1024px)",
      "@media screen and (768px < width < 1024px)",
      "@media (width >= 768px <= 1024px)"
    ],
    correct: 1,
    explanation: "CSS Media Queries Level 4 introduces range syntax using <= and >= operators, making queries more readable than the traditional min-width/max-width approach."
  },
  {
    id: 9,
    question: "What does this CSS selector select?",
    code: `.parent:has(.child:hover) {
  background-color: yellow;
}`,
    options: [
      "Child elements when parent is hovered",
      "Parent elements when child is hovered",
      "Both parent and child when either is hovered",
      "This selector is invalid"
    ],
    correct: 1,
    explanation: "The :has() selector selects the parent when it contains a child that matches the condition. Here it selects .parent when it contains a .child that is being hovered."
  },
  {
    id: 10,
    question: "What is the box-sizing behavior here?",
    code: `.box1 {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: content-box;
}

.box2 {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: border-box;
}`,
    options: [
      "Both boxes are 200px wide",
      "box1: 250px wide, box2: 200px wide",
      "box1: 200px wide, box2: 250px wide", 
      "Both boxes are 250px wide"
    ],
    correct: 1,
    explanation: "content-box (default): width applies to content only, total = 200 + 40 + 10 = 250px. border-box: width includes padding and border, total = 200px."
  }
];

export default function CSSPracticePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < cssQuizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      const correctAnswers = selectedAnswers.reduce((acc, answer, index) => {
        return answer === cssQuizQuestions[index].correct ? acc + 1 : acc;
      }, 0);
      setScore(correctAnswers);
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const getScoreColor = () => {
    const percentage = (score / cssQuizQuestions.length) * 100;
    if (percentage >= 80) return "text-green-600 dark:text-green-400";
    if (percentage >= 60) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              CSS Quiz Results
            </h1>
            
            <div className="text-center mb-8">
              <div className={`text-6xl font-bold mb-4 ${getScoreColor()}`}>
                {score}/{cssQuizQuestions.length}
              </div>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                {score === cssQuizQuestions.length
                  ? "Perfect! You've mastered CSS fundamentals! 🎉"
                  : score >= 8
                  ? "Excellent! You have strong CSS knowledge! 👏"
                  : score >= 6
                  ? "Good job! Keep practicing CSS concepts. 📚"
                  : "Keep learning! CSS takes practice to master. 💪"}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Review Your Answers
              </h2>
              
              {cssQuizQuestions.map((question, index) => (
                <div
                  key={question.id}
                  className="border border-slate-200 dark:border-slate-700 rounded-lg p-6"
                >
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                    Question {index + 1}: {question.question}
                  </h3>
                  
                  <div className="mb-4">
                    <pre className="bg-slate-900 text-slate-100 p-4 rounded-md overflow-x-auto text-sm">
                      <code>{question.code}</code>
                    </pre>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {question.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className={`p-3 rounded-md border text-sm ${
                          optionIndex === question.correct
                            ? "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-700 dark:text-green-300"
                            : selectedAnswers[index] === optionIndex && optionIndex !== question.correct
                            ? "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-700 dark:text-red-300"
                            : "bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300"
                        }`}
                      >
                        <span className="font-mono mr-2">
                          {String.fromCharCode(65 + optionIndex)}.
                        </span>
                        {option}
                        {optionIndex === question.correct && (
                          <span className="ml-2">✓</span>
                        )}
                        {selectedAnswers[index] === optionIndex && optionIndex !== question.correct && (
                          <span className="ml-2">✗</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      <strong>Explanation:</strong> {question.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button
                onClick={resetQuiz}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Take Quiz Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = cssQuizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / cssQuizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          {/* Progress bar */}
          <div className="h-2 bg-slate-200 dark:bg-slate-700">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Quiz header */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                CSS Fundamentals Quiz
              </h1>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Question {currentQuestion + 1} of {cssQuizQuestions.length}
              </span>
            </div>
          </div>

          {/* Question content */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              {currentQ.question}
            </h2>

            {/* Code example */}
            <div className="mb-6">
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-md overflow-x-auto text-sm">
                <code>{currentQ.code}</code>
              </pre>
            </div>

            {/* Answer options */}
            <div className="space-y-3 mb-8">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-md border transition-colors ${
                    selectedAnswers[currentQuestion] === index
                      ? "bg-blue-50 border-blue-300 text-blue-800 dark:bg-blue-900/20 dark:border-blue-600 dark:text-blue-300"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-600"
                  }`}
                >
                  <span className="font-mono mr-3 text-sm">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                className="px-6 py-2 text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed dark:text-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
              >
                Previous
              </button>

              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswers[currentQuestion] === undefined}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {currentQuestion === cssQuizQuestions.length - 1 ? "Finish Quiz" : "Next"}
              </button>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
            CSS Quiz Instructions
          </h3>
          <ul className="text-blue-800 dark:text-blue-300 space-y-1">
            <li>• Test your knowledge of CSS selectors, layout, animations, and modern features</li>
            <li>• Read the code examples carefully - specificity and syntax matter!</li>
            <li>• You can navigate between questions using the Previous/Next buttons</li>
            <li>• Detailed explanations are provided for each answer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
