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

const javascriptQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What will this arrow function return?",
    code: `const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

const result = users
  .filter(user => user.age > 25)
  .map(user => user.name);

console.log(result);`,
    options: [
      "['Alice', 'Bob', 'Charlie']",
      "['Bob', 'Charlie']", 
      "['Alice']",
      "[{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]"
    ],
    correct: 1,
    explanation: "The filter() method returns users with age > 25 (Bob and Charlie), then map() extracts just their names, resulting in ['Bob', 'Charlie']."
  },
  {
    id: 2,
    question: "What does this destructuring assignment create?",
    code: `const user = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  profile: {
    bio: 'Developer',
    location: 'New York'
  }
};

const { name, email, profile: { bio } } = user;`,
    options: [
      "Creates variables: name, email, profile, bio",
      "Creates variables: name, email, bio", 
      "Creates variables: name, email, profile",
      "Throws an error - invalid syntax"
    ],
    correct: 1,
    explanation: "Nested destructuring creates variables 'name', 'email', and 'bio'. The 'profile' object is destructured to extract 'bio', but 'profile' itself is not assigned to a variable."
  },
  {
    id: 3,
    question: "What will this template literal output?",
    code: `const name = 'React';
const version = 18;
const features = ['Hooks', 'Suspense', 'Concurrent'];

const message = \`
  Welcome to \${name} \${version}!
  New features: \${features.join(', ')}
  Total features: \${features.length}
\`;

console.log(message.trim());`,
    options: [
      "Welcome to React 18! New features: Hooks, Suspense, Concurrent Total features: 3",
      "Welcome to React 18!\\nNew features: Hooks, Suspense, Concurrent\\nTotal features: 3",
      "Welcome to ${name} ${version}! New features: ${features.join(', ')} Total features: ${features.length}",
      "SyntaxError - invalid template literal"
    ],
    correct: 1,
    explanation: "Template literals preserve line breaks and interpolate expressions. The result includes newlines (\\n) between each line of the template."
  },
  {
    id: 4,
    question: "What happens with this spread operator usage?",
    code: `const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5];
originalArray.push(6);

console.log(originalArray);
console.log(newArray);`,
    options: [
      "originalArray: [1, 2, 3, 6], newArray: [1, 2, 3, 4, 5, 6]",
      "originalArray: [1, 2, 3, 6], newArray: [1, 2, 3, 4, 5]",
      "originalArray: [1, 2, 3], newArray: [1, 2, 3, 4, 5]", 
      "Both arrays are [1, 2, 3, 4, 5, 6]"
    ],
    correct: 1,
    explanation: "The spread operator creates a shallow copy of originalArray. When we push(6) to originalArray, it doesn't affect newArray since they are separate arrays."
  },
  {
    id: 5,
    question: "What does this function closure demonstrate?",
    code: `function createCounter(initialValue) {
  let count = initialValue;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count
  };
}

const counter1 = createCounter(5);
const counter2 = createCounter(10);

counter1.increment();
counter2.increment();
counter2.increment();

console.log(counter1.getValue());
console.log(counter2.getValue());`,
    options: [
      "6, 12",
      "6, 11", 
      "7, 12",
      "Both counters show 12"
    ],
    correct: 0,
    explanation: "Each call to createCounter creates a separate closure with its own 'count' variable. counter1 starts at 5, increments once (6). counter2 starts at 10, increments twice (12)."
  },
  {
    id: 6,
    question: "What will this conditional operator return?",
    code: `const user = {
  name: 'Alice',
  role: 'admin',
  isActive: true,
  permissions: ['read', 'write', 'delete']
};

const canDelete = user.role === 'admin' && 
                 user.isActive && 
                 user.permissions.includes('delete') ? 
                 'Yes' : 'No';

const message = \`User \${user.name} can delete: \${canDelete}\`;`,
    options: [
      "User Alice can delete: Yes",
      "User Alice can delete: No",
      "User Alice can delete: true", 
      "TypeError - cannot read property 'includes'"
    ],
    correct: 0,
    explanation: "All conditions are true: role is 'admin', isActive is true, and permissions includes 'delete'. Therefore, canDelete is assigned 'Yes'."
  },
  {
    id: 7,
    question: "How does this object method work with 'this'?",
    code: `const obj = {
  name: 'MyObject',
  regularMethod: function() {
    return \`Regular: \${this.name}\`;
  },
  arrowMethod: () => {
    return \`Arrow: \${this.name}\`;
  }
};

console.log(obj.regularMethod());
console.log(obj.arrowMethod());`,
    options: [
      "Regular: MyObject, Arrow: MyObject",
      "Regular: MyObject, Arrow: undefined", 
      "Regular: undefined, Arrow: MyObject",
      "Regular: undefined, Arrow: undefined"
    ],
    correct: 1,
    explanation: "Regular function methods bind 'this' to the object (obj), so this.name is 'MyObject'. Arrow functions don't bind their own 'this', so they inherit from the enclosing scope (global), where this.name is undefined."
  },
  {
    id: 8,
    question: "What does this module export pattern create?",
    code: `// utils.js
export const formatDate = (date) => date.toLocaleDateString();
export const validateEmail = (email) => /@/.test(email);

const apiClient = {
  get: (url) => fetch(url),
  post: (url, data) => fetch(url, { method: 'POST', body: data })
};

export default apiClient;

// main.js
import api, { formatDate, validateEmail } from './utils.js';`,
    options: [
      "api contains the entire utils module",
      "api contains the apiClient object, formatDate and validateEmail are separate imports",
      "api, formatDate, and validateEmail all contain the same apiClient object", 
      "This syntax is invalid"
    ],
    correct: 1,
    explanation: "The default export (apiClient) is imported as 'api', while named exports (formatDate, validateEmail) are imported separately using destructuring syntax."
  },
  {
    id: 9,
    question: "What will this array reduce method return?",
    code: `const orders = [
  { id: 1, amount: 25.99, status: 'completed' },
  { id: 2, amount: 15.50, status: 'pending' },
  { id: 3, amount: 89.99, status: 'completed' },
  { id: 4, amount: 45.00, status: 'cancelled' }
];

const result = orders.reduce((acc, order) => {
  if (order.status === 'completed') {
    acc.total += order.amount;
    acc.count++;
  }
  return acc;
}, { total: 0, count: 0 });`,
    options: [
      "{ total: 176.48, count: 4 }",
      "{ total: 115.98, count: 2 }",
      "{ total: 25.99, count: 1 }", 
      "{ total: 89.99, count: 1 }"
    ],
    correct: 1,
    explanation: "Only orders with status 'completed' are processed. Order 1 (25.99) and Order 3 (89.99) are completed, so total is 115.98 and count is 2."
  },
  {
    id: 10,
    question: "What does this async/await pattern demonstrate?",
    code: `const fetchUserData = async (userId) => {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const userData = await response.json();
    return { success: true, data: userData };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Usage
const result = await fetchUserData(123);`,
    options: [
      "Always returns a resolved Promise with success/error structure",
      "Returns userData directly if successful, throws error if failed",
      "Returns undefined if the API call fails", 
      "This code will cause a syntax error"
    ],
    correct: 0,
    explanation: "The async function always returns a Promise. The try/catch ensures it never throws - instead it returns an object with either { success: true, data } or { success: false, error }."
  }
];

export default function JSPracticePage() {
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
    if (currentQuestion < javascriptQuizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      const correctAnswers = selectedAnswers.reduce((acc, answer, index) => {
        return answer === javascriptQuizQuestions[index].correct ? acc + 1 : acc;
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
    const percentage = (score / javascriptQuizQuestions.length) * 100;
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
              JavaScript Quiz Results
            </h1>
            
            <div className="text-center mb-8">
              <div className={`text-6xl font-bold mb-4 ${getScoreColor()}`}>
                {score}/{javascriptQuizQuestions.length}
              </div>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                {score === javascriptQuizQuestions.length
                  ? "Perfect! You've mastered JavaScript fundamentals! 🎉"
                  : score >= 8
                  ? "Excellent! You have strong JavaScript knowledge! 👏"
                  : score >= 6
                  ? "Good job! Keep practicing JavaScript concepts. 📚"
                  : "Keep learning! JavaScript mastery takes practice. 💪"}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Review Your Answers
              </h2>
              
              {javascriptQuizQuestions.map((question, index) => (
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
                        <code className="text-xs">{option}</code>
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

  const currentQ = javascriptQuizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / javascriptQuizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          {/* Progress bar */}
          <div className="h-2 bg-slate-200 dark:bg-slate-700">
            <div
              className="h-full bg-yellow-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Quiz header */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                JavaScript Fundamentals Quiz
              </h1>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Question {currentQuestion + 1} of {javascriptQuizQuestions.length}
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
                      ? "bg-yellow-50 border-yellow-300 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-600 dark:text-yellow-300"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-600"
                  }`}
                >
                  <span className="font-mono mr-3 text-sm">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <code className="text-sm">{option}</code>
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
                className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {currentQuestion === javascriptQuizQuestions.length - 1 ? "Finish Quiz" : "Next"}
              </button>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
            JavaScript Quiz Instructions
          </h3>
          <ul className="text-yellow-800 dark:text-yellow-300 space-y-1">
            <li>• Test your knowledge of functions, objects, arrays, and modern ES2015+ features</li>
            <li>• Analyze the code examples carefully - syntax and logic both matter!</li>
            <li>• You can navigate between questions using the Previous/Next buttons</li>
            <li>• Detailed explanations are provided for each answer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
