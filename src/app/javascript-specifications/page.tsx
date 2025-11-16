import Link from "next/link";

const jsModules = [
  {
    name: "Functions & Scope",
    href: "/js-functions",
    icon: "⚡",
    description: "Master JavaScript functions, arrow functions, and scope concepts",
    specs: [
      {
        name: "Functions Guide",
        description: "Complete guide to JavaScript functions, parameters, and return values",
        status: "ES2015+"
      },
      {
        name: "Arrow Functions",
        description: "Modern arrow function syntax and lexical scope binding", 
        status: "ES2015"
      },
      {
        name: "Function Scope & Closures",
        description: "Understanding variable scope, hoisting, and closure patterns",
        status: "ES5+"
      }
    ]
  },
  {
    name: "Objects & Arrays",
    href: "/js-objects-arrays", 
    icon: "📦",
    description: "Core data structures and manipulation methods for React development",
    specs: [
      {
        name: "Object Fundamentals",
        description: "Object creation, properties, methods, and prototypes",
        status: "ES5+"
      },
      {
        name: "Array Methods",
        description: "Essential array methods: map, filter, reduce, forEach, and more",
        status: "ES5+"
      },
      {
        name: "Object & Array Destructuring",
        description: "Modern syntax for extracting values from objects and arrays",
        status: "ES2015"
      }
    ]
  },
  {
    name: "Modern JS Features",
    href: "/js-modern-features",
    icon: "🚀",
    description: "ES2015+ features essential for modern React development",
    specs: [
      {
        name: "Template Literals",
        description: "String interpolation and multi-line strings with backticks",
        status: "ES2015"
      },
      {
        name: "Destructuring Assignment",
        description: "Extract values from arrays and objects into variables",
        status: "ES2015"
      },
      {
        name: "Conditional (Ternary) Operator",
        description: "Concise conditional expressions for React JSX",
        status: "ES3+"
      },
      {
        name: "Spread & Rest Operators",
        description: "Modern syntax for function parameters and array/object operations",
        status: "ES2015"
      }
    ]
  },
  {
    name: "Modules & Imports",
    href: "/js-modules",
    icon: "📋",
    description: "ES2015 module system for organizing and sharing code",
    specs: [
      {
        name: "ES2015 Modules",
        description: "Import and export statements for modular JavaScript",
        status: "ES2015"
      },
      {
        name: "Named vs Default Exports",
        description: "Different export patterns and their use cases",
        status: "ES2015"
      },
      {
        name: "Module Loading",
        description: "Static vs dynamic imports and module resolution",
        status: "ES2020"
      }
    ]
  }
];

export default function JavaScriptSpecificationsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript Specifications
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl">
            Master essential JavaScript concepts required for React.js development. 
            Learn modern ES2015+ features, functions, objects, arrays, and module systems 
            through interactive examples and practical applications.
          </p>
        </header>

        {/* Introduction */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-4">
            Why These JavaScript Features Matter for React
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-800 dark:text-blue-300">
            <div>
              <h3 className="font-semibold mb-2">🔧 Essential Building Blocks</h3>
              <ul className="space-y-1 text-sm">
                <li>• Arrow functions for event handlers</li>
                <li>• Object destructuring for props</li>
                <li>• Array methods for rendering lists</li>
                <li>• Template literals for dynamic content</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">⚡ Modern Development</h3>
              <ul className="space-y-1 text-sm">
                <li>• ES2015+ module imports/exports</li>
                <li>• Functional programming patterns</li>
                <li>• Immutable data operations</li>
                <li>• Clean, readable code practices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Module Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jsModules.map((module) => (
            <div
              key={module.href}
              className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{module.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {module.name}
                    </h3>
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {module.description}
                </p>

                <div className="space-y-4">
                  {module.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-200 dark:border-blue-800 pl-4"
                    >
                      <h4 className="font-medium text-slate-900 dark:text-white flex items-center justify-between">
                        {spec.name}
                        <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                          {spec.status}
                        </span>
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        {spec.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href={module.href}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Learn {module.name}
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="mt-16 bg-slate-100 dark:bg-slate-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Recommended Learning Path for React Development
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                1
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Functions & Scope</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Master arrow functions and closures for event handling
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                2
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Objects & Arrays</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Learn data manipulation for state management
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                3
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Modern Features</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Destructuring and template literals for clean code
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                4
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Modules</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Import/export for component organization
              </p>
            </div>
          </div>
        </div>

        {/* Practice Section */}
        <div className="mt-16 text-center">
          <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-4">
              Ready to Test Your Knowledge?
            </h2>
            <p className="text-green-800 dark:text-green-300 mb-6">
              Take our interactive JavaScript quiz to assess your understanding of these essential concepts.
            </p>
            <Link
              href="/js-practice"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Take JavaScript Quiz
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
