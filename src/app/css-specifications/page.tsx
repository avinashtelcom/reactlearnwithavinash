import Link from "next/link";

const cssModules = [
  {
    name: "CSS Fundamentals", 
    href: "/css-fundamentals",
    icon: "📚",
    description: "Core CSS specifications and syntax foundation",
    specs: [
      {
        name: "CSS 2.1",
        description: "The stable foundation of CSS with all interoperably implemented features",
        status: "Recommendation"
      },
      {
        name: "CSS Snapshots 2024", 
        description: "Current state of CSS - distinguishing stable from experimental features",
        status: "Working Group Note"
      },
      {
        name: "CSS Syntax Level 3",
        description: "How to parse CSS, including error handling and recovery",
        status: "Candidate Recommendation"
      },
      {
        name: "CSS Values and Units Level 4",
        description: "Common values and units used throughout CSS specifications",
        status: "Working Draft"
      }
    ]
  },
  {
    name: "Selectors & Media Queries",
    href: "/selectors-media", 
    icon: "🎯",
    description: "Advanced selectors and responsive design queries",
    specs: [
      {
        name: "Selectors Level 4",
        description: "Extended selectors including :has(), :is(), :where() and more",
        status: "Working Draft"
      },
      {
        name: "Media Queries Level 4",
        description: "Enhanced media features for modern devices and capabilities",
        status: "Candidate Recommendation"
      },
      {
        name: "CSS Conditional Rules Level 4", 
        description: "Testing for selector support and combining conditions",
        status: "Working Draft"
      },
      {
        name: "Media Queries Level 5",
        description: "Ambient light sensing and JavaScript availability testing",
        status: "Working Draft"
      }
    ]
  },
  {
    name: "Layout & Positioning",
    href: "/layout-positioning",
    icon: "📐", 
    description: "Modern layout systems and positioning techniques",
    specs: [
      {
        name: "CSS Grid Layout Level 2",
        description: "Two-dimensional grid-based layout system with subgrids",
        status: "Candidate Recommendation"
      },
      {
        name: "CSS Flexible Box Layout Level 1",
        description: "One-dimensional layout method for arranging items in rows or columns",
        status: "Candidate Recommendation"
      },
      {
        name: "CSS Multi-column Layout Level 1",
        description: "Flowing content across multiple columns like newspapers",
        status: "Working Draft"
      },
      {
        name: "CSS Anchor Positioning",
        description: "Position elements relative to other elements anywhere on the page",
        status: "Working Draft"
      }
    ]
  },
  {
    name: "Visual & Animations",
    href: "/visual-animations",
    icon: "✨",
    description: "Visual effects, colors, and animation specifications", 
    specs: [
      {
        name: "CSS Color Level 4",
        description: "Extended color spaces, new color functions, and relative colors",
        status: "Candidate Recommendation"
      },
      {
        name: "CSS Animations Level 1",
        description: "Keyframe-based animations with timing functions and delays",
        status: "Working Draft"
      },
      {
        name: "CSS Transitions Level 1", 
        description: "Smooth transitions between property value changes",
        status: "Working Draft"
      },
      {
        name: "CSS Transforms Level 1",
        description: "2D and 3D transformations including rotation, scaling, and translation",
        status: "Working Draft"
      }
    ]
  },
  {
    name: "Modern CSS Features",
    href: "/modern-css",
    icon: "🚀",
    description: "Cutting-edge CSS features and experimental specifications",
    specs: [
      {
        name: "CSS Custom Properties Level 1",
        description: "CSS variables for storing and reusing values throughout stylesheets",
        status: "Candidate Recommendation"
      },
      {
        name: "CSS Container Queries Level 1",
        description: "Style elements based on the size of their containing element",
        status: "Working Draft"
      },
      {
        name: "CSS Nesting", 
        description: "Write nested CSS rules for better organization and maintainability",
        status: "Working Draft"
      },
      {
        name: "CSS View Transitions Level 1",
        description: "Smooth transitions when content changes or pages navigate",
        status: "Working Draft"
      }
    ]
  }
];

export default function CSSSpecificationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            CSS Specifications
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-8">
            Comprehensive guide to CSS specifications from the{" "}
            <a 
              href="https://www.w3.org/Style/CSS/specs.en.html"
              className="text-purple-600 dark:text-purple-400 hover:underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              W3C CSS Working Group
            </a>. 
            Learn modern CSS features, understand specification statuses, and master the latest web styling standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/css-fundamentals"
              className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Start with Fundamentals
              <span className="ml-2">📚</span>
            </Link>
            <Link
              href="/modern-css"
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Modern Features
              <span className="ml-2">🚀</span>
            </Link>
          </div>
        </header>

        {/* Specification Status Guide */}
        <section className="mb-16 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Understanding Specification Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2"></div>
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-1">Recommendation</h3>
              <p className="text-sm text-green-700 dark:text-green-400">Stable, widely implemented</p>
            </div>
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-2"></div>
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">Candidate Rec</h3>
              <p className="text-sm text-blue-700 dark:text-blue-400">Testing phase, stable API</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-2"></div>
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-1">Working Draft</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-400">In development, may change</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="w-4 h-4 bg-gray-500 rounded-full mx-auto mb-2"></div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-300 mb-1">Note</h3>
              <p className="text-sm text-gray-700 dark:text-gray-400">Informational, guidance</p>
            </div>
          </div>
        </section>

        {/* CSS Modules */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            CSS Modules by Category
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cssModules.map((module) => (
              <div
                key={module.name}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{module.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {module.name}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        {module.description}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={module.href}
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Explore Module
                    <span className="ml-2">→</span>
                  </Link>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Key Specifications
                  </h4>
                  <div className="space-y-3">
                    {module.specs.map((spec) => (
                      <div
                        key={spec.name}
                        className="flex items-start justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg"
                      >
                        <div className="flex-1 pr-3">
                          <h5 className="font-medium text-slate-900 dark:text-white text-sm">
                            {spec.name}
                          </h5>
                          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                            {spec.description}
                          </p>
                        </div>
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                            spec.status === "Recommendation"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                              : spec.status === "Candidate Recommendation"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
                              : spec.status === "Working Draft"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {spec.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reference Links */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Official CSS Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://www.w3.org/Style/CSS/specs.en.html"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors border border-purple-200 dark:border-purple-700"
            >
              <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                W3C CSS Specifications
              </h3>
              <p className="text-sm text-purple-700 dark:text-purple-400">
                Official specifications from the CSS Working Group
              </p>
            </a>
            <a
              href="https://www.w3.org/Style/CSS/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors border border-blue-200 dark:border-blue-700"
            >
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                CSS Working Group
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                Current work, discussions, and meeting minutes
              </p>
            </a>
            <a
              href="https://caniuse.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors border border-green-200 dark:border-green-700"
            >
              <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                Browser Support
              </h3>
              <p className="text-sm text-green-700 dark:text-green-400">
                Check compatibility across different browsers
              </p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
