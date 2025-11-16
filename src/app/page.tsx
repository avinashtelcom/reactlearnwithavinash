import Link from "next/link";

const webStandardsModules = [
  {
    category: "HTML Semantics",
    description: "Master semantic HTML elements for meaningful, accessible markup",
    subcategories: [
      {
        name: "Document Structure",
        description: "Elements that define the overall structure of an HTML document", 
        elements: ["html", "head", "body", "title", "meta"],
        href: "/document-structure"
      },
      {
        name: "Content Sectioning",
        description: "Elements that organize content into logical sections",
        elements: ["header", "nav", "main", "article", "section", "aside", "footer"],
        href: "/content-sectioning"
      },
      {
        name: "Text Content",
        description: "Elements for organizing and presenting textual content",
        elements: ["h1-h6", "p", "ul", "ol", "li", "dl", "dt", "dd"],
        href: "/text-content"
      },
      {
        name: "Forms",
        description: "Elements for creating interactive forms and user inputs",
        elements: ["form", "input", "label", "select", "textarea", "button"],
        href: "/forms"
      },
      {
        name: "Interactive Elements", 
        description: "Elements that provide interactive functionality",
        elements: ["a", "button", "details", "summary", "dialog"],
        href: "/interactive"
      }
    ],
    icon: "🏗️",
    href: "/html-semantics"
  },
  {
    category: "CSS Specifications",
    description: "Comprehensive guide to CSS specifications and modern features",
    subcategories: [
      {
        name: "CSS Fundamentals",
        description: "Core CSS specifications and syntax foundation",
        elements: ["CSS 2.1", "Snapshots", "Syntax", "Values & Units"],
        href: "/css-fundamentals"
      },
      {
        name: "Selectors & Media Queries",
        description: "Advanced selectors and responsive design queries",
        elements: ["Selectors Level 4", "Media Queries Level 4", "Conditional Rules"],
        href: "/selectors-media"
      },
      {
        name: "Layout & Positioning",
        description: "Modern layout systems and positioning techniques",
        elements: ["Grid Layout", "Flexbox", "Multi-column", "Anchor Positioning"],
        href: "/layout-positioning"
      },
      {
        name: "Visual & Animations",
        description: "Visual effects, colors, and animation specifications",
        elements: ["Color Level 4", "Animations", "Transitions", "Transforms"],
        href: "/visual-animations"
      },
      {
        name: "Modern CSS Features",
        description: "Cutting-edge CSS features and experimental specifications",
        elements: ["Custom Properties", "Container Queries", "Nesting", "View Transitions"],
        href: "/modern-css"
      }
    ],
    icon: "🎨",
    href: "/css-specifications"
  },
  {
    category: "JavaScript Specifications",
    description: "Essential JavaScript concepts for React development and modern web applications",
    subcategories: [
      {
        name: "Functions & Scope",
        description: "Master functions, arrow functions, closures, and scope",
        elements: ["Functions", "Arrow Functions", "Closures", "Scope"],
        href: "/js-functions"
      },
      {
        name: "Objects & Arrays",
        description: "Core data structures and manipulation methods",
        elements: ["Objects", "Arrays", "Destructuring", "Methods"],
        href: "/js-objects-arrays"
      },
      {
        name: "Modern JS Features",
        description: "ES2015+ features essential for React development",
        elements: ["Template Literals", "Ternary Operator", "Spread & Rest"],
        href: "/js-modern-features"
      },
      {
        name: "Modules & Imports",
        description: "ES2015 module system for organizing and sharing code",
        elements: ["Import/Export", "Named Exports", "Default Exports", "Dynamic Imports"],
        href: "/js-modules"
      }
    ],
    icon: "⚡",
    href: "/javascript-specifications"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Master Web Standards
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto">
            Comprehensive learning hub for <strong>HTML semantics</strong>, <strong>CSS specifications</strong>, and <strong>JavaScript fundamentals</strong>. 
            Build accessible, modern websites with interactive examples based on 
            <strong> WHATWG HTML Living Standard</strong>, <strong> W3C CSS specifications</strong>, and <strong>ECMAScript standards</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/document-structure"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Start with HTML
              <span className="ml-2">🏗️</span>
            </Link>
            <Link
              href="/css-fundamentals"
              className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore CSS
              <span className="ml-2">🎨</span>
            </Link>
            <Link
              href="/js-functions"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Learn JavaScript
              <span className="ml-2">⚡</span>
            </Link>
          </div>
        </header>

        {/* Learning Sections */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Learning Modules
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {webStandardsModules.map((mainModule) => (
              <div key={mainModule.category} className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">{mainModule.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {mainModule.category}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                    {mainModule.description}
                  </p>
                  <Link
                    href={mainModule.href}
                    className={`inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl ${
                      mainModule.category === "HTML Semantics"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : mainModule.category === "CSS Specifications"
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-yellow-500 hover:bg-yellow-600 text-white"
                    }`}
                  >
                    Explore {mainModule.category}
                    <span className="ml-2">→</span>
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {mainModule.subcategories.map((subModule) => (
                    <Link
                      key={subModule.name}
                      href={subModule.href}
                      className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
                    >
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        {subModule.name}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                        {subModule.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {subModule.elements.map((element) => (
                          <span
                            key={element}
                            className={`px-2 py-1 text-xs rounded-md font-mono ${
                              mainModule.category === "HTML Semantics"
                                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                                : mainModule.category === "CSS Specifications"
                                ? "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300"
                                : "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300"
                            }`}
                          >
                            {mainModule.category === "HTML Semantics" ? `<${element}>` : element}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            What You'll Master
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                HTML Semantics
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Master semantic HTML elements based on WHATWG standards
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                CSS Specifications
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Learn modern CSS features from official W3C specifications
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                JavaScript Fundamentals
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Essential JavaScript concepts for React and modern web development
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♿</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Web Accessibility
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Build inclusive websites that work for all users and assistive technologies
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Modern Standards
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Stay current with the latest web standards and best practices
              </p>
            </div>
          </div>
        </section>

        {/* Practice Section */}
        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Practice?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Test your knowledge with interactive quizzes for HTML, CSS, and JavaScript
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/practice"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              HTML Quiz
              <span className="ml-2">🏗️</span>
            </Link>
            <Link
              href="/css-practice"
              className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              CSS Quiz
              <span className="ml-2">🎨</span>
            </Link>
            <Link
              href="/js-practice"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl"
            >
              JavaScript Quiz
              <span className="ml-2">⚡</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}