import { CodeExample } from "@/components/CodeExample";

export default function SelectorsMediaPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            CSS Selectors & Media Queries
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl">
            Master advanced CSS selectors and responsive design with modern media queries. 
            Learn the latest selector patterns and conditional rules from CSS Selectors Level 4 and Media Queries Level 4.
          </p>
        </header>

        <div className="space-y-12">
          {/* CSS Selectors Level 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS Selectors Level 4
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              CSS Selectors Level 4 introduces powerful new selector patterns including :has(), :is(), :where(), and enhanced pseudo-selectors.
            </p>
            <CodeExample
              title="Advanced Selector Patterns"
              description="Modern selectors from CSS Selectors Level 4 specification"
              htmlCode={`<!-- Basic HTML structure for selector examples -->
<div class="container">
  <header>
    <h1>Advanced CSS Selectors Demo</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Cards with images for :has() selector -->
  <div class="card">
    <img src="image1.jpg" alt="Card with image">
    <h2>Card with Image</h2>
    <p>This card has an image, so it uses grid layout.</p>
  </div>

  <div class="card">
    <h2>Card without Image</h2>
    <p>This card doesn't have an image, so it uses default layout.</p>
  </div>

  <!-- Form validation examples -->
  <form>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>

    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required minlength="8">
    </div>

    <!-- Buttons with different classes -->
    <button type="submit" class="btn primary">Primary Button</button>
    <button type="button" class="btn secondary">Secondary Button</button>
    <button type="button" class="btn">Default Button</button>
  </form>

  <!-- Article with headings and paragraphs -->
  <article class="article">
    <h2>Article Title</h2>
    <p>This article has both headings and paragraphs.</p>
    <p>The :has() selector can detect this combination.</p>
  </article>

  <!-- Interactive elements for focus -->
  <div class="interactive" tabindex="0">
    <p>Interactive element with focus-visible</p>
    
    <div class="nested-interactive" tabindex="0">
      <p>Nested interactive content</p>
    </div>
  </div>

  <!-- Language and direction examples -->
  <div lang="en-US">
    <p>English content with US locale</p>
  </div>
  
  <div lang="en-GB">
    <p>English content with British locale</p>
  </div>
  
  <div dir="rtl">
    <p>Right-to-left text direction</p>
  </div>

  <!-- Nth-child examples with special class -->
  <ul>
    <li class="special">Special item 1</li>
    <li>Regular item 1</li>
    <li class="special">Special item 2</li>
    <li>Regular item 2</li>
    <li class="special">Special item 3</li>
    <li>Regular item 3</li>
  </ul>

  <!-- Case sensitivity examples -->
  <div title="example">Case insensitive match</div>
  <div class="Warning">Case sensitive match</div>
</div>`}
              cssCode={`/* :is() selector - matches any of the given selectors */
:is(h1, h2, h3) {
  font-family: "Helvetica Neue", Arial, sans-serif;
  margin-bottom: 0.5em;
}

:is(.card, .panel) :is(h1, h2, h3) {
  color: var(--heading-color);
}

/* :where() selector - like :is() but with zero specificity */
:where(h1, h2, h3) {
  font-weight: bold;
}

:where(.btn) {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
}

/* :has() selector - parent selector based on children */
.card:has(img) {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
}

.form-group:has(input:invalid) {
  border-color: red;
}

.article:has(h2):has(p) {
  background-color: #f9f9f9;
}

/* :not() selector enhancements - now accepts selector lists */
button:not(.primary, .secondary) {
  background-color: #gray;
}

input:not([type="checkbox"], [type="radio"]) {
  border: 1px solid #ccc;
}

/* Attribute selectors with case sensitivity */
[title="example" i] { /* case-insensitive match */
  color: blue;
}

[class="Warning" s] { /* case-sensitive match */
  color: red;
}

/* Enhanced pseudo-classes */
:nth-child(2n of .special) {
  background-color: yellow;
}

:nth-last-child(3n+1 of li.item) {
  font-weight: bold;
}

/* Language and direction selectors */
:lang(en-US, en-GB) {
  font-family: "Times New Roman", serif;
}

:dir(rtl) {
  text-align: right;
}

/* User interaction selectors */
.interactive:focus-visible {
  outline: 2px solid blue;
}

.interactive:focus-within {
  background-color: #f0f0f0;
}`}
              explanation="CSS Selectors Level 4 provides powerful new ways to select elements, making CSS more expressive and reducing the need for additional classes or JavaScript."
              accessibilityTips={[
                "Use :focus-visible instead of :focus for better keyboard navigation UX",
                "The :has() selector can help create accessible form validation",
                ":focus-within is excellent for accessible dropdown menus",
                "Always test selector support before using in production"
              ]}
            />
          </section>

          {/* Media Queries Level 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Media Queries Level 4
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Media Queries Level 4 extends responsive design with new media features for modern devices and user preferences.
            </p>
            <CodeExample
              title="Enhanced Media Queries"
              description="Modern media query features for responsive and adaptive design"
              htmlCode={`<!-- Responsive layout structure -->
<div class="container">
  <header class="header">
    <h1>Responsive Design Demo</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Responsive grid layout -->
  <main class="responsive-grid">
    <article class="card">
      <h2>Article 1</h2>
      <p>Content that adapts to different screen sizes and user preferences.</p>
    </article>
    
    <article class="card">
      <h2>Article 2</h2>
      <p>This layout responds to viewport width ranges.</p>
    </article>
    
    <article class="card">
      <h2>Article 3</h2>
      <p>Uses modern range syntax for media queries.</p>
    </article>
  </main>

  <!-- Medium layout section -->
  <section class="medium-layout">
    <h2>Medium Screen Layout</h2>
    <p>This section has special styling for medium-sized screens.</p>
  </section>

  <!-- Interactive elements for hover/touch -->
  <div class="interactive-demo">
    <button class="interactive">Hover Me (Desktop)</button>
    <button class="touch-friendly">Touch Friendly Button</button>
    <button class="touch-target">Large Touch Target</button>
    <button class="precise-control">Precise Control Button</button>
  </div>

  <!-- High DPI image examples -->
  <div class="image-gallery">
    <img class="high-dpi-image" src="image.png" alt="High DPI responsive image">
    <img class="regular-image" src="image-regular.png" alt="Regular image">
  </div>

  <!-- Desktop landscape layout -->
  <section class="desktop-landscape">
    <h2>Desktop Landscape Layout</h2>
    <div class="large-or-landscape">
      <div class="column">Column 1</div>
      <div class="column">Column 2</div>
      <div class="column">Column 3</div>
    </div>
  </section>

  <!-- Fine pointer only elements -->
  <div class="fine-pointer-only">
    <p>This content is only visible on devices with precise pointing capability.</p>
  </div>

  <!-- Glass effect for modern browsers -->
  <div class="glass-effect">
    <h3>Glassmorphism Effect</h3>
    <p>Backdrop blur effect for modern browsers.</p>
  </div>

  <!-- Wide color gamut content -->
  <div class="wide-color">
    <p>Wide color gamut content for P3 displays.</p>
  </div>

  <!-- HDR content -->
  <div class="hdr-content">
    <p>High dynamic range content.</p>
  </div>

  <!-- AR overlay for advanced environments -->
  <div class="ar-overlay">
    <p>Augmented reality overlay content.</p>
  </div>
</div>`}
              cssCode={`/* Traditional media queries */
@media screen and (min-width: 768px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* Range syntax - more intuitive */
@media (width >= 768px) {
  .responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (400px <= width <= 800px) {
  .medium-layout {
    padding: 2rem;
  }
}

/* User preference media queries */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

@media (prefers-contrast: high) {
  .button {
    border: 2px solid currentColor;
  }
}

@media (prefers-reduced-transparency: reduce) {
  .glass-effect {
    backdrop-filter: none;
    background-color: solid;
  }
}

/* Display and interaction capabilities */
@media (hover: hover) {
  .interactive:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
  }
}

@media (hover: none) {
  .touch-friendly {
    padding: 1rem; /* Larger touch targets */
  }
}

@media (pointer: coarse) {
  .touch-target {
    min-height: 44px; /* iOS recommended minimum */
    min-width: 44px;
  }
}

@media (pointer: fine) {
  .precise-control {
    cursor: pointer;
  }
}

/* Device capabilities */
@media (resolution >= 2dppx) {
  .high-dpi-image {
    background-image: url('image@2x.png');
  }
}

@media (color-gamut: p3) {
  .wide-color {
    color: color(display-p3 1 0.5 0);
  }
}

@media (dynamic-range: high) {
  .hdr-content {
    color: color(rec2020 1 0.8 0.2);
  }
}

/* Environmental media queries */
@media (environment-blending: additive) {
  .ar-overlay {
    background-color: transparent;
  }
}

/* Complex media queries with logical operators */
@media (width >= 768px) and (height >= 600px) and (orientation: landscape) {
  .desktop-landscape {
    display: flex;
  }
}

@media (width >= 1200px) or (orientation: landscape) {
  .large-or-landscape {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media not (pointer: coarse) {
  .fine-pointer-only {
    display: block;
  }
}`}
              explanation="Media Queries Level 4 enables more sophisticated responsive design by considering user preferences, device capabilities, and environmental factors beyond just screen size."
              accessibilityTips={[
                "Always respect prefers-reduced-motion for users with vestibular disorders",
                "Use prefers-contrast to ensure readability for users who need higher contrast",
                "Test hover and pointer queries to ensure touch device compatibility",
                "Provide fallbacks for newer media query features"
              ]}
            />
          </section>

          {/* CSS Conditional Rules */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS Conditional Rules Level 4
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              CSS Conditional Rules allow testing for feature support and combining multiple conditions for progressive enhancement.
            </p>
            <CodeExample
              title="Feature Detection and Conditional Logic"
              description="Using @supports and conditional rules for robust CSS"
              htmlCode={`<!-- Feature detection layout examples -->
<div class="main-container">
  <!-- Grid vs Flexbox fallback -->
  <section class="layout">
    <div class="item">Grid Item 1</div>
    <div class="item">Grid Item 2</div>
    <div class="item">Grid Item 3</div>
    <div class="item">Grid Item 4</div>
  </section>

  <!-- Modern grid with gap -->
  <section class="modern-grid">
    <article class="grid-card">Modern Grid Card 1</article>
    <article class="grid-card">Modern Grid Card 2</article>
    <article class="grid-card">Modern Grid Card 3</article>
  </section>

  <!-- Glass effect component -->
  <div class="glass-effect">
    <h2>Glassmorphism Card</h2>
    <p>This card uses backdrop-filter when supported.</p>
    <button>Action Button</button>
  </div>

  <!-- CSS Custom Properties example -->
  <div class="component">
    <h3>Themed Component</h3>
    <p>Uses CSS custom properties when supported.</p>
  </div>

  <!-- Container queries example -->
  <div class="container">
    <div class="card">
      <h4>Container Query Card</h4>
      <p>Layout changes based on container size, not viewport size.</p>
    </div>
  </div>

  <!-- Progressive enhancement layout -->
  <section class="flex-fallback">
    <div class="flex-item">Fallback Item 1</div>
    <div class="flex-item">Fallback Item 2</div>
    <div class="flex-item">Fallback Item 3</div>
    <div class="flex-item">Fallback Item 4</div>
  </section>

  <!-- Focus management examples -->
  <div class="focus-demo">
    <button class="focus-button">Focus Visible Button</button>
    <input type="text" class="focus-input" placeholder="Focus visible input">
    <a href="#" class="focus-link">Focus visible link</a>
  </div>

  <!-- Variable font example -->
  <div class="variable-font">
    <h2>Variable Font Typography</h2>
    <p>This text uses variable fonts when supported by the browser.</p>
  </div>

  <!-- Modern color example -->
  <div class="modern-color">
    <p>This uses OKLCH color space when supported.</p>
  </div>

  <!-- Has selector parent detection -->
  <div class="parent">
    <div class="child">Child element present</div>
  </div>

  <div class="parent">
    <p>No child element here</p>
  </div>

  <!-- Responsive grid with @supports -->
  <div class="responsive-grid">
    <div class="grid-item">Responsive Item 1</div>
    <div class="grid-item">Responsive Item 2</div>
    <div class="grid-item">Responsive Item 3</div>
    <div class="grid-item">Responsive Item 4</div>
  </div>
</div>`}
              cssCode={`/* Basic feature detection */
@supports (display: grid) {
  .layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
}

@supports not (display: grid) {
  .layout {
    display: flex;
    flex-wrap: wrap;
  }
  
  .layout > * {
    flex: 1 1 250px;
  }
}

/* Complex support queries */
@supports (display: grid) and (gap: 1rem) {
  .modern-grid {
    display: grid;
    gap: 1rem;
  }
}

@supports (backdrop-filter: blur()) or (-webkit-backdrop-filter: blur()) {
  .glass-effect {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
}

/* CSS Custom Properties support */
@supports (--custom: value) {
  :root {
    --primary-color: #007bff;
    --spacing: 1rem;
  }
  
  .component {
    color: var(--primary-color);
    margin: var(--spacing);
  }
}

/* Modern CSS features */
@supports (container-type: inline-size) {
  .container {
    container-type: inline-size;
  }
  
  @container (min-width: 400px) {
    .card {
      display: flex;
    }
  }
}

@supports selector(:has(*)) {
  .parent:has(.child) {
    background-color: yellow;
  }
}

@supports selector(:where(*)) {
  :where(h1, h2, h3) {
    margin-bottom: 0.5em;
  }
}

/* Combining @supports with @media */
@supports (display: grid) {
  @media (min-width: 768px) {
    .responsive-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
}

/* Progressive enhancement pattern */
.flex-fallback {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* Fallback for older browsers */
}

@supports (display: grid) {
  .flex-fallback {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

/* Selector support detection */
@supports selector(:focus-visible) {
  button:focus-visible {
    outline: 2px solid blue;
    outline-offset: 2px;
  }
  
  button:focus:not(:focus-visible) {
    outline: none;
  }
}

/* Font feature support */
@supports (font-variation-settings: normal) {
  .variable-font {
    font-family: "Inter Variable";
    font-variation-settings: "wght" 400, "slnt" 0;
  }
}

/* Color space support */
@supports (color: oklch(0.7 0.2 180)) {
  .modern-color {
    color: oklch(0.7 0.2 180);
  }
}`}
              explanation="CSS Conditional Rules enable progressive enhancement by allowing you to apply styles only when certain features are supported, ensuring graceful fallbacks."
              accessibilityTips={[
                "Use @supports to provide accessible fallbacks for modern features",
                "Test feature support across different browsers and assistive technologies",
                "Combine @supports with @media for comprehensive responsive design",
                "Always provide usable fallbacks for experimental CSS features"
              ]}
            />
          </section>

          {/* Practical Examples */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Practical Implementation Patterns
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Real-world examples combining advanced selectors, media queries, and feature detection for robust web design.
            </p>
            <CodeExample
              title="Complete Responsive Component"
              description="A practical example combining selectors, media queries, and feature detection"
              htmlCode={`<!-- Complete responsive component example -->
<div class="page-layout">
  <!-- Card container with progressive enhancement -->
  <section class="card-container">
    <!-- Cards with headers -->
    <article class="card" data-theme="light">
      <header class="card-header">
        <h2>Featured Article</h2>
        <span class="card-badge">New</span>
      </header>
      <div class="card-content">
        <p>This is a featured article with enhanced styling due to having a header.</p>
        <p>The card layout adapts based on browser capabilities.</p>
      </div>
      <footer class="card-footer">
        <button class="card-button">Read More</button>
      </footer>
    </article>

    <!-- Card without header -->
    <article class="card" data-theme="light">
      <div class="card-content">
        <h3>Simple Article</h3>
        <p>This card doesn't have a header, so it uses different padding.</p>
      </div>
      <footer class="card-footer">
        <button class="card-button">Learn More</button>
      </footer>
    </article>

    <!-- Dark themed card -->
    <article class="card" data-theme="dark">
      <header class="card-header">
        <h2>Dark Theme Card</h2>
        <span class="card-badge">Premium</span>
      </header>
      <div class="card-content">
        <p>This card demonstrates dark theme variables.</p>
      </div>
      <footer class="card-footer">
        <button class="card-button">Explore</button>
      </footer>
    </article>
  </section>

  <!-- Form validation examples -->
  <section class="form-section">
    <h2>Form Validation Demo</h2>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required minlength="3">
        <span class="error-message">Username must be at least 3 characters</span>
        <span class="success-icon">✓</span>
      </div>

      <div class="form-group">
        <label for="email-field">Email</label>
        <input type="email" id="email-field" name="email" required>
        <span class="error-message">Please enter a valid email</span>
        <span class="success-icon">✓</span>
      </div>

      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
        <span class="error-message">Format: 123-456-7890</span>
        <span class="success-icon">✓</span>
      </div>

      <button type="submit">Submit Form</button>
    </form>
  </section>

  <!-- High contrast and accessibility -->
  <section class="accessibility-demo">
    <h2>Accessibility Features</h2>
    <p>This section demonstrates high contrast mode support.</p>
    
    <div class="button-group">
      <button class="primary-button">Primary Action</button>
      <button class="secondary-button">Secondary Action</button>
    </div>
  </section>

  <!-- Touch-friendly elements -->
  <section class="touch-demo">
    <h2>Touch-Friendly Controls</h2>
    <div class="control-grid">
      <button class="touch-button">Large Touch Target</button>
      <button class="touch-button">Another Button</button>
      <button class="touch-button">Third Button</button>
    </div>
  </section>

  <!-- High DPI icons -->
  <section class="icon-demo">
    <h2>High DPI Icons</h2>
    <div class="icon-grid">
      <div class="card-icon" aria-label="Settings"></div>
      <div class="card-icon" aria-label="Profile"></div>
      <div class="card-icon" aria-label="Messages"></div>
    </div>
  </section>
</div>`}
              cssCode={`/* Component with progressive enhancement */
.card {
  /* Base styles for all browsers */
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: white;
}

/* Enhanced styles with feature detection */
@supports (display: grid) {
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
}

@supports not (display: grid) {
  .card-container {
    display: flex;
    flex-wrap: wrap;
    margin: -0.5rem;
  }
  
  .card {
    margin: 0.5rem;
    flex: 1 1 300px;
  }
}

/* Media queries with range syntax */
@media (width >= 768px) {
  .card {
    padding: 1.5rem;
  }
}

@media (width >= 1200px) {
  .card {
    padding: 2rem;
  }
}

/* User preference adaptations */
@media (prefers-color-scheme: dark) {
  .card {
    background-color: #1a202c;
    border-color: #2d3748;
    color: white;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
}

/* Interactive enhancements */
@media (hover: hover) {
  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
}

/* Advanced selectors for state management */
.card:has(.card-header) {
  padding-top: 0;
}

.card:has(.card-header) .card-content {
  padding-top: 1rem;
}

.form-group:has(input:invalid) .error-message {
  display: block;
  color: #e53e3e;
}

.form-group:has(input:valid) .success-icon {
  display: inline-block;
  color: #38a169;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .card {
    border-width: 2px;
    border-color: CanvasText;
  }
}

/* Touch-friendly sizing */
@media (pointer: coarse) {
  .card button {
    min-height: 44px;
    min-width: 44px;
    padding: 0.75rem 1.5rem;
  }
}

/* High DPI display optimization */
@media (resolution >= 2dppx) {
  .card-icon {
    background-image: url('icon@2x.png');
    background-size: 24px 24px;
  }
}`}
              explanation="This example demonstrates how to combine modern CSS features with progressive enhancement, ensuring your components work well across all browsers and user preferences."
              accessibilityTips={[
                "Always provide base styles that work without modern CSS features",
                "Test with high contrast mode and screen readers",
                "Ensure interactive elements meet minimum size requirements",
                "Respect user motion preferences for inclusive design"
              ]}
            />
          </section>

          {/* Best Practices */}
          <section className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Selectors & Media Queries Best Practices
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Advanced Selectors
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Use :is() and :where() to reduce CSS repetition</li>
                  <li>• Test :has() selector support before production use</li>
                  <li>• Prefer :focus-visible over :focus for better UX</li>
                  <li>• Use logical selectors with fallback classes</li>
                  <li>• Test selector performance with large DOM trees</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Responsive Design
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Always respect user preferences (motion, contrast)</li>
                  <li>• Use range syntax for more readable media queries</li>
                  <li>• Test hover and pointer capabilities for touch devices</li>
                  <li>• Combine @media with @supports for robust design</li>
                  <li>• Provide meaningful fallbacks for all features</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
