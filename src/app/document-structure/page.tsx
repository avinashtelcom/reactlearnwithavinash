import { CodeExample } from "@/components/CodeExample";

export default function DocumentStructurePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Document Structure Elements
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl">
            Learn about the fundamental elements that define the structure of an HTML document. 
            These elements form the skeleton of every web page and are essential for proper document organization.
          </p>
        </header>

        <div className="space-y-12">
          {/* HTML Element */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              The &lt;html&gt; Element
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              The root element of an HTML document. It wraps all content on the page and should include the language attribute.
            </p>
            <CodeExample
              title="HTML Root Element"
              description="The html element represents the root of an HTML document"
              htmlCode={`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document Title</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is the main content of the page.</p>
  </body>
</html>`}
              explanation="The html element is the top-level element that contains all other elements. The 'lang' attribute specifies the language of the document content, which helps screen readers and search engines."
              accessibilityTips={[
                "Always include the 'lang' attribute to specify the document language",
                "Use appropriate language codes (e.g., 'en' for English, 'fr' for French)",
                "This helps assistive technologies provide proper pronunciation"
              ]}
            />
          </section>

          {/* Head Element */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              The &lt;head&gt; Element
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Contains metadata about the document that isn't displayed on the page but is essential for browsers and search engines.
            </p>
            <CodeExample
              title="Document Head with Metadata"
              description="Essential metadata for every HTML document"
              htmlCode={`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Semantics Guide - Learn Web Standards</title>
  <meta name="description" content="Learn HTML semantic elements with interactive examples">
  <meta name="keywords" content="HTML, semantics, web development, accessibility">
  <link rel="stylesheet" href="styles.css">
</head>`}
              explanation="The head element contains important metadata: charset for character encoding, viewport for responsive design, title for the browser tab, and meta descriptions for SEO."
              accessibilityTips={[
                "Always specify charset='UTF-8' for proper character encoding",
                "Include a descriptive title for screen readers and browser tabs",
                "Use viewport meta tag for mobile accessibility",
                "Add meaningful descriptions for better navigation context"
              ]}
            />
          </section>

          {/* Title Element */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              The &lt;title&gt; Element
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Defines the document title shown in browser tabs, bookmarks, and search results.
            </p>
            <CodeExample
              title="Document Title Examples"
              description="Different approaches to writing effective page titles"
              htmlCode={`<!-- Homepage title -->
<title>Acme Corp - Quality Products Since 1990</title>

<!-- Article page title -->
<title>How to Learn HTML Semantics | Web Development Blog</title>

<!-- Product page title -->
<title>iPhone 15 Pro - Apple Smartphone | Tech Store</title>

<!-- Contact page title -->
<title>Contact Us - Get in Touch | Acme Corp</title>`}
              explanation="Good titles are descriptive, unique per page, and follow a consistent format. They should be 50-60 characters for optimal display in search results."
              accessibilityTips={[
                "Keep titles concise but descriptive (50-60 characters)",
                "Put the most important information first",
                "Use consistent formatting across your site",
                "Avoid keyword stuffing - write for humans first"
              ]}
            />
          </section>

          {/* Meta Elements */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              The &lt;meta&gt; Elements
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Provide metadata about the HTML document, including character encoding, viewport settings, and SEO information.
            </p>
            <CodeExample
              title="Essential Meta Tags"
              description="Key meta elements for modern web documents"
              htmlCode={`<!-- Character encoding -->
<meta charset="UTF-8">

<!-- Viewport for responsive design -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- SEO meta tags -->
<meta name="description" content="Learn HTML semantics with interactive examples and best practices for accessible web development.">
<meta name="keywords" content="HTML, semantics, accessibility, web development">
<meta name="author" content="Your Name">

<!-- Open Graph for social sharing -->
<meta property="og:title" content="HTML Semantics Learning Hub">
<meta property="og:description" content="Master HTML semantic elements with interactive examples">
<meta property="og:image" content="https://example.com/social-image.jpg">
<meta property="og:url" content="https://example.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="HTML Semantics Learning Hub">
<meta name="twitter:description" content="Master HTML semantic elements">
<meta name="twitter:image" content="https://example.com/twitter-image.jpg">`}
              explanation="Meta elements provide crucial information to browsers, search engines, and social media platforms. The viewport meta tag is essential for responsive design, while Open Graph tags control how your page appears when shared."
              accessibilityTips={[
                "Always include charset and viewport meta tags",
                "Write clear, descriptive meta descriptions",
                "Use Open Graph tags for better social media accessibility",
                "Keep descriptions under 160 characters for search engines"
              ]}
            />
          </section>

          {/* Body Element */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              The &lt;body&gt; Element
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Contains all the visible content of the HTML document. This is where all the semantic elements we'll learn about are placed.
            </p>
            <CodeExample
              title="Basic Body Structure"
              description="A well-structured body element with semantic landmarks"
              htmlCode={`<body>
  <!-- Skip link for accessibility -->
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <!-- Site header -->
  <header>
    <h1>My Website</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Main content -->
  <main id="main-content">
    <h2>Welcome to Our Site</h2>
    <p>This is the main content area.</p>
  </main>

  <!-- Site footer -->
  <footer>
    <p>&copy; 2024 My Website. All rights reserved.</p>
  </footer>
</body>`}
              explanation="The body element contains all visible content. Using semantic landmarks (header, nav, main, footer) helps users navigate with assistive technologies. Skip links allow keyboard users to jump directly to main content."
              accessibilityTips={[
                "Include skip links for keyboard navigation",
                "Use semantic landmarks (header, main, footer) for screen readers",
                "Ensure proper heading hierarchy starts with h1",
                "Test navigation with keyboard-only interaction"
              ]}
            />
          </section>

          {/* Best Practices */}
          <section className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Document Structure Best Practices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  ✅ Do This
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Always declare DOCTYPE html</li>
                  <li>• Include lang attribute on html element</li>
                  <li>• Set charset to UTF-8</li>
                  <li>• Use viewport meta for mobile</li>
                  <li>• Write descriptive page titles</li>
                  <li>• Include skip links for accessibility</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  ❌ Avoid This
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Missing DOCTYPE declaration</li>
                  <li>• Omitting lang attribute</li>
                  <li>• Using outdated meta tags</li>
                  <li>• Generic or missing page titles</li>
                  <li>• Skipping viewport configuration</li>
                  <li>• Ignoring semantic structure</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
