import { CodeExample } from "@/components/CodeExample";

export default function CSSFundamentalsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            CSS Fundamentals
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl">
            Master the core CSS specifications that form the foundation of modern web styling. 
            Learn about CSS 2.1, the latest CSS Snapshot, syntax rules, and values & units from official W3C specifications.
          </p>
        </header>

        <div className="space-y-12">
          {/* CSS 2.1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS 2.1 - The Stable Foundation
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              CSS 2.1 is the stable foundation of CSS, containing all features that have been interoperably implemented across browsers.
            </p>
            <CodeExample
              title="CSS 2.1 Core Features"
              description="Essential CSS features from the CSS 2.1 specification"
              htmlCode={`<!-- CSS 2.1 Foundation Examples -->
<div class="css21-demo">
  <header id="header">
    <h1>CSS 2.1 Foundation</h1>
    <p>Demonstrating core CSS 2.1 features</p>
  </header>

  <!-- Basic selectors -->
  <main>
    <section>
      <p>This is a regular paragraph demonstrating element selectors.</p>
      <p class="highlight">This paragraph uses a class selector for highlighting.</p>
      <p>Another paragraph with <span class="highlight">inline highlighting</span>.</p>
    </section>

    <!-- Box model examples -->
    <section>
      <h2>Box Model Examples</h2>
      <div class="box">
        <p>This div demonstrates the CSS box model with width, padding, border, and margin.</p>
      </div>
    </section>

    <!-- Positioning examples -->
    <section>
      <h2>Positioning Examples</h2>
      <div class="positioned">
        <p>This div is positioned relatively from its normal position.</p>
      </div>
      
      <div style="position: relative; height: 200px; border: 1px solid #ccc;">
        <div class="absolute">
          <p>Absolutely positioned element</p>
        </div>
      </div>
    </section>

    <!-- Float examples -->
    <section>
      <h2>Float Layout</h2>
      <div>
        <div class="float-left">
          <p>This content floats to the left, allowing other content to wrap around it.</p>
        </div>
        <p>This text wraps around the floated element, demonstrating the classic CSS 2.1 layout technique that was widely used before flexbox and grid.</p>
        <div class="clear-fix"></div>
      </div>
    </section>

    <!-- Link states -->
    <section>
      <h2>Link States</h2>
      <nav>
        <ul>
          <li><a href="#home">Home (hover me)</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </section>

    <!-- Pseudo-elements and classes -->
    <section>
      <h2>Pseudo-selectors</h2>
      <div class="pseudo-demo">
        <p>First child paragraph</p>
        <p>Second paragraph</p>
        <p>Third paragraph</p>
      </div>
    </section>
  </main>
</div>`}
              cssCode={`/* Basic selectors and properties from CSS 2.1 */
/* Element selector */
p {
  margin: 1em 0;
  color: #333;
  line-height: 1.5;
}

/* Class and ID selectors */
.highlight {
  background-color: #ffff99;
  font-weight: bold;
}

#header {
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
}

/* Pseudo-classes and pseudo-elements */
a:hover {
  text-decoration: underline;
}

a:visited {
  color: purple;
}

p:first-child {
  margin-top: 0;
}

/* The box model */
.box {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  margin: 10px;
  /* Total width = width + padding*2 + border*2 + margin*2 */
}

/* Positioning */
.positioned {
  position: relative;
  top: 10px;
  left: 20px;
}

.absolute {
  position: absolute;
  top: 0;
  right: 0;
}

/* Floats and clear */
.float-left {
  float: left;
  width: 200px;
}

.clear-fix {
  clear: both;
}`}
              explanation="CSS 2.1 established the fundamental concepts of CSS including selectors, the box model, positioning, and floats. These features are universally supported and form the basis for all modern CSS."
              accessibilityTips={[
                "Always provide sufficient color contrast (CSS 2.1 doesn't specify, but WCAG does)",
                "Use semantic markup alongside CSS for better accessibility",
                "Test layouts with zoom up to 200% to ensure readability",
                "Avoid using positioning to hide content from screen readers"
              ]}
            />
          </section>

          {/* CSS Snapshots */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS Snapshots - Current State of CSS
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              CSS Snapshots define the current state of CSS, distinguishing between stable features and experimental ones.
            </p>
            <CodeExample
              title="CSS Snapshot 2024 Features"
              description="Key features included in the CSS Snapshot 2024"
              htmlCode={`<!-- CSS Snapshot 2024 Features Demo -->
<div class="snapshot-demo">
  <header>
    <h1>CSS Snapshot 2024 Features</h1>
    <p>Showcasing stable modern CSS capabilities</p>
  </header>

  <!-- Grid layout -->
  <section class="container">
    <h2>CSS Grid Layout</h2>
    <div class="grid-showcase">
      <article class="card">
        <h3>Grid Item 1</h3>
        <p>Auto-fitting grid layout with custom properties</p>
      </article>
      
      <article class="card">
        <h3>Grid Item 2</h3>
        <p>Responsive without media queries using minmax()</p>
      </article>
      
      <article class="card">
        <h3>Grid Item 3</h3>
        <p>Logical properties for international support</p>
      </article>
    </div>
  </section>

  <!-- Modern color functions -->
  <section>
    <h2>Modern Color Functions</h2>
    <div class="color-samples">
      <div class="color-card hsl-color">
        <h3>HSL Colors</h3>
        <p>Space-separated syntax</p>
      </div>
      
      <div class="color-card css-var">
        <h3>CSS Variables</h3>
        <p>Custom properties in action</p>
      </div>
    </div>
  </section>

  <!-- Modern selectors -->
  <section class="modern-selectors">
    <h2>Advanced Selectors</h2>
    
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
        <span class="error-message">Please enter a valid email</span>
      </div>
      
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>
        <span class="error-message">Password is required</span>
      </div>
    </form>

    <div class="selector-demo">
      <div class="item featured">Featured Item</div>
      <div class="item highlighted">Highlighted Item</div>
      <div class="item">Regular Item</div>
    </div>
  </section>

  <!-- Flexbox examples -->
  <section>
    <h2>Flexbox Layout</h2>
    <div class="flex-container">
      <div class="flex-item">Flex Item 1</div>
      <div class="flex-item">Flex Item 2</div>
      <div class="flex-item">Flex Item 3</div>
    </div>
  </section>

  <!-- Dark mode -->
  <section class="dark-mode-demo">
    <h2>Automatic Dark Mode</h2>
    <div class="theme-card">
      <h3>Adaptive Theme</h3>
      <p>This card automatically adapts to your system's color scheme preference using prefers-color-scheme media query.</p>
    </div>
  </section>

  <!-- Container queries experimental -->
  <section>
    <h2>Container Queries (Experimental)</h2>
    <div class="container-demo">
      <div class="responsive-component">
        <h3>Responsive Component</h3>
        <p>This component changes layout based on its container size, not viewport size.</p>
      </div>
    </div>
  </section>
</div>`}
              cssCode={`/* Modern CSS features in current snapshot */
.container {
  /* Grid Layout (stable) */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  
  /* Custom Properties (stable) */
  --primary-color: #007bff;
  --spacing: 1rem;
  
  /* Logical Properties (stable) */
  padding-inline: var(--spacing);
  margin-block: var(--spacing);
}

.card {
  /* Flexbox (stable) */
  display: flex;
  flex-direction: column;
  
  /* Modern color functions (stable) */
  background-color: hsl(210 50% 95%);
  border: 1px solid hsl(210 20% 85%);
  
  /* Border radius (stable) */
  border-radius: 8px;
  
  /* Box shadow (stable) */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Media queries (stable) */
@media (prefers-color-scheme: dark) {
  .card {
    background-color: hsl(210 20% 15%);
    border-color: hsl(210 20% 25%);
    color: white;
  }
}

/* Modern pseudo-selectors (stable in many browsers) */
.form-group:has(input:invalid) {
  border-color: red;
}

.item:is(.featured, .highlighted) {
  background-color: yellow;
}

/* Container queries (experimental - not in stable snapshot yet) */
@container (min-width: 400px) {
  .responsive-component {
    display: flex;
    flex-direction: row;
  }
}`}
              explanation="CSS Snapshots help developers understand which features are stable for production use versus which are still experimental. The 2024 snapshot includes grid, flexbox, custom properties, and modern selectors."
              accessibilityTips={[
                "Use prefers-color-scheme to respect user's system preferences",
                "Test new CSS features with progressive enhancement",
                "Provide fallbacks for experimental features",
                "Ensure layouts work without JavaScript and advanced CSS"
              ]}
            />
          </section>

          {/* CSS Syntax Level 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS Syntax Level 3
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              CSS Syntax Level 3 defines how CSS is parsed, including error handling, recovery, and the overall grammar of CSS.
            </p>
            <CodeExample
              title="CSS Syntax Rules and Error Handling"
              description="Understanding CSS parsing and syntax requirements"
              htmlCode={`<!-- CSS Syntax Examples -->
<div class="css-syntax-demo">
  <header>
    <h1>CSS Syntax & Error Handling</h1>
    <p>Demonstrating valid CSS patterns and error recovery</p>
  </header>

  <!-- Basic rule structure examples -->
  <section>
    <h2>Basic Selectors</h2>
    <div class="selector-examples">
      <div class="element">Element Selector</div>
      <div class="class-example">Class Selector</div>
      <div id="id-example">ID Selector</div>
      <article class="multiple selector">Multiple Selectors</article>
    </div>
  </section>

  <!-- Nested CSS examples -->
  <nav class="navigation">
    <div class="nav-brand">
      <a href="#" class="brand-link">Brand</a>
    </div>
    <ul class="nav-menu">
      <li class="nav-item">
        <a href="#" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">About</a>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link">Services</a>
        <ul class="dropdown-menu">
          <li><a href="#" class="dropdown-link">Web Design</a></li>
          <li><a href="#" class="dropdown-link">Development</a></li>
        </ul>
      </li>
    </ul>
  </nav>

  <!-- At-rules examples -->
  <section class="responsive-section">
    <div class="responsive">
      <h3>Responsive Content</h3>
      <p>This section uses media queries and supports rules</p>
    </div>
    
    <div class="grid-container">
      <div class="grid-item">Grid Item 1</div>
      <div class="grid-item">Grid Item 2</div>
      <div class="grid-item">Grid Item 3</div>
    </div>
  </section>

  <!-- CSS functions examples -->
  <section class="dynamic-section">
    <h3>Dynamic CSS Functions</h3>
    <div class="dynamic">
      <p>This section demonstrates CSS mathematical and color functions</p>
    </div>
  </section>

  <!-- Error handling examples -->
  <section class="error-examples">
    <h3>Error Handling</h3>
    <div class="invalid">
      <p>This demonstrates CSS error recovery - invalid properties are ignored</p>
    </div>
    
    <div class="also-invalid">
      <p>Invalid values are skipped, valid ones still work</p>
    </div>
    
    <div class="example">
      <p>Well-formed selectors work even after malformed ones</p>
    </div>
  </section>

  <!-- CSS validation examples -->
  <section class="validation-demo">
    <h3>CSS Validation</h3>
    <form class="demo-form">
      <div class="form-group">
        <label for="name">Valid CSS Example</label>
        <input type="text" id="name" name="name">
      </div>
      
      <div class="form-group">
        <label for="email">Error Recovery Demo</label>
        <input type="email" id="email" name="email">
      </div>
      
      <button type="submit">Submit</button>
    </form>
  </section>
</div>`}
              cssCode={`/* Valid CSS syntax examples */

/* 1. Basic rule structure */
selector {
  property: value;
  another-property: another-value;
}

/* 2. Multiple selectors */
h1, h2, h3 {
  font-family: "Helvetica Neue", Arial, sans-serif;
  margin-bottom: 0.5em;
}

/* 3. Nested rules (CSS Nesting) */
.navigation {
  background: white;
  
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  & li {
    display: inline-block;
    
    & a {
      text-decoration: none;
      padding: 1rem;
      
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
}

/* 4. At-rules */
@import url("reset.css");

@media screen and (min-width: 768px) {
  .responsive {
    display: grid;
  }
}

@supports (display: grid) {
  .grid-container {
    display: grid;
  }
}

/* 5. CSS functions */
.dynamic {
  /* Mathematical functions */
  width: calc(100% - 2rem);
  height: clamp(200px, 50vh, 400px);
  
  /* Color functions */
  background: linear-gradient(45deg, 
    hsl(240 100% 50%), 
    hwb(120 10% 10%)
  );
  
  /* Transform functions */
  transform: translate(50%, -50%) rotate(45deg);
}

/* Error handling examples - these will be ignored */
/* Invalid property name - ignored */
.invalid {
  colr: red; /* typo in 'color' */
  color: red; /* this will work */
}

/* Invalid value - ignored */
.also-invalid {
  margin: 10px 20px 30px 40px 50px; /* too many values */
  padding: 1rem; /* this will work */
}

/* Malformed selector - entire rule ignored */
div[class= {
  background: yellow;
}

/* Well-formed rule that follows - will work */
div[class="example"] {
  background: yellow;
}`}
              explanation="CSS Syntax Level 3 ensures that CSS parsers handle errors gracefully by ignoring invalid properties, values, or rules while continuing to process valid CSS."
              accessibilityTips={[
                "Use CSS validation tools to catch syntax errors early",
                "Test CSS with different browsers to ensure consistent parsing",
                "Provide fallback values for experimental properties",
                "Keep CSS organized to make syntax errors easier to spot"
              ]}
            />
          </section>

          {/* CSS Values and Units Level 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS Values and Units Level 4
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              CSS Values and Units Level 4 defines the common values and units used across all CSS specifications, including new viewport units and mathematical functions.
            </p>
            <CodeExample
              title="Modern CSS Values and Units"
              description="New and updated values and units from CSS Values Level 4"
              htmlCode={`<!-- CSS Values and Units Demo -->
<div class="values-units-demo">
  <header>
    <h1>CSS Values & Units Level 4</h1>
    <p>Exploring modern measurement and value systems</p>
  </header>

  <!-- Length units -->
  <section class="lengths">
    <h2>Length Units Showcase</h2>
    <div class="unit-examples">
      <div class="absolute-units">
        <h3>Absolute Units</h3>
        <div class="pixel-box">Pixel border (1px)</div>
        <div class="inch-margin">Inch margin (0.5in)</div>
        <div class="point-padding">Point padding (12pt)</div>
      </div>
      
      <div class="relative-units">
        <h3>Relative Units</h3>
        <div class="em-font">Em font sizing (1.2em)</div>
        <div class="rem-line">Rem line height (1.5rem)</div>
        <div class="percent-width">Percentage width (50%)</div>
      </div>
      
      <div class="viewport-units">
        <h3>Viewport Units</h3>
        <div class="vh-height">Viewport height (100vh)</div>
        <div class="vw-width">Viewport width (100vw)</div>
        <div class="dynamic-vh">Dynamic viewport (100dvh)</div>
        <div class="inline-viewport">Viewport inline (2vi)</div>
        <div class="block-viewport">Viewport block (1vb)</div>
      </div>
      
      <div class="container-units">
        <h3>Container Query Units</h3>
        <div class="cqw-font">Container width font (5cqw)</div>
        <div class="cqh-padding">Container height padding (2cqh)</div>
      </div>
    </div>
  </section>

  <!-- Mathematical functions -->
  <section class="math-functions">
    <h2>Mathematical Functions</h2>
    <div class="math-examples">
      <div class="calc-width">
        <h3>calc() Function</h3>
        <p>Dynamic calculation: calc(100% - 2rem)</p>
      </div>
      
      <div class="min-max-demo">
        <h3>min() and max()</h3>
        <div class="min-width">Min width: min(500px, 100%)</div>
        <div class="max-height">Max height: max(200px, 50vh)</div>
      </div>
      
      <div class="clamp-demo">
        <h3>clamp() Function</h3>
        <p>Responsive text: clamp(1rem, 4vw, 2rem)</p>
        <div class="clamp-padding">Responsive padding: clamp(0.5rem, 2%, 1.5rem)</div>
      </div>
      
      <div class="round-demo">
        <h3>round() Function</h3>
        <div class="round-up">Rounded up: round(up, 101px, 10px)</div>
        <div class="round-zero">Rounded to zero: round(to-zero, 106px, 10px)</div>
      </div>
    </div>
  </section>

  <!-- Color values -->
  <section class="colors">
    <h2>Color Value Systems</h2>
    <div class="color-examples">
      <div class="traditional-colors">
        <h3>Traditional Colors</h3>
        <div class="hex-color">Hex: #ff0000</div>
        <div class="rgb-color">RGB: rgb(255, 0, 0)</div>
        <div class="hsl-color">HSL: hsl(0, 100%, 50%)</div>
      </div>
      
      <div class="modern-colors">
        <h3>Modern Color Formats</h3>
        <div class="hwb-color">HWB: hwb(0 0% 0%)</div>
        <div class="lab-color">LAB: lab(50% 20 -30)</div>
        <div class="lch-color">LCH: lch(50% 40 120)</div>
        <div class="oklch-color">OKLCH: oklch(0.7 0.2 180)</div>
      </div>
      
      <div class="color-mixing">
        <h3>Color Mixing</h3>
        <div class="srgb-mix">SRGB mix: color-mix(in srgb, red 30%, blue)</div>
        <div class="oklch-mix">OKLCH mix: color-mix(in oklch, var(--primary) 60%, white)</div>
      </div>
      
      <div class="relative-colors">
        <h3>Relative Colors</h3>
        <div class="base-color">Base color</div>
        <div class="lighter-color">Lighter variant</div>
      </div>
    </div>
  </section>

  <!-- Global values -->
  <section class="global-values">
    <h2>Global Values</h2>
    <div class="global-examples">
      <div class="inherit-demo">Inherit value</div>
      <div class="initial-demo">Initial value</div>
      <div class="unset-demo">Unset value</div>
      <div class="revert-demo">Revert value</div>
      <div class="revert-layer-demo">Revert-layer value</div>
    </div>
  </section>

  <!-- Custom identifiers -->
  <section class="identifiers">
    <h2>Custom Identifiers & Strings</h2>
    <div class="identifier-examples">
      <div class="grid-area-demo">Grid area: header</div>
      <div class="animation-demo">Animation name: slideIn</div>
      <div class="content-demo">String content: "Hello, World!"</div>
      <div class="font-demo">Font family: "Times New Roman"</div>
    </div>
  </section>
</div>`}
              cssCode={`/* Length units */
.lengths {
  /* Absolute units */
  border-width: 1px;    /* pixels */
  margin: 0.5in;        /* inches */
  padding: 12pt;        /* points */
  
  /* Relative units */
  font-size: 1.2em;     /* relative to parent font size */
  line-height: 1.5rem;  /* relative to root font size */
  width: 50%;           /* percentage of container */
  
  /* Viewport units */
  height: 100vh;        /* viewport height */
  width: 100vw;         /* viewport width */
  min-height: 100dvh;   /* dynamic viewport height */
  padding: 2vi;         /* viewport inline (width in horizontal languages) */
  margin: 1vb;          /* viewport block (height in horizontal languages) */
  
  /* Container query units */
  font-size: 5cqw;      /* 5% of container width */
  padding: 2cqh;        /* 2% of container height */
}

/* Mathematical functions */
.math-functions {
  /* calc() - calculations */
  width: calc(100% - 2rem);
  margin: calc(1rem + 2px);
  
  /* min() and max() */
  width: min(500px, 100%);
  height: max(200px, 50vh);
  
  /* clamp() - constrain between min and max */
  font-size: clamp(1rem, 4vw, 2rem);
  padding: clamp(0.5rem, 2%, 1.5rem);
  
  /* round() - rounding functions */
  width: round(up, 101px, 10px);    /* rounds up to nearest 10px */
  margin: round(to-zero, 106px, 10px); /* rounds toward zero */
}

/* Color values */
.colors {
  /* Traditional color formats */
  color: #ff0000;                    /* hex */
  background: rgb(255, 0, 0);        /* rgb */
  border-color: hsl(0, 100%, 50%);   /* hsl */
  
  /* Modern color formats */
  color: hwb(0 0% 0%);              /* hue, whiteness, blackness */
  background: lab(50% 20 -30);       /* lab color space */
  border-color: lch(50% 40 120);     /* lch (cylindrical lab) */
  outline-color: oklch(0.7 0.2 180); /* oklch (improved lch) */
  
  /* Color mixing */
  background: color-mix(in srgb, red 30%, blue);
  border-color: color-mix(in oklch, var(--primary) 60%, white);
  
  /* Relative colors */
  --primary: oklch(0.7 0.2 180);
  --lighter: oklch(from var(--primary) calc(l * 1.2) c h);
}

/* Global values */
.global-values {
  /* Every property accepts these */
  margin: inherit;      /* inherit from parent */
  padding: initial;     /* use initial value */
  border: unset;        /* inherit if inherited property, initial if not */
  color: revert;        /* revert to user-agent stylesheet */
  background: revert-layer; /* revert to previous cascade layer */
}

/* Custom identifiers and strings */
.identifiers {
  /* Custom identifiers (no quotes) */
  grid-area: header;
  animation-name: slideIn;
  
  /* Strings (with quotes) */
  content: "Hello, World!";
  font-family: "Times New Roman", serif;
}`}
              explanation="CSS Values and Units Level 4 introduces powerful new units for responsive design (container units, dynamic viewport units) and enhanced mathematical functions for flexible layouts."
              accessibilityTips={[
                "Use relative units (rem, em) for better scaling with user preferences",
                "Test viewport units across different devices and orientations",
                "Provide fallbacks for newer units that might not be supported",
                "Use clamp() for responsive typography that scales with viewport"
              ]}
            />
          </section>

          {/* Best Practices */}
          <section className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS Fundamentals Best Practices
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Specification Awareness
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Check CSS Snapshot for stable feature status</li>
                  <li>• Use progressive enhancement for new features</li>
                  <li>• Provide fallbacks for experimental properties</li>
                  <li>• Follow W3C specifications for standard behavior</li>
                  <li>• Validate CSS syntax to catch errors early</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Modern CSS Usage
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Use logical properties for international layouts</li>
                  <li>• Leverage mathematical functions for responsive design</li>
                  <li>• Implement custom properties for maintainable themes</li>
                  <li>• Use modern color spaces for better color accuracy</li>
                  <li>• Test across browsers and devices regularly</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
