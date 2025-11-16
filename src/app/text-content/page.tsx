import { CodeExample } from "@/components/CodeExample";

export default function TextContentPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Text Content Elements
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl">
            Learn about semantic elements that structure and present textual content. 
            These elements help create proper document hierarchy and improve content accessibility.
          </p>
        </header>

        <div className="space-y-12">
          {/* Headings */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Heading Elements (h1-h6)
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Headings create a hierarchical structure for your content and are crucial for accessibility and SEO.
            </p>
            <CodeExample
              title="Proper Heading Hierarchy"
              description="Creating a logical document outline with headings"
              htmlCode={`<article>
  <h1>Complete Guide to Web Accessibility</h1>
  
  <section>
    <h2>Introduction to Accessibility</h2>
    <p>Web accessibility ensures websites work for everyone...</p>
    
    <h3>What is WCAG?</h3>
    <p>WCAG provides guidelines for accessible content...</p>
    
    <h3>Benefits of Accessibility</h3>
    <p>Accessible websites benefit all users...</p>
  </section>
  
  <section>
    <h2>Implementing Accessibility</h2>
    <p>Practical steps to make your website accessible...</p>
    
    <h3>Semantic HTML</h3>
    <p>Using proper HTML elements for meaning...</p>
    
    <h4>Heading Structure</h4>
    <p>Creating logical document outlines...</p>
    
    <h4>Form Labels</h4>
    <p>Properly labeling form controls...</p>
    
    <h3>ARIA Attributes</h3>
    <p>When and how to use ARIA...</p>
  </section>
</article>`}
              explanation="Headings should follow a logical hierarchy without skipping levels. This creates a proper document outline that screen readers can navigate efficiently."
              accessibilityTips={[
                "Don't skip heading levels (don't jump from h2 to h4)",
                "Use only one h1 per page or article",
                "Headings should describe the content that follows",
                "Screen readers use headings for navigation"
              ]}
            />
          </section>

          {/* Paragraphs */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              The &lt;p&gt; Element
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Represents a paragraph of text. Should contain related sentences that form a complete thought.
            </p>
            <CodeExample
              title="Paragraph Usage"
              description="Proper use of paragraph elements for text content"
              htmlCode={`<article>
  <h1>The Importance of Web Standards</h1>
  
  <p>
    Web standards ensure that websites work consistently across different 
    browsers and devices. They provide a common foundation that developers 
    can rely on when building web applications.
  </p>
  
  <p>
    The World Wide Web Consortium (W3C) develops these standards through 
    a collaborative process involving browser manufacturers, developers, 
    and other stakeholders in the web community.
  </p>
  
  <p>
    By following web standards, developers can create websites that are:
  </p>
  
  <ul>
    <li>Accessible to users with disabilities</li>
    <li>Compatible across different browsers</li>
    <li>Maintainable and future-proof</li>
    <li>Optimized for search engines</li>
  </ul>
</article>`}
              explanation="Each paragraph should contain related sentences that form a complete thought. Don't use paragraphs just for spacing - use CSS for visual layout instead."
              accessibilityTips={[
                "Keep paragraphs focused on a single idea",
                "Use proper punctuation for screen reader pauses",
                "Avoid using empty paragraphs for spacing",
                "Consider reading flow and comprehension"
              ]}
            />
          </section>

          {/* Lists */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              List Elements (ul, ol, li)
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Lists organize related items and provide structure that assistive technologies can navigate.
            </p>
            <CodeExample
              title="Different Types of Lists"
              description="Unordered, ordered, and nested lists"
              htmlCode={`<!-- Unordered list for related items -->
<section>
  <h2>Required Skills for Web Development</h2>
  <ul>
    <li>HTML - Structure and semantics</li>
    <li>CSS - Styling and layout</li>
    <li>JavaScript - Interactivity and behavior</li>
    <li>Accessibility - Inclusive design</li>
  </ul>
</section>

<!-- Ordered list for sequential steps -->
<section>
  <h2>Setting Up a Development Environment</h2>
  <ol>
    <li>Install a code editor (VS Code, Sublime Text)</li>
    <li>Set up version control with Git</li>
    <li>Install Node.js for package management</li>
    <li>Configure your build tools</li>
    <li>Test your setup with a simple project</li>
  </ol>
</section>

<!-- Nested lists for hierarchical information -->
<section>
  <h2>Web Development Technologies</h2>
  <ul>
    <li>
      Frontend Technologies
      <ul>
        <li>HTML5</li>
        <li>CSS3
          <ul>
            <li>Grid Layout</li>
            <li>Flexbox</li>
            <li>Custom Properties</li>
          </ul>
        </li>
        <li>JavaScript ES6+</li>
      </ul>
    </li>
    <li>
      Backend Technologies
      <ul>
        <li>Node.js</li>
        <li>Python</li>
        <li>PHP</li>
      </ul>
    </li>
  </ul>
</section>`}
              explanation="Use unordered lists (ul) for related items without a specific order, ordered lists (ol) for sequential steps or ranked items, and nested lists for hierarchical information."
              accessibilityTips={[
                "Screen readers announce list type and item count",
                "Use ordered lists for sequential or ranked content",
                "Nest lists properly with li elements containing the nested list",
                "Consider using description lists for term-definition pairs"
              ]}
            />
          </section>

          {/* Description Lists */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Description Lists (dl, dt, dd)
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Description lists represent name-value groups, perfect for glossaries, metadata, or FAQ sections.
            </p>
            <CodeExample
              title="Description List Examples"
              description="Using description lists for term-definition pairs"
              htmlCode={`<!-- Glossary of terms -->
<section>
  <h2>Web Development Glossary</h2>
  <dl>
    <dt>API</dt>
    <dd>
      Application Programming Interface - a set of protocols and tools 
      for building software applications.
    </dd>
    
    <dt>DOM</dt>
    <dd>
      Document Object Model - a programming interface for HTML documents 
      that represents the page structure as a tree of objects.
    </dd>
    
    <dt>HTTP</dt>
    <dd>
      HyperText Transfer Protocol - the foundation of data communication 
      for the World Wide Web.
    </dd>
    
    <dt>CSS</dt>
    <dd>
      Cascading Style Sheets - a language used to describe the presentation 
      of a document written in HTML.
    </dd>
  </dl>
</section>

<!-- Product specifications -->
<section>
  <h2>Product Details</h2>
  <dl>
    <dt>Brand</dt>
    <dd>Apple</dd>
    
    <dt>Model</dt>
    <dd>MacBook Pro</dd>
    
    <dt>Screen Size</dt>
    <dd>14-inch</dd>
    <dd>16-inch</dd>
    
    <dt>Processor</dt>
    <dd>Apple M3 chip</dd>
    
    <dt>Memory Options</dt>
    <dd>8GB unified memory</dd>
    <dd>16GB unified memory</dd>
    <dd>32GB unified memory</dd>
  </dl>
</section>

<!-- FAQ Section -->
<section>
  <h2>Frequently Asked Questions</h2>
  <dl>
    <dt>How do I reset my password?</dt>
    <dd>
      Click the "Forgot Password" link on the login page, enter your 
      email address, and follow the instructions sent to your email.
    </dd>
    
    <dt>What payment methods do you accept?</dt>
    <dd>We accept Visa, MasterCard, American Express, and PayPal.</dd>
    
    <dt>How long does shipping take?</dt>
    <dd>Standard shipping takes 3-5 business days.</dd>
    <dd>Express shipping takes 1-2 business days.</dd>
  </dl>
</section>`}
              explanation="Description lists are perfect for term-definition pairs. Each dt (definition term) can have multiple dd (definition description) elements, and vice versa."
              accessibilityTips={[
                "Each dt should be followed by one or more dd elements",
                "Group related dt/dd pairs within the same dl element",
                "Screen readers understand the relationship between terms and definitions",
                "Use description lists for glossaries, specifications, and FAQs"
              ]}
            />
          </section>

          {/* Figure and Caption */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Figure and Figcaption Elements
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              The figure element represents self-contained content with an optional caption provided by figcaption.
            </p>
            <CodeExample
              title="Figure with Caption"
              description="Using figure and figcaption for images, code, and other content"
              htmlCode={`<!-- Image with caption -->
<figure>
  <img src="web-accessibility-chart.png" 
       alt="Bar chart showing 15% increase in web accessibility compliance over the past year">
  <figcaption>
    Web accessibility compliance has increased by 15% over the past year, 
    according to WebAIM's annual survey.
  </figcaption>
</figure>

<!-- Code example with caption -->
<figure>
  <pre><code>
function calculateTotal(price, tax) {
  return price + (price * tax);
}

const total = calculateTotal(100, 0.08);
console.log(total); // 108
  </code></pre>
  <figcaption>
    Example of a JavaScript function that calculates the total price 
    including tax.
  </figcaption>
</figure>

<!-- Quote with attribution -->
<figure>
  <blockquote>
    "The best way to find out if you can trust somebody is to trust them."
  </blockquote>
  <figcaption>
    — <cite>Ernest Hemingway</cite>
  </figcaption>
</figure>

<!-- Table with caption -->
<figure>
  <table>
    <caption>Quarterly Sales Report</caption>
    <thead>
      <tr>
        <th>Quarter</th>
        <th>Revenue</th>
        <th>Growth</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Q1 2024</td>
        <td>$125,000</td>
        <td>+12%</td>
      </tr>
      <tr>
        <td>Q2 2024</td>
        <td>$140,000</td>
        <td>+18%</td>
      </tr>
    </tbody>
  </table>
  <figcaption>
    Revenue growth has been consistent throughout 2024, with Q2 showing 
    the highest growth rate.
  </figcaption>
</figure>`}
              explanation="The figure element is used for content that is referenced from the main content but could be moved to another location without affecting the flow. Figcaption provides a caption or legend."
              accessibilityTips={[
                "Use figure for self-contained content like images, charts, code",
                "Figcaption should describe or explain the figure content",
                "Images in figures still need alt text",
                "Screen readers associate captions with their parent figure"
              ]}
            />
          </section>

          {/* Text-level semantics */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Inline Text Elements
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Various elements for marking up different types of text content with semantic meaning.
            </p>
            <CodeExample
              title="Inline Semantic Elements"
              description="Adding meaning to specific text within paragraphs"
              htmlCode={`<article>
  <h1>Web Development Best Practices</h1>
  
  <p>
    When writing <abbr title="Cascading Style Sheets">CSS</abbr>, always 
    use <strong>semantic class names</strong> that describe the content's 
    purpose rather than its appearance. For example, use 
    <code>class="warning-message"</code> instead of 
    <code>class="red-text"</code>.
  </p>
  
  <p>
    <em>Performance optimization</em> is crucial for user experience. 
    The book <cite>"High Performance Web Sites"</cite> by Steve Souders 
    provides excellent guidance on this topic.
  </p>
  
  <p>
    Always validate your HTML using the <a href="https://validator.w3.org/">
    W3C Markup Validator</a>. Press <kbd>Ctrl+Shift+I</kbd> to open 
    developer tools in most browsers.
  </p>
  
  <p>
    <mark>Important:</mark> Never use inline styles in production code. 
    The <code>&lt;style&gt;</code> attribute should be avoided in favor 
    of external stylesheets.
  </p>
  
  <p>
    Web pages should load in under <time datetime="PT3S">3 seconds</time> 
    for optimal user experience. Studies show that users abandon sites 
    that take longer than this to load.
  </p>
  
  <p>
    The formula for calculating viewport width is: 
    <var>viewport-width</var> = <var>device-width</var> × 
    <var>device-pixel-ratio</var>
  </p>
</article>`}
              explanation="Use semantic inline elements to add meaning to specific text: strong for importance, em for emphasis, code for code snippets, kbd for keyboard input, mark for highlighted text, and time for temporal information."
              accessibilityTips={[
                "Use strong and em for semantic emphasis, not b and i",
                "Provide title attributes for abbreviations",
                "Use time element with datetime for machine-readable dates",
                "Code elements help screen readers identify code snippets"
              ]}
            />
          </section>

          {/* Best Practices */}
          <section className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Text Content Best Practices
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Document Structure
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Follow logical heading hierarchy (h1→h2→h3)</li>
                  <li>• Use one h1 per page or article</li>
                  <li>• Keep paragraphs focused on single ideas</li>
                  <li>• Use lists for related items</li>
                  <li>• Provide meaningful alt text for images</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Semantic Markup
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Use strong and em for semantic emphasis</li>
                  <li>• Mark up code with code or pre elements</li>
                  <li>• Use time elements for dates and times</li>
                  <li>• Provide captions for figures and tables</li>
                  <li>• Use description lists for term-definition pairs</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
