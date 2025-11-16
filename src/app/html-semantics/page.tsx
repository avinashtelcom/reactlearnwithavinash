import Link from "next/link";

const htmlModules = [
  {
    name: "Document Structure",
    href: "/document-structure",
    icon: "🏗️",
    description: "Elements that define the overall structure of an HTML document",
    elements: [
      {
        name: "<html>",
        description: "Root element that represents an HTML document"
      },
      {
        name: "<head>", 
        description: "Container for metadata about the document"
      },
      {
        name: "<body>",
        description: "Contains the visible content of the document"
      },
      {
        name: "<title>",
        description: "Defines the document title shown in browser tab"
      },
      {
        name: "<meta>",
        description: "Provides metadata about the HTML document"
      }
    ]
  },
  {
    name: "Content Sectioning",
    href: "/content-sectioning", 
    icon: "📝",
    description: "Elements that organize content into logical sections",
    elements: [
      {
        name: "<header>",
        description: "Introductory content for a section or page"
      },
      {
        name: "<nav>",
        description: "Contains navigation links"
      },
      {
        name: "<main>",
        description: "Main content area of the document"
      },
      {
        name: "<article>",
        description: "Self-contained content that could be distributed independently"
      },
      {
        name: "<section>",
        description: "Thematic grouping of content with a heading"
      },
      {
        name: "<aside>",
        description: "Content tangentially related to main content"
      },
      {
        name: "<footer>",
        description: "Footer information for nearest sectioning content"
      }
    ]
  },
  {
    name: "Text Content",
    href: "/text-content",
    icon: "📄", 
    description: "Elements for organizing and presenting textual content",
    elements: [
      {
        name: "<h1>-<h6>",
        description: "Heading elements that create document hierarchy"
      },
      {
        name: "<p>",
        description: "Represents a paragraph of text"
      },
      {
        name: "<ul>, <ol>, <li>",
        description: "Unordered lists, ordered lists, and list items"
      },
      {
        name: "<dl>, <dt>, <dd>",
        description: "Description lists with terms and definitions"
      },
      {
        name: "<figure>, <figcaption>",
        description: "Self-contained content with optional caption"
      }
    ]
  },
  {
    name: "Forms",
    href: "/forms",
    icon: "📋",
    description: "Elements for creating interactive forms and user inputs", 
    elements: [
      {
        name: "<form>",
        description: "Container for interactive form controls"
      },
      {
        name: "<input>",
        description: "Various input types for user data entry"
      },
      {
        name: "<label>",
        description: "Caption for form controls (essential for accessibility)"
      },
      {
        name: "<select>, <option>",
        description: "Dropdown menus and their options"
      },
      {
        name: "<textarea>",
        description: "Multi-line text input control"
      },
      {
        name: "<button>",
        description: "Clickable button for user interactions"
      },
      {
        name: "<fieldset>, <legend>",
        description: "Groups related form controls with a caption"
      }
    ]
  },
  {
    name: "Interactive Elements", 
    href: "/interactive",
    icon: "🔗",
    description: "Elements that provide interactive functionality",
    elements: [
      {
        name: "<a>",
        description: "Hyperlinks to other resources or page sections"
      },
      {
        name: "<button>",
        description: "Interactive button for JavaScript actions"
      },
      {
        name: "<details>, <summary>",
        description: "Disclosure widget with collapsible content"
      },
      {
        name: "<dialog>",
        description: "Modal or non-modal dialog box"
      }
    ]
  }
];

export default function HTMLSemanticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            HTML Semantics
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-8">
            Master semantic HTML elements based on the{" "}
            <a 
              href="https://html.spec.whatwg.org/"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              WHATWG HTML Living Standard
            </a>.
            Learn to create accessible, meaningful, and well-structured web content using proper semantic markup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/document-structure"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Start with Document Structure
              <span className="ml-2">🏗️</span>
            </Link>
            <Link
              href="/practice"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Test Your Knowledge
              <span className="ml-2">🎯</span>
            </Link>
          </div>
        </header>

        {/* Why Semantics Matter */}
        <section className="mb-16 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Why HTML Semantics Matter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♿</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Accessibility
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Screen readers and assistive technologies rely on semantic HTML to understand and navigate content effectively.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                SEO Benefits
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Search engines better understand and index semantically structured content, improving search rankings.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Maintainability
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Semantic markup makes code more readable and maintainable for developers and automated tools.
              </p>
            </div>
          </div>
        </section>

        {/* HTML Modules */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            HTML Semantic Elements by Category
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {htmlModules.map((module) => (
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
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Learn {module.name}
                    <span className="ml-2">→</span>
                  </Link>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Key Elements
                  </h4>
                  <div className="space-y-3">
                    {module.elements.map((element) => (
                      <div
                        key={element.name}
                        className="flex items-start p-3 bg-slate-50 dark:bg-slate-700 rounded-lg"
                      >
                        <code className="text-sm font-mono bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-2 py-1 rounded mr-3 whitespace-nowrap">
                          {element.name}
                        </code>
                        <div className="flex-1">
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            {element.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Path */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Recommended Learning Path
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {htmlModules.map((module, index) => (
              <div key={module.name} className="relative">
                <Link
                  href={module.href}
                  className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors text-center"
                >
                  <div className="text-2xl mb-2">{module.icon}</div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white">
                    {index + 1}. {module.name}
                  </div>
                </Link>
                {index < htmlModules.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-slate-400">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Reference Links */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Official HTML Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://html.spec.whatwg.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors border border-blue-200 dark:border-blue-700"
            >
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                WHATWG HTML Living Standard
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                The official HTML specification maintained by browser vendors
              </p>
            </a>
            <a
              href="https://validator.w3.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors border border-green-200 dark:border-green-700"
            >
              <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                W3C Markup Validator
              </h3>
              <p className="text-sm text-green-700 dark:text-green-400">
                Validate your HTML markup for compliance with standards
              </p>
            </a>
            <a
              href="https://webaim.org/articles/screenreader_testing/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors border border-purple-200 dark:border-purple-700"
            >
              <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                Accessibility Testing
              </h3>
              <p className="text-sm text-purple-700 dark:text-purple-400">
                Learn how to test HTML semantics with screen readers
              </p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
