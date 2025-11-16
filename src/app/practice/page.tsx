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

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which semantic element should be used for the main navigation of a website?",
    code: `<header>
  <h1>My Website</h1>
  <!-- Navigation goes here -->
</header>`,
    options: ["<menu>", "<nav>", "<section>", "<div class='navigation'>"],
    correct: 1,
    explanation: "The <nav> element is specifically designed for navigation links and helps assistive technologies identify navigation landmarks."
  },
  {
    id: 2,
    question: "What is wrong with this heading structure?",
    code: `<article>
  <h1>Web Development Guide</h1>
  <h3>Getting Started</h3>
  <h4>Setting up your environment</h4>
  <h2>Advanced Topics</h2>
</article>`,
    options: [
      "Nothing is wrong",
      "Missing h2 between h1 and h3",
      "h4 should be h3",
      "Both B and C are correct"
    ],
    correct: 3,
    explanation: "Heading levels should not be skipped. The structure should go h1→h2→h3 in order, and h2 should come before h4."
  },
  {
    id: 3,
    question: "Which element is most appropriate for a self-contained blog post?",
    code: `<!-- Blog post content -->
<??? class="blog-post">
  <h2>Understanding CSS Grid</h2>
  <p>Published on March 15, 2024</p>
  <p>CSS Grid is a powerful layout system...</p>
</???>`,
    options: ["<section>", "<article>", "<div>", "<main>"],
    correct: 1,
    explanation: "The <article> element represents self-contained content that makes sense independently, perfect for blog posts that could be syndicated or shared."
  },
  {
    id: 4,
    question: "What should replace the ??? in this code for proper semantics?",
    code: `<article>
  <h1>Product Review: iPhone 15</h1>
  <p>The iPhone 15 brings several improvements...</p>
  
  <??? class="related-info">
    <h2>Technical Specifications</h2>
    <ul>
      <li>6.1-inch display</li>
      <li>A17 Pro chip</li>
      <li>48MP camera</li>
    </ul>
  </???>
</article>`,
    options: ["<section>", "<aside>", "<div>", "<footer>"],
    correct: 1,
    explanation: "The <aside> element is perfect for content that is related to the main article but is tangential, like technical specifications or related information."
  },
  {
    id: 5,
    question: "Which list type is most appropriate for this content?",
    code: `<h2>Steps to Deploy Your Website</h2>
<!-- List goes here -->
<li>Build your project</li>
<li>Choose a hosting provider</li>
<li>Upload your files</li>
<li>Configure your domain</li>
<li>Test your live site</li>`,
    options: ["<ul>", "<ol>", "<dl>", "<menu>"],
    correct: 1,
    explanation: "Since these are sequential steps that must be followed in order, an ordered list (<ol>) is the most appropriate choice."
  }
];

export default function PracticePage() {
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
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      const correctAnswers = selectedAnswers.reduce((acc, answer, index) => {
        return answer === quizQuestions[index].correct ? acc + 1 : acc;
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
    const percentage = (score / quizQuestions.length) * 100;
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
              Quiz Results
            </h1>
            
            <div className="text-center mb-8">
              <div className={`text-6xl font-bold mb-4 ${getScoreColor()}`}>
                {score}/{quizQuestions.length}
              </div>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                {score === quizQuestions.length
                  ? "Perfect! You've mastered HTML semantics! 🎉"
                  : score >= 4
                  ? "Great job! You have a solid understanding of HTML semantics! 👏"
                  : score >= 3
                  ? "Good progress! Review the concepts and try again. 📚"
                  : "Keep learning! HTML semantics take practice. 💪"}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Review Your Answers
              </h2>
              
              {quizQuestions.map((question, index) => (
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

  const currentQ = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

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
                HTML Semantics Quiz
              </h1>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Question {currentQuestion + 1} of {quizQuestions.length}
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
                {currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next"}
              </button>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
            Quiz Instructions
          </h3>
          <ul className="text-blue-800 dark:text-blue-300 space-y-1">
            <li>• Select the best answer for each question</li>
            <li>• Review the code examples carefully</li>
            <li>• You can navigate between questions using the Previous/Next buttons</li>
            <li>• Your results will show explanations for each answer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
