import { CodeExample } from "@/components/CodeExample";

export default function ModernCSSPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Modern CSS Features
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl">
            Explore cutting-edge CSS features including Custom Properties (CSS Variables), Container Queries, 
            CSS Nesting, and View Transitions. Master the latest specifications that are shaping the future of web styling.
          </p>
        </header>

        <div className="space-y-12">
          {/* CSS Custom Properties */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS Custom Properties Level 1
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              CSS Custom Properties (CSS Variables) enable dynamic styling with reusable values and theming capabilities.
            </p>
            <CodeExample
              title="Advanced CSS Custom Properties"
              description="Dynamic theming and variable usage patterns"
              htmlCode={`<!-- CSS Custom Properties Demo -->
<div class="theme-demo">
  <header>
    <h1>CSS Custom Properties Demo</h1>
    <div class="theme-switcher">
      <button onclick="document.documentElement.style.setProperty('--primary-hue', '210')">Blue Theme</button>
      <button onclick="document.documentElement.style.setProperty('--primary-hue', '120')">Green Theme</button>
      <button onclick="document.documentElement.style.setProperty('--primary-hue', '0')">Red Theme</button>
    </div>
  </header>

  <!-- Cards with different themes -->
  <section class="card-grid">
    <article class="card" data-theme="light">
      <h2>Light Theme Card</h2>
      <p>This card uses light theme variables for consistent styling.</p>
      <button class="button">Primary Button</button>
      <button class="button filled">Filled Button</button>
    </article>

    <article class="card" data-theme="dark">
      <h2>Dark Theme Card</h2>
      <p>This card automatically switches to dark theme variables.</p>
      <button class="button">Primary Button</button>
      <button class="button filled">Filled Button</button>
    </article>
  </section>

  <!-- Color system demonstration -->
  <section class="color-system">
    <h2>Dynamic Color System</h2>
    <div class="color-palette">
      <div class="color-swatch" style="background: var(--color-primary-50)">50</div>
      <div class="color-swatch" style="background: var(--color-primary-100)">100</div>
      <div class="color-swatch" style="background: var(--color-primary-200)">200</div>
      <div class="color-swatch" style="background: var(--color-primary-300)">300</div>
      <div class="color-swatch" style="background: var(--color-primary-400)">400</div>
      <div class="color-swatch" style="background: var(--color-primary-500)">500</div>
      <div class="color-swatch" style="background: var(--color-primary-600)">600</div>
      <div class="color-swatch" style="background: var(--color-primary-700)">700</div>
      <div class="color-swatch" style="background: var(--color-primary-800)">800</div>
      <div class="color-swatch" style="background: var(--color-primary-900)">900</div>
    </div>
  </section>

  <!-- Fallback examples -->
  <section class="fallback-example">
    <h2>Fallback Values</h2>
    <p>This section demonstrates fallback values for unsupported properties.</p>
  </section>

  <!-- Responsive grid with variables -->
  <section class="responsive-grid">
    <div class="grid-item">Grid Item 1</div>
    <div class="grid-item">Grid Item 2</div>
    <div class="grid-item">Grid Item 3</div>
    <div class="grid-item">Grid Item 4</div>
    <div class="grid-item">Grid Item 5</div>
    <div class="grid-item">Grid Item 6</div>
  </section>

  <!-- Animation with custom properties -->
  <section class="animation-demo">
    <h2>Custom Property Animations</h2>
    <div class="pulse-animation">
      <p>This element uses custom properties in its animation.</p>
    </div>
  </section>

  <!-- Button variations -->
  <section class="button-variations">
    <h2>Context-Aware Buttons</h2>
    <div class="button-group">
      <button class="button">Default</button>
      <button class="button filled">Filled</button>
      <button class="button danger">Danger</button>
      <button class="button danger filled">Danger Filled</button>
    </div>
  </section>
</div>`}
              cssCode={`/* Global custom properties */
:root {
  /* Color palette */
  --primary-hue: 210;
  --primary-saturation: 100%;
  --primary-lightness: 50%;
  --primary: hsl(var(--primary-hue), var(--primary-saturation), var(--primary-lightness));
  
  /* Derived colors */
  --primary-light: hsl(var(--primary-hue), var(--primary-saturation), 75%);
  --primary-dark: hsl(var(--primary-hue), var(--primary-saturation), 25%);
  
  /* Typography scale */
  --font-size-base: 1rem;
  --font-size-sm: calc(var(--font-size-base) * 0.875);
  --font-size-lg: calc(var(--font-size-base) * 1.125);
  --font-size-xl: calc(var(--font-size-base) * 1.25);
  --font-size-2xl: calc(var(--font-size-base) * 1.5);
  
  /* Spacing scale */
  --space-unit: 0.25rem;
  --space-xs: calc(var(--space-unit) * 1);  /* 4px */
  --space-sm: calc(var(--space-unit) * 2);  /* 8px */
  --space-md: calc(var(--space-unit) * 4);  /* 16px */
  --space-lg: calc(var(--space-unit) * 6);  /* 24px */
  --space-xl: calc(var(--space-unit) * 8);  /* 32px */
  
  /* Responsive values */
  --container-max-width: min(100% - 2rem, 1200px);
  --grid-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
}

/* Component-scoped variables */
.card {
  --card-bg: white;
  --card-border: #e2e8f0;
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --card-radius: 8px;
  --card-padding: var(--space-lg);
  
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  padding: var(--card-padding);
}

/* Dark theme override */
.card[data-theme="dark"] {
  --card-bg: #1a202c;
  --card-border: #2d3748;
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

/* Dynamic color system */
.color-system {
  /* Base color values */
  --color-primary-h: 210;
  --color-primary-s: 100%;
  --color-primary-l: 50%;
  
  /* Generate color scale */
  --color-primary-50: hsl(var(--color-primary-h), var(--color-primary-s), 95%);
  --color-primary-100: hsl(var(--color-primary-h), var(--color-primary-s), 90%);
  --color-primary-200: hsl(var(--color-primary-h), var(--color-primary-s), 80%);
  --color-primary-300: hsl(var(--color-primary-h), var(--color-primary-s), 70%);
  --color-primary-400: hsl(var(--color-primary-h), var(--color-primary-s), 60%);
  --color-primary-500: hsl(var(--color-primary-h), var(--color-primary-s), 50%);
  --color-primary-600: hsl(var(--color-primary-h), var(--color-primary-s), 40%);
  --color-primary-700: hsl(var(--color-primary-h), var(--color-primary-s), 30%);
  --color-primary-800: hsl(var(--color-primary-h), var(--color-primary-s), 20%);
  --color-primary-900: hsl(var(--color-primary-h), var(--color-primary-s), 10%);
}

/* Fallback values and validation */
.fallback-example {
  /* Provide fallbacks for unsupported properties */
  background: blue; /* Fallback */
  background: var(--primary-color, blue); /* With fallback */
  
  /* Check if variable is defined */
  color: var(--text-color, inherit);
  
  /* Nested fallbacks */
  font-family: var(--font-primary, var(--font-fallback, system-ui));
}

/* CSS custom properties with calculations */
.responsive-grid {
  --min-column-width: 250px;
  --gap: 1rem;
  --columns: var(--grid-columns, 3);
  
  display: grid;
  grid-template-columns: repeat(
    auto-fit, 
    minmax(var(--min-column-width), 1fr)
  );
  gap: var(--gap);
  padding: var(--gap);
}

/* Animation with custom properties */
@keyframes pulse-custom {
  0%, 100% {
    transform: scale(var(--pulse-scale-min, 1));
    opacity: var(--pulse-opacity-min, 1);
  }
  50% {
    transform: scale(var(--pulse-scale-max, 1.1));
    opacity: var(--pulse-opacity-max, 0.7);
  }
}

.pulse-animation {
  --pulse-scale-min: 0.95;
  --pulse-scale-max: 1.05;
  --pulse-opacity-min: 0.8;
  --pulse-opacity-max: 1;
  
  animation: pulse-custom 2s ease-in-out infinite;
}

/* Context-aware variables */
.button {
  --button-color: var(--primary);
  --button-bg: transparent;
  --button-border: var(--button-color);
  
  color: var(--button-color);
  background: var(--button-bg);
  border: 2px solid var(--button-border);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm, 4px);
  cursor: pointer;
  transition: all 0.2s ease;
}

.button.filled {
  --button-color: white;
  --button-bg: var(--primary);
}

.button.danger {
  --button-color: #dc3545;
  --button-bg: transparent;
  --button-border: #dc3545;
}

.button.danger.filled {
  --button-color: white;
  --button-bg: #dc3545;
}`}
              explanation="CSS Custom Properties provide a powerful way to create maintainable, themeable CSS with dynamic values that can be modified at runtime."
              accessibilityTips={[
                "Use custom properties for consistent spacing and typography scales",
                "Create theme systems that work with user preferences",
                "Provide meaningful fallback values for better browser support",
                "Test custom property inheritance in complex component structures"
              ]}
            />
          </section>

          {/* Container Queries */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS Container Queries Level 1
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Container Queries enable responsive design based on the size of containing elements, not just the viewport.
            </p>
            <CodeExample
              title="Container-Based Responsive Design"
              description="Style components based on their container size"
              htmlCode={`<!-- Container Query Examples -->
<div class="page-layout">
  <!-- Main content area -->
  <main class="main-content">
    <h1>Container Queries Demo</h1>
    
    <!-- Card container that changes layout based on its size -->
    <div class="card-container">
      <article class="responsive-card">
        <img src="card-image.jpg" alt="Card image" class="card-image">
        <div class="card-content">
          <h2>Responsive Card Title</h2>
          <p>This card layout changes based on the container width, not the viewport width.</p>
          <button class="card-button">Learn More</button>
        </div>
      </article>
      
      <article class="responsive-card">
        <img src="card-image2.jpg" alt="Card image" class="card-image">
        <div class="card-content">
          <h2>Another Card</h2>
          <p>When the container is narrow, cards stack vertically. When wider, they display horizontally.</p>
          <button class="card-button">Read More</button>
        </div>
      </article>
    </div>
  </main>

  <!-- Sidebar with different container size -->
  <aside class="sidebar">
    <h2>Sidebar Content</h2>
    
    <!-- Same card component, different container -->
    <div class="sidebar-card-container">
      <article class="responsive-card">
        <img src="sidebar-card.jpg" alt="Sidebar card" class="card-image">
        <div class="card-content">
          <h3>Sidebar Card</h3>
          <p>This uses the same component but adapts to the sidebar's narrower width.</p>
          <button class="card-button">View</button>
        </div>
      </article>
    </div>

    <!-- Widget container -->
    <div class="widget-container">
      <div class="widget">
        <h3>Weather Widget</h3>
        <div class="widget-content">
          <div class="temperature">72°F</div>
          <div class="condition">Sunny</div>
          <div class="details">Humidity: 45%</div>
        </div>
      </div>
    </div>
  </aside>

  <!-- Navigation that adapts to container -->
  <nav class="adaptive-nav">
    <div class="nav-container">
      <ul class="nav-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- Product grid that adapts -->
  <section class="product-section">
    <div class="product-grid">
      <div class="product-item">
        <img src="product1.jpg" alt="Product 1">
        <h3>Product 1</h3>
        <p class="price">$29.99</p>
      </div>
      <div class="product-item">
        <img src="product2.jpg" alt="Product 2">
        <h3>Product 2</h3>
        <p class="price">$39.99</p>
      </div>
      <div class="product-item">
        <img src="product3.jpg" alt="Product 3">
        <h3>Product 3</h3>
        <p class="price">$19.99</p>
      </div>
    </div>
  </section>
</div>`}
              cssCode={`/* Define container context */
.card-container {
  container-type: inline-size;     /* Enable container queries on width */
  container-name: card;            /* Optional: name the container */
}

.sidebar {
  container-type: size;            /* Enable on both width and height */
  container-name: sidebar;
}

/* Container queries based on width */
.responsive-card {
  padding: 1rem;
  background: white;
  border-radius: 8px;
}

@container (min-width: 300px) {
  .responsive-card {
    padding: 1.5rem;
    display: flex;
    gap: 1rem;
  }
  
  .card-content {
    flex: 1;
  }
}

@container (min-width: 500px) {
  .responsive-card {
    padding: 2rem;
  }
  
  .card-title {
    font-size: 1.5rem;
  }
  
  .card-image {
    width: 200px;
    height: 150px;
  }
}

/* Named container queries */
@container card (min-width: 400px) {
  .card-layout {
    grid-template-columns: 200px 1fr;
    grid-template-areas: 
      "image title"
      "image content"
      "image actions";
  }
}

@container sidebar (max-width: 250px) {
  .nav-item {
    text-align: center;
  }
  
  .nav-text {
    display: none;
  }
  
  .nav-icon {
    font-size: 1.5rem;
  }
}

/* Complex container queries */
.product-grid {
  container-type: inline-size;
  display: grid;
  gap: 1rem;
}

.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

/* Different layouts based on container width */
@container (min-width: 200px) and (max-width: 300px) {
  .product-card {
    /* Compact layout */
    display: flex;
    flex-direction: column;
  }
  
  .product-image {
    height: 120px;
    object-fit: cover;
  }
  
  .product-title {
    font-size: 0.9rem;
    line-height: 1.3;
  }
}

@container (min-width: 301px) and (max-width: 450px) {
  .product-card {
    /* Horizontal layout */
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "image title"
      "image price"
      "image actions";
  }
  
  .product-image {
    grid-area: image;
    height: 100px;
  }
}

@container (min-width: 451px) {
  .product-card {
    /* Full layout */
    display: flex;
    flex-direction: column;
  }
  
  .product-image {
    height: 200px;
  }
  
  .product-content {
    padding: 1.5rem;
  }
}

/* Container query units */
.container-units {
  container-type: size;
  padding: 1rem;
}

@container (min-width: 400px) {
  .fluid-typography {
    /* Container query units */
    font-size: 5cqw;      /* 5% of container width */
    line-height: 1cqh;    /* 1% of container height */
    margin: 2cqi;         /* 2% of container inline size */
    padding: 1cqb;        /* 1% of container block size */
  }
}

/* Nested containers */
.main-container {
  container-type: inline-size;
  container-name: main;
}

.nested-container {
  container-type: inline-size;
  container-name: nested;
}

@container main (min-width: 800px) {
  .main-layout {
    display: grid;
    grid-template-columns: 1fr 300px;
  }
}

@container nested (min-width: 250px) {
  .nested-component {
    flex-direction: row;
  }
}

/* Practical component example */
.media-object {
  container-type: inline-size;
  container-name: media;
}

.media-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@container media (min-width: 300px) {
  .media-content {
    flex-direction: row;
    align-items: flex-start;
  }
  
  .media-figure {
    flex: 0 0 100px;
  }
  
  .media-body {
    flex: 1;
  }
}

@container media (min-width: 500px) {
  .media-figure {
    flex: 0 0 150px;
  }
  
  .media-title {
    font-size: 1.25rem;
  }
}

/* Form responsive behavior */
.form-container {
  container-type: inline-size;
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@container (min-width: 400px) {
  .form-row {
    flex-direction: row;
  }
  
  .form-field {
    flex: 1;
  }
  
  .form-field.short {
    flex: 0 0 100px;
  }
}

/* Dashboard widgets */
.widget {
  container-type: size;
  background: white;
  border-radius: 8px;
  padding: 1rem;
}

@container (min-width: 200px) and (min-height: 150px) {
  .widget-chart {
    display: block;
    height: 100px;
  }
}

@container (min-width: 300px) and (min-height: 200px) {
  .widget {
    padding: 1.5rem;
  }
  
  .widget-chart {
    height: 150px;
  }
  
  .widget-legend {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
}`}
              explanation="Container Queries revolutionize responsive design by allowing components to respond to their container size rather than the viewport, enabling truly modular responsive components."
              accessibilityTips={[
                "Ensure content remains readable at all container sizes",
                "Test container queries with zoom levels up to 200%",
                "Provide fallback styles for browsers without container query support",
                "Consider keyboard navigation flow when layouts change"
              ]}
            />
          </section>

          {/* CSS Nesting */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS Nesting
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              CSS Nesting allows writing nested CSS rules for better organization and maintainability, similar to preprocessors like Sass.
            </p>
            <CodeExample
              title="Native CSS Nesting"
              description="Organize CSS with nested rules and selectors"
              htmlCode={`<!-- CSS Nesting Examples -->
<div class="app">
  <!-- Navigation component -->
  <nav class="navigation">
    <div class="nav-brand">
      <a href="#" class="brand-link">MyApp</a>
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
          <li><a href="#" class="dropdown-link">Consulting</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Contact</a>
      </li>
    </ul>
  </nav>

  <!-- Card components -->
  <main class="content">
    <section class="card-section">
      <article class="card">
        <header class="card-header">
          <h2>Featured Article</h2>
          <span class="badge primary">New</span>
        </header>
        <div class="card-body">
          <p>This demonstrates CSS nesting with component organization.</p>
          <div class="card-actions">
            <button class="btn primary">Read More</button>
            <button class="btn secondary">Share</button>
          </div>
        </div>
      </article>

      <article class="card featured">
        <header class="card-header">
          <h2>Premium Content</h2>
          <span class="badge premium">Pro</span>
        </header>
        <div class="card-body">
          <p>Featured cards have special styling through nested selectors.</p>
          <div class="card-actions">
            <button class="btn primary">Upgrade</button>
            <button class="btn secondary">Learn More</button>
          </div>
        </div>
      </article>
    </section>

    <!-- Form with nested styling -->
    <section class="form-section">
      <form class="form">
        <h2>Contact Form</h2>
        
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn primary">Send Message</button>
          <button type="reset" class="btn secondary">Reset</button>
        </div>
      </form>
    </section>

    <!-- Complex component with deep nesting -->
    <section class="dashboard">
      <div class="dashboard-header">
        <h2>Dashboard</h2>
        <div class="header-actions">
          <button class="btn icon">⚙️</button>
          <button class="btn icon">📊</button>
        </div>
      </div>

      <div class="dashboard-grid">
        <div class="widget analytics">
          <div class="widget-header">
            <h3>Analytics</h3>
            <span class="widget-status active">Live</span>
          </div>
          <div class="widget-content">
            <div class="metric">
              <span class="metric-value">1,234</span>
              <span class="metric-label">Visitors</span>
            </div>
          </div>
        </div>

        <div class="widget sales">
          <div class="widget-header">
            <h3>Sales</h3>
            <span class="widget-status">Updated</span>
          </div>
          <div class="widget-content">
            <div class="metric">
              <span class="metric-value">$5,678</span>
              <span class="metric-label">Revenue</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>`}
              cssCode={`/* Basic nesting with & selector */
.button {
  background: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  /* Nested pseudo-classes */
  &:hover {
    background: #2980b9;
    transform: translateY(-1px);
  }
  
  &:active {
    background: #21618c;
    transform: translateY(0);
  }
  
  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
    transform: none;
  }
  
  /* Nested modifiers */
  &.large {
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
  }
  
  &.small {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }
  
  /* Nested variants */
  &.secondary {
    background: transparent;
    color: #3498db;
    border: 1px solid #3498db;
    
    &:hover {
      background: #3498db;
      color: white;
    }
  }
}

/* Component with nested elements */
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  /* Nested child elements */
  .card-header {
    padding: 1rem;
    border-bottom: 1px solid #e2e8f0;
    background: #f8f9fa;
    
    .card-title {
      margin: 0;
      font-size: 1.25rem;
      color: #2c3e50;
    }
    
    .card-subtitle {
      margin: 0.25rem 0 0 0;
      color: #6c757d;
      font-size: 0.875rem;
    }
  }
  
  .card-body {
    padding: 1rem;
    
    p {
      margin-bottom: 1rem;
      line-height: 1.6;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    .highlight {
      background: #fff3cd;
      padding: 0.125rem 0.25rem;
      border-radius: 3px;
    }
  }
  
  .card-footer {
    padding: 1rem;
    border-top: 1px solid #e2e8f0;
    background: #f8f9fa;
    
    .actions {
      display: flex;
      gap: 0.5rem;
      justify-content: flex-end;
    }
  }
}

/* Navigation component with nesting */
.navigation {
  background: #2c3e50;
  
  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    
    .nav-item {
      position: relative;
      
      .nav-link {
        display: block;
        padding: 1rem;
        color: white;
        text-decoration: none;
        transition: background-color 0.2s ease;
        
        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        &.active {
          background: #3498db;
          
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border: 6px solid transparent;
            border-bottom-color: white;
          }
        }
      }
      
      /* Dropdown menu */
      .dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        background: white;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: all 0.2s ease;
        
        .dropdown-item {
          display: block;
          padding: 0.75rem 1rem;
          color: #2c3e50;
          text-decoration: none;
          white-space: nowrap;
          
          &:hover {
            background: #f8f9fa;
          }
        }
      }
      
      &:hover .dropdown {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
    }
  }
}

/* Media queries with nesting */
.responsive-component {
  padding: 1rem;
  background: white;
  
  .title {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  
  .content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  /* Nested media queries */
  @media (min-width: 768px) {
    padding: 2rem;
    
    .title {
      font-size: 1.5rem;
    }
    
    .content {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
  
  @media (min-width: 1024px) {
    padding: 3rem;
    
    .content {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

/* Form styling with nesting */
.form {
  max-width: 600px;
  margin: 0 auto;
  
  .form-group {
    margin-bottom: 1.5rem;
    
    .form-label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #374151;
    }
    
    .form-input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      font-size: 1rem;
      
      &:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      }
      
      &.error {
        border-color: #ef4444;
        
        &:focus {
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }
      }
      
      &::placeholder {
        color: #9ca3af;
      }
    }
    
    .form-error {
      display: block;
      margin-top: 0.25rem;
      font-size: 0.875rem;
      color: #ef4444;
    }
    
    &.required .form-label::after {
      content: ' *';
      color: #ef4444;
    }
  }
}

/* Utility classes with nesting */
.utilities {
  /* Text utilities */
  .text-center { text-align: center; }
  .text-left { text-align: left; }
  .text-right { text-align: right; }
  
  /* Responsive text alignment */
  @media (min-width: 768px) {
    .md\\:text-left { text-align: left; }
    .md\\:text-center { text-align: center; }
    .md\\:text-right { text-align: right; }
  }
  
  /* Display utilities */
  .hidden { display: none; }
  .block { display: block; }
  .flex { display: flex; }
  .grid { display: grid; }
  
  /* Responsive display */
  @media (min-width: 768px) {
    .md\\:block { display: block; }
    .md\\:flex { display: flex; }
    .md\\:hidden { display: none; }
  }
}`}
              explanation="CSS Nesting provides a more organized way to write CSS by allowing nested rules, reducing repetition and improving maintainability."
              accessibilityTips={[
                "Keep nesting levels reasonable (max 3-4 levels) for maintainability",
                "Ensure nested selectors don't become overly specific",
                "Test that nested styles don't interfere with component reusability",
                "Use nesting to organize related styles logically"
              ]}
            />
          </section>

          {/* View Transitions */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS View Transitions Level 1
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              View Transitions provide smooth animations when content changes or pages navigate, creating seamless user experiences.
            </p>
            <CodeExample
              title="Smooth View Transitions"
              description="Create seamless transitions when content or pages change"
              htmlCode={`<!-- View Transitions Demo -->
<div class="app-container">
  <!-- Navigation for page transitions -->
  <nav class="main-nav">
    <h1 class="app-title">View Transitions Demo</h1>
    <ul class="nav-list">
      <li><a href="#page1" class="nav-link" onclick="transitionToPage('page1')">Home</a></li>
      <li><a href="#page2" class="nav-link" onclick="transitionToPage('page2')">Gallery</a></li>
      <li><a href="#page3" class="nav-link" onclick="transitionToPage('page3')">About</a></li>
    </ul>
  </nav>

  <!-- Page 1 - Home -->
  <main id="page1" class="page active">
    <header class="page-header">
      <h2 class="page-title">Welcome Home</h2>
      <p class="page-subtitle">Experience smooth view transitions</p>
    </header>

    <section class="hero">
      <div class="hero-content">
        <h3>Featured Content</h3>
        <p>This content smoothly transitions between views.</p>
        <button class="cta-button" onclick="transitionToPage('page2')">View Gallery</button>
      </div>
      <div class="hero-image">
        <img src="hero.jpg" alt="Hero image" class="shared-image">
      </div>
    </section>

    <section class="cards">
      <div class="card">
        <h4>Card 1</h4>
        <p>Content that animates during transitions.</p>
      </div>
      <div class="card">
        <h4>Card 2</h4>
        <p>Smooth morphing between states.</p>
      </div>
    </section>
  </main>

  <!-- Page 2 - Gallery -->
  <main id="page2" class="page">
    <header class="page-header">
      <h2 class="page-title">Image Gallery</h2>
      <p class="page-subtitle">Beautiful transitions between images</p>
    </header>

    <section class="gallery">
      <div class="gallery-grid">
        <div class="gallery-item" onclick="openModal('img1')">
          <img src="gallery1.jpg" alt="Gallery image 1" class="gallery-image">
        </div>
        <div class="gallery-item" onclick="openModal('img2')">
          <img src="gallery2.jpg" alt="Gallery image 2" class="gallery-image">
        </div>
        <div class="gallery-item" onclick="openModal('img3')">
          <img src="gallery3.jpg" alt="Gallery image 3" class="gallery-image">
        </div>
        <div class="gallery-item" onclick="openModal('img4')">
          <img src="gallery4.jpg" alt="Gallery image 4" class="gallery-image">
        </div>
      </div>
    </section>

    <button class="back-button" onclick="transitionToPage('page1')">Back to Home</button>
  </main>

  <!-- Page 3 - About -->
  <main id="page3" class="page">
    <header class="page-header">
      <h2 class="page-title">About Us</h2>
      <p class="page-subtitle">Learn about view transitions</p>
    </header>

    <section class="about-content">
      <div class="about-text">
        <h3>View Transitions API</h3>
        <p>The View Transitions API enables smooth, animated transitions between different views or states in a web application.</p>
        
        <div class="feature-list">
          <div class="feature">
            <h4>Smooth Animations</h4>
            <p>Automatic morphing between elements</p>
          </div>
          <div class="feature">
            <h4>Better UX</h4>
            <p>Maintains user context during navigation</p>
          </div>
        </div>
      </div>
      
      <div class="about-sidebar">
        <div class="stats">
          <div class="stat">
            <span class="stat-number">100%</span>
            <span class="stat-label">Smooth</span>
          </div>
          <div class="stat">
            <span class="stat-number">60fps</span>
            <span class="stat-label">Performance</span>
          </div>
        </div>
      </div>
    </section>

    <button class="back-button" onclick="transitionToPage('page1')">Back to Home</button>
  </main>

  <!-- Modal for gallery -->
  <div id="image-modal" class="modal">
    <div class="modal-content">
      <span class="close-button" onclick="closeModal()">&times;</span>
      <img id="modal-image" src="" alt="Modal image" class="modal-image">
    </div>
  </div>
</div>

`}
              cssCode={`/* Enable view transitions */
@view-transition {
  navigation: auto; /* Enable for navigation */
}

/* Basic page transition */
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}

::view-transition-old(root) {
  animation-name: slide-out-left;
}

::view-transition-new(root) {
  animation-name: slide-in-right;
}

@keyframes slide-out-left {
  to { transform: translateX(-100%); }
}

@keyframes slide-in-right {
  from { transform: translateX(100%); }
}

/* Named view transitions for specific elements */
.hero-image {
  view-transition-name: hero;
}

.product-image {
  view-transition-name: product-hero;
}

/* Custom transitions for named elements */
::view-transition-old(hero),
::view-transition-new(hero) {
  animation-duration: 0.8s;
  animation-timing-function: ease-in-out;
}

::view-transition-old(hero) {
  animation-name: morph-out;
}

::view-transition-new(hero) {
  animation-name: morph-in;
}

@keyframes morph-out {
  to {
    transform: scale(0.8);
    opacity: 0;
  }
}

@keyframes morph-in {
  from {
    transform: scale(1.2);
    opacity: 0;
  }
}

/* Directional transitions based on navigation */
@media (prefers-reduced-motion: no-preference) {
  /* Forward navigation */
  :root[data-direction="forward"] {
    ::view-transition-old(root) {
      animation-name: slide-out-left;
    }
    
    ::view-transition-new(root) {
      animation-name: slide-in-right;
    }
  }
  
  /* Backward navigation */
  :root[data-direction="backward"] {
    ::view-transition-old(root) {
      animation-name: slide-out-right;
    }
    
    ::view-transition-new(root) {
      animation-name: slide-in-left;
    }
  }
}

@keyframes slide-out-right {
  to { transform: translateX(100%); }
}

@keyframes slide-in-left {
  from { transform: translateX(-100%); }
}

/* Modal transitions */
.modal {
  view-transition-name: modal;
}

::view-transition-old(modal) {
  animation: modal-fade-out 0.3s ease-out;
}

::view-transition-new(modal) {
  animation: modal-fade-in 0.3s ease-out;
}

@keyframes modal-fade-out {
  to {
    opacity: 0;
    transform: scale(0.9);
  }
}

@keyframes modal-fade-in {
  from {
    opacity: 0;
    transform: scale(1.1);
  }
}

/* List item transitions */
.list-item {
  view-transition-name: auto; /* Generate unique names */
}

::view-transition-old(list-item),
::view-transition-new(list-item) {
  animation-duration: 0.4s;
}

::view-transition-old(list-item) {
  animation-name: item-remove;
}

::view-transition-new(list-item) {
  animation-name: item-add;
}

@keyframes item-remove {
  to {
    opacity: 0;
    transform: translateX(-100%) scale(0.8);
  }
}

@keyframes item-add {
  from {
    opacity: 0;
    transform: translateX(100%) scale(0.8);
  }
}

/* Card flip transition */
.card-container {
  view-transition-name: card;
}

::view-transition-old(card) {
  animation: flip-out 0.6s ease-in;
}

::view-transition-new(card) {
  animation: flip-in 0.6s ease-out;
}

@keyframes flip-out {
  to {
    transform: perspective(400px) rotateY(90deg);
  }
}

@keyframes flip-in {
  from {
    transform: perspective(400px) rotateY(-90deg);
  }
}

/* Zoom transition for image galleries */
.gallery-image {
  view-transition-name: gallery-item;
}

.fullsize-image {
  view-transition-name: gallery-item; /* Same name for smooth morph */
}

::view-transition-old(gallery-item),
::view-transition-new(gallery-item) {
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
}

/* Tab switching transitions */
.tab-content {
  view-transition-name: tab-panel;
}

::view-transition-old(tab-panel) {
  animation: tab-fade-out 0.2s ease-out;
}

::view-transition-new(tab-panel) {
  animation: tab-fade-in 0.3s ease-out;
}

@keyframes tab-fade-out {
  to {
    opacity: 0;
    transform: translateY(10px);
  }
}

@keyframes tab-fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
}

/* Sidebar transitions */
.sidebar {
  view-transition-name: sidebar;
}

::view-transition-old(sidebar) {
  animation: sidebar-slide-out 0.3s ease-in;
}

::view-transition-new(sidebar) {
  animation: sidebar-slide-in 0.3s ease-out;
}

@keyframes sidebar-slide-out {
  to {
    transform: translateX(-100%);
  }
}

@keyframes sidebar-slide-in {
  from {
    transform: translateX(-100%);
  }
}

/* Accessibility considerations */
@media (prefers-reduced-motion: reduce) {
  ::view-transition-old(*),
  ::view-transition-new(*) {
    animation: none !important;
  }
  
  /* Provide subtle fade for reduced motion */
  ::view-transition-old(root) {
    animation: gentle-fade-out 0.2s ease;
  }
  
  ::view-transition-new(root) {
    animation: gentle-fade-in 0.2s ease;
  }
}

@keyframes gentle-fade-out {
  to { opacity: 0; }
}

@keyframes gentle-fade-in {
  from { opacity: 0; }
}`}
              explanation="CSS View Transitions create smooth, automatic animations when DOM content changes, providing a native solution for page and content transitions."
              accessibilityTips={[
                "Always respect prefers-reduced-motion preferences",
                "Keep transition durations reasonable (under 500ms)",
                "Ensure transitions don't interfere with screen reader navigation",
                "Provide fallback experiences for browsers without View Transitions support"
              ]}
            />
          </section>

          {/* Best Practices */}
          <section className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Modern CSS Best Practices
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Feature Adoption
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Use progressive enhancement for modern CSS features</li>
                  <li>• Provide fallbacks for browsers without support</li>
                  <li>• Test container queries across different screen sizes</li>
                  <li>• Check View Transitions API support before implementation</li>
                  <li>• Use CSS custom properties for maintainable theming</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Performance & Accessibility
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Keep CSS nesting levels reasonable (3-4 max)</li>
                  <li>• Respect user motion preferences in all animations</li>
                  <li>• Optimize container query performance on complex layouts</li>
                  <li>• Test modern features with assistive technologies</li>
                  <li>• Consider battery impact of frequent transitions</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
