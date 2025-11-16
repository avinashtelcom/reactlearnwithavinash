import { CodeExample } from "@/components/CodeExample";

export default function ContentSectioningPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Content Sectioning Elements
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl">
            Master the semantic elements that organize and structure your content into meaningful sections. 
            These elements create landmarks for assistive technologies and improve SEO.
          </p>
        </header>

        <div className="space-y-12">
          {/* Header Element */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              The &lt;header&gt; Element
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Represents introductory content for a section or page. Can contain headings, navigation, logos, and other introductory elements.
            </p>
            <CodeExample
              title="Page and Section Headers"
              description="Different uses of the header element"
              htmlCode={`<!-- Page header -->
<header>
  <img src="logo.png" alt="Acme Corporation">
  <h1>Acme Corporation</h1>
  <p>Quality products since 1990</p>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/products">Products</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<!-- Article header -->
<article>
  <header>
    <h2>Understanding Web Accessibility</h2>
    <p>Published on <time datetime="2024-11-16">November 16, 2024</time></p>
    <p>By <address>Jane Smith, Web Developer</address></p>
    <p>Reading time: 5 minutes</p>
  </header>
  <p>Article content goes here...</p>
</article>`}
              explanation="The header element can be used multiple times in a document - once for the page header and again within sections or articles. It should contain introductory content relevant to its parent element."
              accessibilityTips={[
                "Use header as a landmark for screen reader navigation",
                "Include site logo and main navigation in page header",
                "Article headers should contain metadata like publication date",
                "Ensure header content is relevant to its section"
              ]}
            />
          </section>

          {/* Navigation Element */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              The &lt;nav&gt; Element
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Contains navigation links for the current document or related documents. Only use for major navigation sections.
            </p>
            <CodeExample
              title="Navigation Examples"
              description="Different types of navigation elements"
              htmlCode={`<!-- Main site navigation -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<!-- Breadcrumb navigation -->
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/products/laptops">Laptops</a></li>
    <li aria-current="page">MacBook Pro</li>
  </ol>
</nav>

<!-- Table of contents -->
<nav aria-label="Table of contents">
  <h2>Contents</h2>
  <ol>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#methods">Methods</a></li>
    <li><a href="#results">Results</a></li>
    <li><a href="#conclusion">Conclusion</a></li>
  </ol>
</nav>`}
              explanation="The nav element should only be used for major navigation blocks. Use aria-label to distinguish between multiple nav elements, and aria-current to indicate the current page."
              accessibilityTips={[
                "Use aria-label to distinguish multiple nav elements",
                "Include aria-current='page' for the current location",
                "Structure navigation as lists for screen readers",
                "Ensure navigation is keyboard accessible"
              ]}
            />
          </section>

          {/* Main Element */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              The &lt;main&gt; Element
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Represents the main content of the document. There should be only one main element per page, and it shouldn't include repeated content like headers, footers, or navigation.
            </p>
            <CodeExample
              title="Main Content Structure"
              description="Proper use of the main element"
              htmlCode={`<body>
  <header>
    <h1>My Blog</h1>
    <nav>
      <!-- Site navigation -->
    </nav>
  </header>

  <main id="main-content">
    <h2>Latest Articles</h2>
    
    <article>
      <header>
        <h3>Getting Started with Web Accessibility</h3>
        <time datetime="2024-11-16">November 16, 2024</time>
      </header>
      <p>Web accessibility ensures that websites work for everyone...</p>
    </article>
    
    <article>
      <header>
        <h3>CSS Grid Layout Guide</h3>
        <time datetime="2024-11-15">November 15, 2024</time>
      </header>
      <p>CSS Grid is a powerful layout system...</p>
    </article>
  </main>

  <aside>
    <h2>Popular Posts</h2>
    <!-- Sidebar content -->
  </aside>

  <footer>
    <!-- Site footer -->
  </footer>
</body>`}
              explanation="The main element contains the primary content unique to that page. Skip links often target the main element, and screen readers use it as a landmark for navigation."
              accessibilityTips={[
                "Use only one main element per page",
                "Target main with skip links (id='main-content')",
                "Exclude repeated content like navigation and footers",
                "Main element serves as a landmark for screen readers"
              ]}
            />
          </section>

          {/* Article Element */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              The &lt;article&gt; Element
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Represents a self-contained piece of content that could be distributed independently, such as blog posts, news articles, or forum posts.
            </p>
            <CodeExample
              title="Article Element Examples"
              description="Self-contained content that makes sense on its own"
              htmlCode={`<!-- Blog post article -->
<article>
  <header>
    <h2>The Importance of Semantic HTML</h2>
    <p>
      Published on <time datetime="2024-11-16">November 16, 2024</time>
      by <address rel="author">John Doe</address>
    </p>
    <p>Tags: 
      <a href="/tags/html">#HTML</a>
      <a href="/tags/accessibility">#Accessibility</a>
    </p>
  </header>
  
  <p>Semantic HTML forms the foundation of accessible web development...</p>
  
  <section>
    <h3>Why Semantics Matter</h3>
    <p>Semantic elements provide meaning to content...</p>
  </section>
  
  <footer>
    <p>Share this article:</p>
    <a href="#" aria-label="Share on Twitter">Twitter</a>
    <a href="#" aria-label="Share on Facebook">Facebook</a>
  </footer>
</article>

<!-- Product review article -->
<article>
  <header>
    <h2>MacBook Pro M3 Review</h2>
    <div>Rating: <span>★★★★☆</span> (4/5 stars)</div>
  </header>
  
  <section>
    <h3>Performance</h3>
    <p>The M3 chip delivers exceptional performance...</p>
  </section>
  
  <section>
    <h3>Design</h3>
    <p>Apple's design language continues to impress...</p>
  </section>
</article>`}
              explanation="Articles are self-contained content that would make sense if syndicated or shared independently. They can contain their own headers, sections, and footers."
              accessibilityTips={[
                "Each article should have a clear heading (h2, h3, etc.)",
                "Include publication metadata in article headers",
                "Use time element with datetime attribute for dates",
                "Articles can be nested when appropriate (comments within posts)"
              ]}
            />
          </section>

          {/* Section Element */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              The &lt;section&gt; Element
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Represents a thematic grouping of content with a heading. Use when no other semantic element is more appropriate.
            </p>
            <CodeExample
              title="Section Element Usage"
              description="Organizing content into thematic sections"
              htmlCode={`<article>
  <header>
    <h1>Complete Guide to Web Development</h1>
  </header>
  
  <section>
    <h2>Frontend Development</h2>
    <p>Frontend development involves creating user interfaces...</p>
    
    <section>
      <h3>HTML Fundamentals</h3>
      <p>HTML provides the structure for web pages...</p>
    </section>
    
    <section>
      <h3>CSS Styling</h3>
      <p>CSS controls the presentation and layout...</p>
    </section>
  </section>
  
  <section>
    <h2>Backend Development</h2>
    <p>Backend development handles server-side logic...</p>
    
    <section>
      <h3>Server Technologies</h3>
      <p>Popular backend technologies include...</p>
    </section>
    
    <section>
      <h3>Database Management</h3>
      <p>Databases store and organize application data...</p>
    </section>
  </section>
</article>`}
              explanation="Sections represent thematic groupings of content and should almost always have a heading. They help create a logical document outline and can be nested."
              accessibilityTips={[
                "Every section should have a heading (h2-h6)",
                "Sections create landmarks for screen reader navigation",
                "Use sections to create logical document structure",
                "Consider using article instead if content is self-contained"
              ]}
            />
          </section>

          {/* Aside Element */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              The &lt;aside&gt; Element
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Contains content that is tangentially related to the main content, such as sidebars, pull quotes, or related links.
            </p>
            <CodeExample
              title="Aside Element Examples"
              description="Related but separate content"
              htmlCode={`<!-- Main page sidebar -->
<aside>
  <h2>Popular Posts</h2>
  <ul>
    <li><a href="/post1">Introduction to CSS Grid</a></li>
    <li><a href="/post2">JavaScript ES6 Features</a></li>
    <li><a href="/post3">Web Accessibility Basics</a></li>
  </ul>
  
  <h2>Categories</h2>
  <ul>
    <li><a href="/category/html">HTML (15)</a></li>
    <li><a href="/category/css">CSS (23)</a></li>
    <li><a href="/category/js">JavaScript (31)</a></li>
  </ul>
</aside>

<!-- Article-related sidebar -->
<article>
  <h1>Climate Change Solutions</h1>
  <p>Global warming requires immediate action...</p>
  
  <aside>
    <h2>Related Statistics</h2>
    <p>CO2 levels have increased by 40% since 1990...</p>
    <p>Renewable energy now accounts for 26% of global power...</p>
  </aside>
  
  <p>Continued article content...</p>
</article>

<!-- Pull quote -->
<article>
  <h1>The Future of Web Development</h1>
  <p>Web development continues to evolve rapidly...</p>
  
  <aside>
    <blockquote>
      "The best way to predict the future is to invent it."
      <cite>— Alan Kay</cite>
    </blockquote>
  </aside>
</article>`}
              explanation="The aside element contains content that is related to but separate from the main content. It can be used for sidebars, pull quotes, advertisements, or related information."
              accessibilityTips={[
                "Include descriptive headings in aside elements",
                "Use aside for content that supplements the main content",
                "Aside elements are complementary landmarks for screen readers",
                "Consider the reading flow when placing aside elements"
              ]}
            />
          </section>

          {/* Footer Element */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              The &lt;footer&gt; Element
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Contains footer information for its nearest sectioning content or root element. Typically includes copyright, contact info, or related links.
            </p>
            <CodeExample
              title="Footer Element Examples"
              description="Footer content for pages and sections"
              htmlCode={`<!-- Page footer -->
<footer>
  <div>
    <h2>Contact Information</h2>
    <address>
      Acme Corporation<br>
      123 Main Street<br>
      City, State 12345<br>
      <a href="mailto:info@acme.com">info@acme.com</a><br>
      <a href="tel:+1234567890">+1 (234) 567-8900</a>
    </address>
  </div>
  
  <div>
    <h2>Quick Links</h2>
    <ul>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/terms">Terms of Service</a></li>
      <li><a href="/sitemap">Site Map</a></li>
    </ul>
  </div>
  
  <div>
    <h2>Follow Us</h2>
    <ul>
      <li><a href="https://twitter.com/acme" aria-label="Follow us on Twitter">Twitter</a></li>
      <li><a href="https://facebook.com/acme" aria-label="Follow us on Facebook">Facebook</a></li>
    </ul>
  </div>
  
  <p>&copy; 2024 Acme Corporation. All rights reserved.</p>
</footer>

<!-- Article footer -->
<article>
  <header>
    <h1>Understanding CSS Flexbox</h1>
  </header>
  
  <p>Article content about flexbox...</p>
  
  <footer>
    <p>
      Published on <time datetime="2024-11-16">November 16, 2024</time>
      by <address rel="author">Sarah Johnson</address>
    </p>
    <p>Filed under: <a href="/category/css">CSS</a>, <a href="/category/layout">Layout</a></p>
    <p>
      <a href="/css-grid-guide">Next: CSS Grid Guide →</a>
    </p>
  </footer>
</article>`}
              explanation="Footer elements can appear at the page level or within articles and sections. They should contain information about their parent element, such as authorship, publication date, or related links."
              accessibilityTips={[
                "Use address element for contact information",
                "Include copyright and legal information in page footers",
                "Article footers should contain metadata about the article",
                "Provide accessible labels for social media links"
              ]}
            />
          </section>

          {/* Best Practices */}
          <section className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Content Sectioning Best Practices
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Document Structure Guidelines
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Use only one main element per page</li>
                  <li>• Include descriptive headings in all sections</li>
                  <li>• Use article for self-contained content</li>
                  <li>• Place navigation in nav elements</li>
                  <li>• Include skip links targeting main content</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Accessibility Considerations
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Use aria-label to distinguish multiple nav elements</li>
                  <li>• Ensure logical heading hierarchy (h1→h2→h3)</li>
                  <li>• Test with screen readers and keyboard navigation</li>
                  <li>• Provide meaningful content in aside elements</li>
                  <li>• Use address element for contact information</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
