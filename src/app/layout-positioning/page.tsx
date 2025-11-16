import { CodeExample } from "@/components/CodeExample";

export default function LayoutPositioningPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            CSS Layout & Positioning
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl">
            Master modern CSS layout systems including Grid Layout Level 2, Flexbox, Multi-column Layout, 
            and cutting-edge Anchor Positioning. Build responsive, flexible layouts with the latest CSS specifications.
          </p>
        </header>

        <div className="space-y-12">
          {/* CSS Grid Layout */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS Grid Layout Level 2
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              CSS Grid Layout provides a two-dimensional layout system with powerful alignment and sizing capabilities, including subgrids.
            </p>
            <CodeExample
              title="Advanced Grid Layout Patterns"
              description="Modern grid layout techniques from CSS Grid Level 2"
              htmlCode={`<!-- Basic Grid Layout -->
<div class="grid-container">
  <header class="header">Page Header</header>
  <main class="main">Main Content</main>
  <footer class="footer">Footer</footer>
</div>

<!-- Named Grid Areas Layout -->
<div class="layout-grid">
  <header class="header">Header Section</header>
  <nav class="sidebar">
    <ul>
      <li><a href="#">Navigation 1</a></li>
      <li><a href="#">Navigation 2</a></li>
      <li><a href="#">Navigation 3</a></li>
    </ul>
  </nav>
  <main class="main">
    <h1>Main Content Area</h1>
    <p>This is the primary content area using CSS Grid named areas.</p>
  </main>
  <footer class="footer">Footer Content</footer>
</div>

<!-- Subgrid Example (CSS Grid Level 2) -->
<div class="card-grid">
  <article class="card">
    <h2 class="card-title">Card Title 1</h2>
    <div class="card-content">
      <p>This card uses subgrid to align with other cards in the same row.</p>
    </div>
    <div class="card-footer">
      <button>Read More</button>
    </div>
  </article>
  
  <article class="card">
    <h2 class="card-title">Longer Card Title 2</h2>
    <div class="card-content">
      <p>Even with different content lengths, the subgrid keeps everything aligned.</p>
      <p>Multiple paragraphs are handled gracefully.</p>
    </div>
    <div class="card-footer">
      <button>Learn More</button>
    </div>
  </article>
  
  <article class="card">
    <h2 class="card-title">Card 3</h2>
    <div class="card-content">
      <p>Short content.</p>
    </div>
    <div class="card-footer">
      <button>View Details</button>
    </div>
  </article>
</div>

<!-- Masonry Grid Layout -->
<div class="masonry-grid">
  <div class="masonry-item" style="--row-span: 15">
    <h3>Gallery Item 1</h3>
    <p>This is a taller item that spans more rows.</p>
  </div>
  
  <div class="masonry-item" style="--row-span: 8">
    <h3>Gallery Item 2</h3>
    <p>Shorter content.</p>
  </div>
  
  <div class="masonry-item" style="--row-span: 12">
    <h3>Gallery Item 3</h3>
    <p>Medium length content that demonstrates the masonry layout effect.</p>
  </div>
  
  <div class="masonry-item" style="--row-span: 6">
    <h3>Gallery Item 4</h3>
    <p>Small item.</p>
  </div>
</div>

<!-- Flexible Grid with Intrinsic Sizing -->
<div class="flexible-grid">
  <div class="sidebar-content">
    <h3>Sidebar</h3>
    <p>Fits content</p>
  </div>
  
  <div class="main-content">
    <h3>Main Content</h3>
    <p>This section grows and shrinks based on available space, with a minimum width of 300px.</p>
  </div>
  
  <div class="metadata">
    <h3>Meta Info</h3>
    <p>Sizes to largest content</p>
  </div>
</div>

<!-- Dense Grid Packing -->
<div class="dense-grid">
  <div class="dense-item">Item 1</div>
  <div class="dense-item wide">Wide Item 2</div>
  <div class="dense-item">Item 3</div>
  <div class="dense-item tall">Tall Item 4</div>
  <div class="dense-item">Item 5</div>
  <div class="dense-item">Item 6</div>
  <div class="dense-item wide">Wide Item 7</div>
  <div class="dense-item">Item 8</div>
</div>

<!-- Responsive Grid Without Media Queries -->
<div class="responsive-grid">
  <div class="grid-item">Product 1</div>
  <div class="grid-item">Product 2</div>
  <div class="grid-item">Product 3</div>
  <div class="grid-item">Product 4</div>
  <div class="grid-item">Product 5</div>
  <div class="grid-item">Product 6</div>
</div>

<!-- Aligned Grid Example -->
<div class="aligned-grid">
  <div class="grid-item">Item 1</div>
  <div class="grid-item center">Centered Item</div>
  <div class="grid-item">Item 3</div>
  <div class="grid-item">Item 4</div>
  <div class="grid-item">Item 5</div>
  <div class="grid-item">Item 6</div>
  <div class="grid-item">Item 7</div>
  <div class="grid-item">Item 8</div>
  <div class="grid-item">Item 9</div>
</div>`}
              cssCode={`/* Basic grid container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  min-height: 100vh;
}

/* Named grid lines and areas */
.layout-grid {
  display: grid;
  grid-template-columns: 
    [sidebar-start] 250px 
    [sidebar-end main-start] 1fr 
    [main-end];
  grid-template-rows: 
    [header-start] auto 
    [header-end content-start] 1fr 
    [content-end footer-start] auto 
    [footer-end];
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Subgrid (Level 2 feature) */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.card {
  display: grid;
  grid-template-rows: subgrid; /* Inherits parent row structure */
  grid-row: span 3; /* Title, content, footer */
}

.card-title { grid-row: 1; }
.card-content { grid-row: 2; }
.card-footer { grid-row: 3; }

/* Advanced grid placement */
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 10px; /* Small row height for masonry effect */
}

.masonry-item {
  grid-row: span var(--row-span, 10); /* Dynamic spanning */
}

/* Grid with intrinsic sizing */
.flexible-grid {
  display: grid;
  grid-template-columns: 
    fit-content(200px)  /* Shrinks to content, max 200px */
    minmax(300px, 1fr)  /* Min 300px, grows */
    max-content;        /* Size to largest content */
  align-items: start;
}

/* Dense grid packing */
.dense-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-flow: row dense; /* Fill gaps automatically */
  gap: 0.5rem;
}

.dense-item.wide {
  grid-column: span 2;
}

.dense-item.tall {
  grid-row: span 2;
}

/* Responsive grid without media queries */
.responsive-grid {
  --min-column-width: 250px;
  --gap: 1rem;
  --max-columns: 4;
  
  display: grid;
  grid-template-columns: repeat(
    auto-fit, 
    minmax(
      max(var(--min-column-width), 100% / (var(--max-columns) + 1) - var(--gap)), 
      1fr
    )
  );
  gap: var(--gap);
}

/* Grid alignment properties */
.aligned-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 1rem;
  
  /* Container alignment */
  justify-content: center;    /* Horizontal alignment of entire grid */
  align-content: center;      /* Vertical alignment of entire grid */
  
  /* Default item alignment */
  justify-items: stretch;     /* Horizontal alignment of grid items */
  align-items: center;        /* Vertical alignment of grid items */
}

.grid-item.center {
  justify-self: center;       /* Individual item horizontal alignment */
  align-self: center;         /* Individual item vertical alignment */
}`}
              explanation="CSS Grid Layout Level 2 introduces subgrids and enhanced features for creating sophisticated, responsive layouts without complex calculations or media queries."
              accessibilityTips={[
                "Use logical order in grid-template-areas for screen reader navigation",
                "Ensure grid items maintain readable tab order",
                "Test grid layouts with zoom up to 200%",
                "Provide fallbacks for older browsers that don't support subgrid"
              ]}
            />
          </section>

          {/* CSS Flexbox */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS Flexible Box Layout
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Flexbox provides a one-dimensional layout method for arranging items in rows or columns with powerful alignment and distribution capabilities.
            </p>
            <CodeExample
              title="Advanced Flexbox Patterns"
              description="Sophisticated flexbox layouts for modern web design"
              htmlCode={`<!-- Advanced Flexbox Layout Examples -->
<div class="flexbox-showcase">
  <!-- Basic flex layout -->
  <section class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
  </section>

  <!-- Holy Grail Layout -->
  <div class="holy-grail">
    <header class="header">Header</header>
    <div class="content-wrap">
      <nav class="sidebar">Sidebar</nav>
      <main class="main-content">Main Content</main>
      <aside class="aside">Aside</aside>
    </div>
    <footer class="footer">Footer</footer>
  </div>

  <!-- Card layout -->
  <section class="card-layout">
    <article class="card">
      <header class="card-header">Card 1</header>
      <div class="card-content">Content goes here</div>
      <footer class="card-footer">
        <button>Action</button>
      </footer>
    </article>
    <article class="card">
      <header class="card-header">Card 2</header>
      <div class="card-content">More content here</div>
      <footer class="card-footer">
        <button>Action</button>
      </footer>
    </article>
  </section>

  <!-- Media object -->
  <div class="media-object">
    <img src="avatar.jpg" alt="Avatar" class="media-image">
    <div class="media-body">
      <h3>Media Object</h3>
      <p>This is a flexible media object pattern.</p>
    </div>
  </div>
</div>`}
              cssCode={`/* Basic flex container */
.flex-container {
  display: flex;
  flex-direction: row;          /* row | row-reverse | column | column-reverse */
  flex-wrap: wrap;              /* nowrap | wrap | wrap-reverse */
  justify-content: space-between; /* flex-start | flex-end | center | space-between | space-around | space-evenly */
  align-items: center;          /* stretch | flex-start | flex-end | center | baseline */
  align-content: flex-start;    /* For wrapped items */
  gap: 1rem;                    /* Modern gap property */
}

/* Flex items with intelligent sizing */
.flex-item {
  flex: 1 1 auto;              /* grow | shrink | basis */
}

.flex-item.no-shrink {
  flex: 1 0 200px;             /* Grow, don't shrink, 200px basis */
}

.flex-item.fixed {
  flex: 0 0 150px;             /* Don't grow/shrink, fixed 150px */
}

/* Advanced flex patterns */
.holy-grail-layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.holy-grail-body {
  display: flex;
  flex: 1;                     /* Take remaining space */
}

.holy-grail-sidebar {
  flex: 0 0 200px;            /* Fixed sidebar */
  order: -1;                   /* Move to left */
}

.holy-grail-main {
  flex: 1;                     /* Take remaining space */
  min-width: 0;               /* Prevent flex item overflow */
}

/* Card layout with equal heights */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px;            /* Grow, shrink, 300px minimum */
  display: flex;
  flex-direction: column;
}

.card-content {
  flex: 1;                     /* Take available space */
}

.card-footer {
  margin-top: auto;           /* Push to bottom */
}

/* Centering techniques */
.perfect-center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Responsive navigation */
.nav-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.nav-logo {
  margin-right: auto;         /* Push other items to right */
}

.nav-menu {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .nav-menu {
    flex: 1 0 100%;            /* Force to new line */
    justify-content: center;
  }
}

/* Flexible form layout */
.form-row {
  display: flex;
  gap: 1rem;
  align-items: flex-end;      /* Align to baseline of inputs */
}

.form-group {
  flex: 1;                    /* Equal width by default */
  display: flex;
  flex-direction: column;
}

.form-group.narrow {
  flex: 0 0 100px;           /* Fixed narrow fields */
}

.form-group.wide {
  flex: 2;                    /* Twice as wide as normal */
}

/* Media object pattern */
.media-object {
  display: flex;
  gap: 1rem;
}

.media-figure {
  flex: 0 0 auto;            /* Don't grow/shrink */
}

.media-body {
  flex: 1;                    /* Take remaining space */
  min-width: 0;              /* Allow text wrapping */
}

/* Sticky footer with flexbox */
.page-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-header,
.page-footer {
  flex: 0 0 auto;            /* Size to content */
}

.page-main {
  flex: 1 0 auto;            /* Take remaining space */
}

/* Advanced alignment */
.baseline-aligned {
  display: flex;
  align-items: baseline;      /* Align text baselines */
  gap: 1rem;
}

.stretch-items {
  display: flex;
  align-items: stretch;       /* Equal height items */
  min-height: 200px;
}`}
              explanation="Flexbox excels at one-dimensional layouts, providing intuitive alignment, distribution, and sizing of elements within containers."
              accessibilityTips={[
                "Be careful with flex order - it changes visual order but not DOM order",
                "Test keyboard navigation when using order property",
                "Use min-width: 0 on flex items to prevent overflow issues",
                "Ensure flex layouts work at different zoom levels"
              ]}
            />
          </section>

          {/* Multi-column Layout */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS Multi-column Layout
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Multi-column layout enables flowing content across multiple columns like newspapers and magazines, perfect for text-heavy content.
            </p>
            <CodeExample
              title="Multi-column Layout Techniques"
              description="Creating newspaper-style layouts with CSS columns"
              htmlCode={`<!-- Multi-column Layout Examples -->
<div class="multi-column-demo">
  <!-- Basic multi-column text -->
  <article class="multi-column-text">
    <h2>Multi-Column Article</h2>
    <p>This is a long article that will be automatically flowed into multiple columns. The text flows from one column to the next, creating a newspaper-like layout that's perfect for reading long-form content.</p>
    <p>CSS Multi-column Layout allows content to flow naturally across multiple columns while maintaining readability. The browser automatically handles the column breaks and balances the content.</p>
    <p>You can control various aspects like column width, gap between columns, and rules (lines) between columns to create professional layouts.</p>
  </article>

  <!-- Magazine-style layout -->
  <article class="magazine-layout">
    <h2>Magazine Style Layout</h2>
    <p>This layout demonstrates more advanced multi-column features including column spans and breaks.</p>
    
    <h3 class="column-span">Full Width Heading</h3>
    
    <p>After the spanning heading, the text continues to flow in columns. This is useful for subheadings and other elements that need to span across all columns.</p>
    <p>The multi-column layout automatically adjusts to the available space and creates balanced columns.</p>
    
    <div class="break-inside-avoid">
      <h4>Sidebar Box</h4>
      <p>This content box is set to avoid breaking across columns.</p>
    </div>
    
    <p>Additional content continues here, flowing around the unbreakable elements.</p>
  </article>

  <!-- News layout -->
  <section class="news-layout">
    <header class="news-header">
      <h1>Daily News</h1>
      <time>November 16, 2025</time>
    </header>
    
    <article class="news-article">
      <h2>Breaking: CSS Multi-column Gains New Features</h2>
      <p class="lead">The latest CSS specification introduces enhanced multi-column capabilities for better web typography.</p>
      <p>Web developers now have more control over column layouts with improved break controls and spanning options. This development represents a significant step forward in web layout capabilities.</p>
      <p>The new features include better handling of images, improved column balancing algorithms, and enhanced support for complex layouts that combine multiple layout methods.</p>
    </article>
    
    <aside class="news-sidebar">
      <h3>Related Stories</h3>
      <ul>
        <li><a href="#">CSS Grid Updates</a></li>
        <li><a href="#">Flexbox Best Practices</a></li>
        <li><a href="#">Modern Layout Techniques</a></li>
      </ul>
    </aside>
  </section>
</div>`}
              cssCode={`/* Basic multi-column layout */
.article-text {
  column-count: 3;              /* Fixed number of columns */
  column-gap: 2rem;             /* Gap between columns */
  column-rule: 1px solid #ccc;  /* Divider between columns */
}

/* Responsive columns with width control */
.responsive-columns {
  column-width: 250px;          /* Optimal column width */
  column-gap: 1.5rem;
  column-fill: balance;         /* Distribute content evenly */
}

/* Column spanning elements */
.article-title {
  column-span: all;             /* Span across all columns */
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #333;
}

.pull-quote {
  column-span: all;
  font-size: 1.2em;
  font-style: italic;
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background-color: #f5f5f5;
}

/* Controlling column breaks */
.section-break {
  break-before: column;         /* Force column break before */
}

.keep-together {
  break-inside: avoid;          /* Avoid breaking inside element */
}

.chapter-title {
  break-after: column;          /* Force column break after */
}

/* Advanced column styling */
.magazine-layout {
  column-count: 4;
  column-gap: 1rem;
  column-rule: 2px solid #e2e8f0;
  column-rule-style: dotted;
  text-align: justify;
  hyphens: auto;                /* Enable hyphenation */
}

/* Responsive multi-column */
.adaptive-columns {
  column-width: 300px;
  column-gap: clamp(1rem, 4vw, 3rem);
}

@media (max-width: 768px) {
  .adaptive-columns {
    column-count: 1;            /* Single column on mobile */
  }
}

/* Masonry-style layout with columns */
.masonry-columns {
  column-count: 3;
  column-gap: 1rem;
  column-fill: auto;            /* Don't balance, fill sequentially */
}

.masonry-item {
  break-inside: avoid;          /* Keep items intact */
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Text flow control */
.flowing-text {
  columns: 20rem;               /* Shorthand for column-width */
  column-gap: 2rem;
  text-align: justify;
  line-height: 1.6;
}

.flowing-text p {
  margin-bottom: 1em;
  text-indent: 1.5em;
}

.flowing-text p:first-of-type {
  text-indent: 0;               /* No indent for first paragraph */
}

/* Drop caps with columns */
.drop-cap-text {
  column-count: 2;
  column-gap: 2rem;
}

.drop-cap-text p:first-of-type::first-letter {
  float: left;
  font-size: 4em;
  line-height: 0.8;
  margin: 0.1em 0.2em 0.1em 0;
  font-weight: bold;
  color: #333;
}

/* Image handling in columns */
.illustrated-article {
  column-count: 3;
  column-gap: 1.5rem;
}

.illustrated-article img {
  max-width: 100%;
  height: auto;
  break-inside: avoid;
}

.full-width-image {
  column-span: all;
  margin: 2rem 0;
}

/* Column-aware typography */
.columnar-typography {
  column-count: 2;
  column-gap: 3rem;
  font-size: 1rem;
  line-height: 1.7;
}

.columnar-typography h2 {
  column-span: all;
  font-size: 2rem;
  margin: 2rem 0 1rem 0;
  text-align: center;
}

.columnar-typography h3 {
  break-after: avoid;          /* Keep headings with following content */
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}`}
              explanation="Multi-column layout is perfect for text-heavy content, providing automatic text flow across columns with fine control over breaks and spanning."
              accessibilityTips={[
                "Be mindful of reading flow - columns should read naturally",
                "Avoid too many narrow columns that are hard to read",
                "Test with increased font sizes to ensure readability",
                "Consider single-column layouts for mobile devices"
              ]}
            />
          </section>

          {/* CSS Anchor Positioning */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS Anchor Positioning
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              CSS Anchor Positioning allows elements to be positioned relative to other elements anywhere on the page, 
              enabling sophisticated UI components like tooltips and popups.
            </p>
            <CodeExample
              title="Modern Anchor Positioning"
              description="Position elements relative to anchor points anywhere on the page"
              htmlCode={`<!-- Anchor Positioning Examples -->
<div class="anchor-demo">
  <!-- Button with tooltip -->
  <section class="tooltip-demo">
    <button id="help-button" class="anchor-button">
      Help ?
    </button>
    <div class="tooltip" id="help-tooltip">
      This is a tooltip positioned relative to the button
    </div>
  </section>

  <!-- Card with popup -->
  <section class="card-popup-demo">
    <article id="article-card" class="demo-card">
      <h3>Article Title</h3>
      <p>This card has a popup that appears when hovered.</p>
    </article>
    
    <div class="card-popup">
      <h4>Additional Information</h4>
      <p>This popup is positioned relative to the card using anchor positioning.</p>
    </div>
  </section>

  <!-- Navigation with dropdown -->
  <nav class="anchor-nav">
    <ul class="nav-list">
      <li>
        <button id="products-nav" class="nav-button">Products</button>
        <ul class="dropdown-menu">
          <li><a href="#">Web Design</a></li>
          <li><a href="#">Development</a></li>
          <li><a href="#">Consulting</a></li>
        </ul>
      </li>
      <li>
        <button id="services-nav" class="nav-button">Services</button>
        <ul class="dropdown-menu">
          <li><a href="#">Support</a></li>
          <li><a href="#">Training</a></li>
          <li><a href="#">Maintenance</a></li>
        </ul>
      </li>
    </ul>
  </nav>

  <!-- Content with side annotations -->
  <article class="annotated-content">
    <h2>Annotated Article</h2>
    <p id="paragraph-1">
      This is the first paragraph of content. It has an annotation 
      positioned to its side using anchor positioning.
    </p>
    
    <aside class="annotation annotation-1">
      Note: This annotation is anchored to paragraph 1
    </aside>
    
    <p id="paragraph-2">
      This is another paragraph with its own annotation that follows
      it as the content flows and reflows.
    </p>
    
    <aside class="annotation annotation-2">
      Important: This note relates to paragraph 2
    </aside>
  </article>

  <!-- Interactive elements -->
  <section class="interactive-demo">
    <div id="draggable-item" class="draggable">
      Drag me around
    </div>
    
    <div class="follower">
      I follow the draggable item
    </div>
    
    <div class="status-indicator">
      Status updates based on position
    </div>
  </section>
</div>`}
              cssCode={`/* Define an anchor element */
.anchor-button {
  anchor-name: --my-anchor;     /* Define anchor name */
  position: relative;
}

/* Position element relative to anchor */
.tooltip {
  position: absolute;
  position-anchor: --my-anchor;  /* Reference the anchor */
  
  /* Position relative to anchor */
  top: anchor(bottom);          /* Align to bottom of anchor */
  left: anchor(center);         /* Center horizontally with anchor */
  
  /* Offset from anchor */
  margin-top: 0.5rem;
  
  /* Tooltip styling */
  background: #333;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  white-space: nowrap;
  z-index: 1000;
}

/* Anchor positioning with fallback */
.dropdown-menu {
  position: absolute;
  position-anchor: --dropdown-trigger;
  
  /* Try to position below anchor */
  top: anchor(bottom);
  left: anchor(left);
  
  /* Fallback positioning if anchor positioning not supported */
  inset: auto auto auto 0;
  
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 200px;
}

/* Multiple anchor references */
.complex-popup {
  position: absolute;
  position-anchor: --primary-anchor;
  
  /* Position relative to different sides of anchor */
  top: anchor(--primary-anchor bottom, --secondary-anchor top);
  left: anchor(--primary-anchor right, --secondary-anchor left);
  
  /* With offsets */
  margin-top: 0.25rem;
  margin-left: 0.5rem;
}

/* Anchor positioning with sizing */
.stretchy-element {
  position: absolute;
  position-anchor: --stretch-anchor;
  
  /* Size based on anchor dimensions */
  width: anchor-size(width);
  min-height: anchor-size(height);
  
  /* Position to match anchor */
  top: anchor(top);
  left: anchor(left);
}

/* Responsive anchor positioning */
.responsive-tooltip {
  position: absolute;
  position-anchor: --responsive-anchor;
  
  /* Default position above anchor */
  bottom: anchor(top);
  left: anchor(center);
  transform: translateX(-50%);
  
  /* Fallback for smaller screens */
  @media (max-width: 768px) {
    /* Position below anchor on mobile */
    top: anchor(bottom);
    bottom: auto;
  }
}

/* Anchor positioning with auto-placement */
.auto-positioned {
  position: absolute;
  position-anchor: --auto-anchor;
  
  /* Let browser choose best position */
  position-try-options: flip-block, flip-inline, flip-block flip-inline;
  
  /* Default position */
  top: anchor(bottom);
  left: anchor(left);
  
  /* Styling */
  background: white;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
}

/* Chained anchor positioning */
.chained-element {
  anchor-name: --chain-link;
  position: absolute;
  position-anchor: --previous-anchor;
  
  top: anchor(bottom);
  left: anchor(right);
  margin-top: 1rem;
  margin-left: 1rem;
}

/* Anchor scope for complex layouts */
.anchor-container {
  anchor-scope: --scoped-anchor;  /* Limit anchor scope */
}

.scoped-positioned {
  position: absolute;
  position-anchor: --scoped-anchor;
  top: anchor(top);
  right: anchor(left);
  margin-right: 1rem;
}

/* Practical tooltip implementation */
.tooltip-trigger {
  anchor-name: --tooltip-anchor;
  position: relative;
  cursor: help;
}

.tooltip-content {
  position: absolute;
  position-anchor: --tooltip-anchor;
  
  /* Position above by default */
  bottom: anchor(top);
  left: anchor(center);
  transform: translateX(-50%);
  
  /* Fallback positions */
  position-try-options: 
    flip-block,              /* Try below if no space above */
    flip-inline,             /* Try opposite horizontal side */
    flip-block flip-inline;  /* Try opposite corner */
  
  /* Styling */
  background: #2d3748;
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  white-space: nowrap;
  z-index: 1000;
  
  /* Arrow pointer */
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: #2d3748;
  }
}`}
              explanation="CSS Anchor Positioning provides a powerful way to position elements relative to other elements, making it much easier to create tooltips, dropdowns, and other positioned UI components."
              accessibilityTips={[
                "Ensure tooltips are accessible via keyboard navigation",
                "Provide fallback positioning for browsers without anchor support",
                "Test anchor positioning with different viewport sizes",
                "Consider using ARIA attributes for tooltip relationships"
              ]}
            />
          </section>

          {/* Best Practices */}
          <section className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Layout & Positioning Best Practices
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Layout Strategy
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Use Grid for two-dimensional layouts</li>
                  <li>• Use Flexbox for one-dimensional layouts</li>
                  <li>• Consider multi-column for text-heavy content</li>
                  <li>• Test anchor positioning support before production use</li>
                  <li>• Provide fallbacks for modern layout features</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Accessibility & Performance
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Maintain logical tab order with visual layout</li>
                  <li>• Test layouts at 200% zoom for accessibility</li>
                  <li>• Use semantic HTML structure regardless of layout</li>
                  <li>• Optimize for mobile-first responsive design</li>
                  <li>• Consider reduced motion preferences</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
