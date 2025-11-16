import { CodeExample } from "@/components/CodeExample";

export default function VisualAnimationsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            CSS Visual Effects & Animations
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl">
            Master modern CSS visual effects including CSS Color Level 4, Animations, Transitions, and Transforms. 
            Create engaging, accessible visual experiences with the latest CSS specifications.
          </p>
        </header>

        <div className="space-y-12">
          {/* CSS Color Level 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS Color Level 4
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              CSS Color Level 4 introduces new color spaces, color functions, and relative color syntax for more sophisticated color manipulation.
            </p>
            <CodeExample
              title="Advanced Color Specifications"
              description="Modern color functions and spaces from CSS Color Level 4"
              htmlCode={`<!-- Advanced Color Examples -->
<div class="color-showcase">
  <header class="showcase-header">
    <h1>CSS Color Level 4 Demo</h1>
    <p>Exploring modern color functions and spaces</p>
  </header>

  <!-- Traditional colors section -->
  <section class="color-section">
    <h2>Traditional Colors</h2>
    <div class="color-grid">
      <div class="color-card traditional-hex">
        <div class="color-sample"></div>
        <div class="color-info">
          <h3>Hex Colors</h3>
          <code>#3498db</code>
        </div>
      </div>
      
      <div class="color-card traditional-rgb">
        <div class="color-sample"></div>
        <div class="color-info">
          <h3>RGB Colors</h3>
          <code>rgb(52, 152, 219)</code>
        </div>
      </div>
      
      <div class="color-card traditional-hsl">
        <div class="color-sample"></div>
        <div class="color-info">
          <h3>HSL Colors</h3>
          <code>hsl(204, 70%, 53%)</code>
        </div>
      </div>
    </div>
  </section>

  <!-- Modern color functions -->
  <section class="color-section">
    <h2>Modern Color Functions</h2>
    <div class="color-grid">
      <div class="color-card modern-oklch">
        <div class="color-sample"></div>
        <div class="color-info">
          <h3>OKLCH</h3>
          <code>oklch(0.7 0.15 250)</code>
          <p>Perceptually uniform</p>
        </div>
      </div>
      
      <div class="color-card modern-p3">
        <div class="color-sample"></div>
        <div class="color-info">
          <h3>Display P3</h3>
          <code>color(display-p3 0.2 0.6 0.8)</code>
          <p>Wide color gamut</p>
        </div>
      </div>
      
      <div class="color-card modern-hwb">
        <div class="color-sample"></div>
        <div class="color-info">
          <h3>HWB</h3>
          <code>hwb(204 20% 14%)</code>
          <p>Hue-Whiteness-Blackness</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Relative colors -->
  <section class="color-section">
    <h2>Relative Colors</h2>
    <div class="relative-color-demo">
      <div class="base-color">
        <h3>Base Color</h3>
        <div class="color-sample base"></div>
        <code>Base: hsl(220 80% 50%)</code>
      </div>
      
      <div class="derived-colors">
        <div class="color-variant lighter">
          <div class="color-sample"></div>
          <h4>Lighter</h4>
          <code>from var(--base) h s calc(l + 20%)</code>
        </div>
        
        <div class="color-variant darker">
          <div class="color-sample"></div>
          <h4>Darker</h4>
          <code>from var(--base) h s calc(l - 20%)</code>
        </div>
        
        <div class="color-variant desaturated">
          <div class="color-sample"></div>
          <h4>Desaturated</h4>
          <code>from var(--base) h calc(s - 30%) l</code>
        </div>
        
        <div class="color-variant alpha">
          <div class="color-sample"></div>
          <h4>Transparent</h4>
          <code>from var(--base) h s l / 0.5</code>
        </div>
      </div>
    </div>
  </section>

  <!-- Color mixing -->
  <section class="color-section">
    <h2>Color Mixing</h2>
    <div class="mixing-demo">
      <div class="mixing-example">
        <div class="color-mix-result mix1">
          <h3>RGB Mixing</h3>
          <code>color-mix(in srgb, red 60%, blue)</code>
        </div>
        
        <div class="color-mix-result mix2">
          <h3>OKLCH Mixing</h3>
          <code>color-mix(in oklch, red 60%, blue)</code>
        </div>
        
        <div class="color-mix-result mix3">
          <h3>HSL Mixing</h3>
          <code>color-mix(in hsl longer hue, red 60%, blue)</code>
        </div>
      </div>
    </div>
  </section>

  <!-- Gradients with modern colors -->
  <section class="color-section">
    <h2>Modern Gradients</h2>
    <div class="gradient-gallery">
      <div class="gradient-card gradient1">
        <h3>OKLCH Gradient</h3>
        <p>Smooth perceptual interpolation</p>
      </div>
      
      <div class="gradient-card gradient2">
        <h3>P3 Wide Gamut</h3>
        <p>Enhanced color range</p>
      </div>
      
      <div class="gradient-card gradient3">
        <h3>Color Mix Gradient</h3>
        <p>Using color-mix function</p>
      </div>
    </div>
  </section>

  <!-- Theme examples -->
  <section class="color-section">
    <h2>Dynamic Theming</h2>
    <div class="theme-demo">
      <div class="theme-card light-theme">
        <h3>Light Theme</h3>
        <p>Adaptive color schemes with modern functions</p>
        <button class="theme-button">Action</button>
      </div>
      
      <div class="theme-card dark-theme">
        <h3>Dark Theme</h3>
        <p>Same base colors, calculated variations</p>
        <button class="theme-button">Action</button>
      </div>
    </div>
  </section>
</div>`}
              cssCode={`/* Traditional color formats */
.traditional-colors {
  /* Hex notation */
  color: #ff0000;
  background: #rgb;              /* 3-digit hex */
  border-color: #ff000080;       /* 8-digit hex with alpha */
  
  /* RGB/RGBA functions */
  color: rgb(255, 0, 0);
  background: rgba(255, 0, 0, 0.5);
  
  /* HSL/HSLA functions */
  color: hsl(0, 100%, 50%);      /* Red */
  background: hsla(240, 100%, 50%, 0.3); /* Semi-transparent blue */
}

/* Modern color spaces */
.modern-colors {
  /* HWB - Hue, Whiteness, Blackness */
  color: hwb(0 0% 0%);           /* Pure red */
  background: hwb(120 20% 10%);   /* Light green */
  
  /* LAB color space - perceptually uniform */
  color: lab(50% 20 -30);        /* Reddish color */
  background: lab(70% -45 -14);   /* Green color */
  
  /* LCH - cylindrical LAB (more intuitive) */
  color: lch(50% 40 120);        /* Green */
  background: lch(80% 25 200);    /* Blue */
  
  /* OKLCH - improved LCH with better hue uniformity */
  color: oklch(0.7 0.2 180);     /* Cyan */
  background: oklch(0.4 0.15 270); /* Purple */
}

/* Color mixing */
.mixed-colors {
  /* Mix two colors */
  background: color-mix(in srgb, red 30%, blue);
  border-color: color-mix(in oklch, #ff0000 25%, #00ff00);
  
  /* Mix with transparency */
  color: color-mix(in srgb, red 50%, transparent);
  
  /* Advanced mixing in different color spaces */
  background: color-mix(in lab, lab(50% 20 -30) 60%, lab(80% -40 20));
  color: color-mix(in oklch, oklch(0.7 0.2 0) 40%, oklch(0.3 0.1 180));
}

/* Relative colors */
.relative-colors {
  --primary: oklch(0.6 0.2 180);
  
  /* Lighten the primary color */
  --primary-light: oklch(from var(--primary) calc(l * 1.2) c h);
  
  /* Darken the primary color */
  --primary-dark: oklch(from var(--primary) calc(l * 0.8) c h);
  
  /* Adjust saturation */
  --primary-muted: oklch(from var(--primary) l calc(c * 0.5) h);
  
  /* Rotate hue */
  --primary-complement: oklch(from var(--primary) l c calc(h + 180));
  
  /* Create transparency */
  --primary-transparent: oklch(from var(--primary) l c h / 0.5);
}

/* Wide gamut colors */
.wide-gamut {
  /* Display P3 color space */
  color: color(display-p3 1 0.5 0);
  background: color(display-p3 0 0.8 0.2);
  
  /* Rec2020 color space */
  border-color: color(rec2020 0.9 0.1 0.1);
}

/* Accessible color functions */
.accessible-colors {
  --base-color: oklch(0.5 0.2 180);
  
  /* Ensure sufficient contrast */
  color: oklch(from var(--base-color) 
    clamp(0.2, calc(l - 0.3), 0.8) c h);
  
  /* Create color schemes */
  --text-primary: oklch(0.2 0.02 180);
  --text-secondary: oklch(0.4 0.01 180);
  --surface: oklch(0.98 0.005 180);
  --surface-variant: oklch(0.95 0.01 180);
}

/* Dynamic color with custom properties */
.dynamic-theming {
  --hue: 210;
  --saturation: 0.15;
  
  /* Primary palette */
  --primary-50: oklch(0.95 calc(var(--saturation) * 0.3) var(--hue));
  --primary-100: oklch(0.9 calc(var(--saturation) * 0.5) var(--hue));
  --primary-500: oklch(0.6 var(--saturation) var(--hue));
  --primary-900: oklch(0.3 calc(var(--saturation) * 0.8) var(--hue));
  
  background: var(--primary-50);
  color: var(--primary-900);
  border-color: var(--primary-500);
}

/* Color contrast and accessibility */
.contrast-aware {
  /* Base colors */
  --bg-color: oklch(0.95 0.01 180);
  --text-color: oklch(0.2 0.02 180);
  
  /* Ensure WCAG AA contrast */
  background: var(--bg-color);
  color: var(--text-color);
}

@media (prefers-color-scheme: dark) {
  .contrast-aware {
    --bg-color: oklch(0.15 0.01 180);
    --text-color: oklch(0.9 0.02 180);
  }
}

/* Gradient enhancements */
.modern-gradients {
  /* Multi-space gradients */
  background: linear-gradient(in oklch, 
    oklch(0.8 0.1 0) 0%, 
    oklch(0.6 0.15 60) 50%, 
    oklch(0.4 0.12 120) 100%);
  
  /* Conic gradients in different color spaces */
  background: conic-gradient(in lab from 45deg, 
    lab(60% 30 -20) 0deg, 
    lab(50% -20 30) 120deg, 
    lab(70% 10 -30) 240deg, 
    lab(60% 30 -20) 360deg);
}`}
              explanation="CSS Color Level 4 provides powerful new color functions and spaces that enable more precise color control and better accessibility through perceptually uniform color spaces."
              accessibilityTips={[
                "Use OKLCH for perceptually uniform color adjustments",
                "Test color combinations for sufficient contrast ratios",
                "Provide fallback colors for browsers without Level 4 support", 
                "Consider color blindness when creating color schemes"
              ]}
            />
          </section>

          {/* CSS Animations */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS Animations Level 1
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              CSS Animations provide keyframe-based animations with precise timing control and complex animation sequences.
            </p>
            <CodeExample
              title="Advanced CSS Animations"
              description="Sophisticated keyframe animations with timing and control"
              htmlCode={`<!-- Advanced Animations Demo -->
<div class="animation-playground">
  <header class="playground-header">
    <h1>CSS Animations Showcase</h1>
    <p>Advanced keyframe animations and timing functions</p>
  </header>

  <!-- Basic animations -->
  <section class="animation-section">
    <h2>Basic Animations</h2>
    <div class="animation-grid">
      <div class="animation-demo">
        <div class="pulse-element">
          <span>Pulse Animation</span>
        </div>
        <h3>Pulse</h3>
        <p>Infinite scaling animation</p>
      </div>

      <div class="animation-demo">
        <div class="bounce-element">
          <span>Bounce</span>
        </div>
        <h3>Bounce</h3>
        <p>Physics-based bouncing</p>
      </div>

      <div class="animation-demo">
        <div class="rotate-element">
          <span>🔄</span>
        </div>
        <h3>Rotation</h3>
        <p>Continuous rotation</p>
      </div>
    </div>
  </section>

  <!-- Complex animations -->
  <section class="animation-section">
    <h2>Complex Animations</h2>
    <div class="complex-animations">
      <div class="loading-spinner">
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
      </div>

      <div class="morphing-shape">
        <div class="shape"></div>
      </div>

      <div class="floating-elements">
        <div class="float-item">💫</div>
        <div class="float-item">✨</div>
        <div class="float-item">🌟</div>
      </div>
    </div>
  </section>

  <!-- Staggered animations -->
  <section class="animation-section">
    <h2>Staggered Animations</h2>
    <div class="stagger-container">
      <div class="stagger-item" style="animation-delay: 0s">1</div>
      <div class="stagger-item" style="animation-delay: 0.1s">2</div>
      <div class="stagger-item" style="animation-delay: 0.2s">3</div>
      <div class="stagger-item" style="animation-delay: 0.3s">4</div>
      <div class="stagger-item" style="animation-delay: 0.4s">5</div>
    </div>
  </section>

  <!-- Interactive animations -->
  <section class="animation-section">
    <h2>Interactive Animations</h2>
    <div class="interactive-animations">
      <div class="hover-card">
        <h3>Hover Me</h3>
        <p>Animation triggers on hover</p>
      </div>

      <button class="animated-button">
        <span class="button-text">Click Animation</span>
        <div class="button-ripple"></div>
      </button>

      <div class="scroll-reveal">
        <h3>Scroll Animation</h3>
        <p>Reveals when scrolled into view</p>
      </div>
    </div>
  </section>

  <!-- Performance optimized -->
  <section class="animation-section">
    <h2>Performance Optimized</h2>
    <div class="performance-demo">
      <div class="gpu-accelerated">
        <h3>GPU Accelerated</h3>
        <p>Uses transform and opacity only</p>
      </div>

      <div class="will-change-element">
        <h3>Will-Change Optimized</h3>
        <p>Properly hints the browser</p>
      </div>

      <div class="hardware-accelerated">
        <h3>Hardware Layer</h3>
        <p>Forces hardware acceleration</p>
      </div>
    </div>
  </section>

  <!-- Custom timing functions -->
  <section class="animation-section">
    <h2>Custom Timing Functions</h2>
    <div class="timing-demo">
      <div class="timing-example ease">
        <div class="moving-box"></div>
        <h4>Ease</h4>
      </div>

      <div class="timing-example bounce">
        <div class="moving-box"></div>
        <h4>Bounce</h4>
      </div>

      <div class="timing-example elastic">
        <div class="moving-box"></div>
        <h4>Elastic</h4>
      </div>
    </div>
  </section>

  <!-- Animation controls -->
  <section class="animation-section">
    <h2>Animation Controls</h2>
    <div class="controls-demo">
      <div class="controllable-animation" id="controllableAnimation">
        <span>Controlled Animation</span>
      </div>
      
      <div class="animation-controls">
        <button onclick="playAnimation()">Play</button>
        <button onclick="pauseAnimation()">Pause</button>
        <button onclick="reverseAnimation()">Reverse</button>
      </div>
    </div>
  </section>
</div>

`}
              cssCode={`/* Basic keyframe animation */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-animation {
  animation: slideIn 0.3s ease-out;
}

/* Complex multi-step animation */
@keyframes complexMove {
  0% {
    transform: translate(0, 0) scale(1) rotate(0deg);
    background-color: #ff0000;
  }
  25% {
    transform: translate(100px, 0) scale(1.2) rotate(90deg);
    background-color: #00ff00;
  }
  50% {
    transform: translate(100px, 100px) scale(1) rotate(180deg);
    background-color: #0000ff;
  }
  75% {
    transform: translate(0, 100px) scale(0.8) rotate(270deg);
    background-color: #ffff00;
  }
  100% {
    transform: translate(0, 0) scale(1) rotate(360deg);
    background-color: #ff0000;
  }
}

.complex-animation {
  animation: complexMove 2s ease-in-out infinite;
}

/* Animation with custom timing functions */
@keyframes bounceIn {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.bounce-animation {
  animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Staggered animations */
@keyframes fadeInUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.staggered-item {
  animation: fadeInUp 0.5s ease-out both;
}

.staggered-item:nth-child(1) { animation-delay: 0.1s; }
.staggered-item:nth-child(2) { animation-delay: 0.2s; }
.staggered-item:nth-child(3) { animation-delay: 0.3s; }
.staggered-item:nth-child(4) { animation-delay: 0.4s; }

/* Loading spinner animation */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spinner {
  animation: spin 1s linear infinite;
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
}

/* Pulse animation */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
}

.pulse-animation {
  animation: pulse 2s ease-in-out infinite;
}

/* Typewriter effect */
@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  0%, 50% { border-color: transparent; }
  51%, 100% { border-color: #333; }
}

.typewriter {
  overflow: hidden;
  border-right: 2px solid #333;
  white-space: nowrap;
  animation: 
    typewriter 3s steps(40) 1s both,
    blink 1s step-end infinite;
}

/* Morphing shapes */
@keyframes morph {
  0%, 100% {
    border-radius: 50%;
    background: #ff6b6b;
  }
  25% {
    border-radius: 0;
    background: #4ecdc4;
  }
  50% {
    border-radius: 50% 0;
    background: #45b7d1;
  }
  75% {
    border-radius: 0 50%;
    background: #96ceb4;
  }
}

.morphing-shape {
  width: 100px;
  height: 100px;
  animation: morph 4s ease-in-out infinite;
}

/* Performance optimized animations */
.gpu-accelerated {
  /* Use transform and opacity for best performance */
  animation: slideInOptimized 0.3s ease-out;
  will-change: transform, opacity;
}

@keyframes slideInOptimized {
  from {
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .respectful-animation {
    animation: none;
  }
  
  .fade-instead {
    animation: fadeIn 0.2s ease-out;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Animation composition */
.multiple-animations {
  animation: 
    slideIn 0.5s ease-out,
    fadeIn 0.3s ease-out,
    scale 0.2s ease-out 0.3s;
}

@keyframes scale {
  from { transform: scale(0.8); }
  to { transform: scale(1); }
}`}
              explanation="CSS Animations enable rich, performant animations using keyframes and precise timing control. Always consider accessibility and performance when implementing animations."
              accessibilityTips={[
                "Respect prefers-reduced-motion for users with vestibular disorders",
                "Use transform and opacity for better performance",
                "Provide alternatives to motion-based feedback",
                "Keep animations under 500ms for UI feedback"
              ]}
            />
          </section>

          {/* CSS Transitions */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS Transitions Level 1
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              CSS Transitions provide smooth changes between property values, perfect for hover effects and state changes.
            </p>
            <CodeExample
              title="Smooth CSS Transitions"
              description="Creating fluid transitions for interactive elements"
              htmlCode={`<!-- CSS Transitions Demo -->
<div class="transitions-showcase">
  <header class="showcase-header">
    <h1>CSS Transitions Gallery</h1>
    <p>Fluid transitions for interactive elements</p>
  </header>

  <!-- Basic transitions -->
  <section class="transition-section">
    <h2>Basic Transitions</h2>
    <div class="basic-transitions">
      <button class="basic-transition">
        Hover for Background Change
      </button>
      
      <div class="multi-transition">
        Hover for Multiple Properties
      </div>
      
      <div class="detailed-transition">
        Complex Timing Example
      </div>
      
      <div class="custom-timing">
        Custom Cubic Bezier
      </div>
    </div>
  </section>

  <!-- Interactive buttons -->
  <section class="transition-section">
    <h2>Button Transitions</h2>
    <div class="button-gallery">
      <button class="button">
        Gradient Button
      </button>
      
      <button class="ripple-button">
        Ripple Effect
      </button>
      
      <button class="transform-button">
        Transform Button
      </button>
    </div>
  </section>

  <!-- Form elements -->
  <section class="transition-section">
    <h2>Form Transitions</h2>
    <div class="form-demo">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" class="form-input" placeholder="Enter your name">
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" class="form-input" placeholder="Enter your email">
      </div>
      
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" class="form-input" placeholder="Enter your message" rows="4"></textarea>
      </div>
    </div>
  </section>

  <!-- Card hover effects -->
  <section class="transition-section">
    <h2>Card Transitions</h2>
    <div class="card-gallery">
      <div class="card">
        <h3>Hover Card 1</h3>
        <p>This card lifts and shadows on hover with smooth transitions.</p>
        <button>Learn More</button>
      </div>
      
      <div class="card">
        <h3>Hover Card 2</h3>
        <p>Multiple properties animate together for a polished effect.</p>
        <button>Discover</button>
      </div>
      
      <div class="card">
        <h3>Hover Card 3</h3>
        <p>Subtle background color changes enhance the interaction.</p>
        <button>Explore</button>
      </div>
    </div>
  </section>

  <!-- Navigation transitions -->
  <section class="transition-section">
    <h2>Navigation Transitions</h2>
    <div class="nav-demo">
      <div class="nav-trigger">
        <span>Hover for Menu</span>
        <nav class="nav-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </section>

  <!-- Progress transitions -->
  <section class="transition-section">
    <h2>Progress Transitions</h2>
    <div class="progress-demo">
      <h3>Skill Progress Bars</h3>
      
      <div class="progress-item">
        <label>HTML/CSS</label>
        <div class="progress-bar">
          <div class="progress-fill" style="--progress: 90%"></div>
        </div>
      </div>
      
      <div class="progress-item">
        <label>JavaScript</label>
        <div class="progress-bar">
          <div class="progress-fill" style="--progress: 85%"></div>
        </div>
      </div>
      
      <div class="progress-item">
        <label>React</label>
        <div class="progress-bar">
          <div class="progress-fill" style="--progress: 78%"></div>
        </div>
      </div>
      
      <button onclick="animateProgress()" class="animate-btn">
        Animate Progress
      </button>
    </div>
  </section>

  <!-- Modal transitions -->
  <section class="transition-section">
    <h2>Modal Transitions</h2>
    <div class="modal-demo">
      <button onclick="openModal()" class="open-modal-btn">
        Open Modal
      </button>
      
      <div id="modal" class="modal-overlay">
        <div class="modal-content">
          <h3>Modal Dialog</h3>
          <p>This modal appears and disappears with smooth transitions.</p>
          <button onclick="closeModal()" class="close-modal-btn">
            Close Modal
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Accessibility considerations -->
  <section class="transition-section">
    <h2>Accessible Transitions</h2>
    <div class="accessibility-demo">
      <div class="respectful-transition">
        <h3>Respects Motion Preferences</h3>
        <p>This element disables transitions when users prefer reduced motion.</p>
      </div>
      
      <div class="fade-only-transition">
        <h3>Fade Only Transition</h3>
        <p>Only uses opacity changes for reduced motion users.</p>
      </div>
    </div>
  </section>
</div>

`}
              cssCode={`/* Basic transitions */
.basic-transition {
  background-color: #3498db;
  transition: background-color 0.3s ease;
}

.basic-transition:hover {
  background-color: #2980b9;
}

/* Multiple property transitions */
.multi-transition {
  background-color: white;
  transform: scale(1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  transition: 
    background-color 0.3s ease,
    transform 0.2s ease,
    box-shadow 0.3s ease;
}

.multi-transition:hover {
  background-color: #f8f9fa;
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Individual transition properties */
.detailed-transition {
  opacity: 1;
  transform: translateY(0);
  
  transition-property: opacity, transform;
  transition-duration: 0.3s, 0.2s;
  transition-timing-function: ease-out, ease-in-out;
  transition-delay: 0s, 0.1s;
}

/* Custom timing functions */
.custom-timing {
  transform: translateX(0);
  
  /* Bouncy effect */
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.custom-timing:hover {
  transform: translateX(20px);
}

/* Button transitions */
.button {
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  transition: all 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
}

.button:active {
  transform: translateY(0);
  box-shadow: 0 5px 10px rgba(102, 126, 234, 0.2);
}

/* Ripple effect with transitions */
.ripple-button {
  position: relative;
  overflow: hidden;
  background: #2196f3;
  border: none;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  
  transition: background 0.3s ease;
}

.ripple-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.ripple-button:active::after {
  width: 300px;
  height: 300px;
}

/* Form input transitions */
.form-input {
  border: 2px solid #e1e5e9;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  
  transition: 
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  background-color: #fafbfc;
}

.form-input:invalid {
  border-color: #e74c3c;
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
}

/* Card hover effects */
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  
  transition: 
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  background-color: #fafafa;
}

/* Navigation menu transitions */
.nav-menu {
  background: white;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: 0;
  transform: translateY(-10px);
  visibility: hidden;
  
  transition: 
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0.2s ease;
}

.nav-trigger:hover .nav-menu {
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
}

/* Progress bar transitions */
.progress-bar {
  background: #ecf0f1;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 4px;
  width: 0%;
  
  transition: width 0.5s ease-out;
}

.progress-fill.complete {
  width: 100%;
}

/* Modal transitions */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  
  transition: 
    opacity 0.3s ease,
    visibility 0.3s ease;
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  background: white;
  border-radius: 12px;
  padding: 32px;
  max-width: 500px;
  width: 90%;
  
  transition: transform 0.3s ease;
}

.modal-overlay.active .modal-content {
  transform: translate(-50%, -50%) scale(1);
}

/* Accessibility considerations */
@media (prefers-reduced-motion: reduce) {
  .respectful-transition {
    transition: none;
  }
  
  .fade-only-transition {
    transition: opacity 0.2s ease;
  }
}`}
              explanation="CSS Transitions create smooth, natural-feeling interactions by animating property changes over time. They're perfect for hover effects and state changes."
              accessibilityTips={[
                "Keep transition durations short (under 300ms) for UI feedback",
                "Provide instant feedback for critical actions",
                "Respect prefers-reduced-motion preferences",
                "Use easing functions that feel natural and comfortable"
              ]}
            />
          </section>

          {/* CSS Transforms */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              CSS Transforms Level 1
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              CSS Transforms enable 2D and 3D transformations including rotation, scaling, translation, and skewing for rich visual effects.
            </p>
            <CodeExample
              title="Advanced CSS Transforms"
              description="2D and 3D transformations for sophisticated visual effects"
              htmlCode={`<!-- CSS Transforms Showcase -->
<div class="transforms-gallery">
  <header class="gallery-header">
    <h1>CSS Transforms Gallery</h1>
    <p>2D and 3D transformations for sophisticated visual effects</p>
  </header>

  <!-- 2D Transforms -->
  <section class="transform-section">
    <h2>2D Transforms</h2>
    <div class="transform-grid">
      <div class="transform-demo">
        <div class="transform-item translate">
          <span>Translate</span>
        </div>
        <h3>Translate</h3>
        <p>Move elements along X and Y axes</p>
      </div>

      <div class="transform-demo">
        <div class="transform-item rotate">
          <span>Rotate</span>
        </div>
        <h3>Rotate</h3>
        <p>Rotate elements around their center</p>
      </div>

      <div class="transform-demo">
        <div class="transform-item scale">
          <span>Scale</span>
        </div>
        <h3>Scale</h3>
        <p>Resize elements proportionally</p>
      </div>

      <div class="transform-demo">
        <div class="transform-item skew">
          <span>Skew</span>
        </div>
        <h3>Skew</h3>
        <p>Distort elements along axes</p>
      </div>
    </div>
  </section>

  <!-- 3D Transforms -->
  <section class="transform-section">
    <h2>3D Transforms</h2>
    <div class="transform-3d-demo">
      <div class="perspective-container">
        <div class="cube-container">
          <div class="cube">
            <div class="face front">Front</div>
            <div class="face back">Back</div>
            <div class="face right">Right</div>
            <div class="face left">Left</div>
            <div class="face top">Top</div>
            <div class="face bottom">Bottom</div>
          </div>
        </div>
        <p>3D Cube (hover to rotate)</p>
      </div>

      <div class="card-flip-container">
        <div class="flip-card">
          <div class="card-inner">
            <div class="card-front">
              <h3>Front Side</h3>
              <p>Hover to flip</p>
            </div>
            <div class="card-back">
              <h3>Back Side</h3>
              <p>This is the reverse</p>
            </div>
          </div>
        </div>
        <p>Card Flip Effect</p>
      </div>

      <div class="carousel-3d">
        <div class="carousel-container">
          <div class="carousel-item">Item 1</div>
          <div class="carousel-item">Item 2</div>
          <div class="carousel-item">Item 3</div>
          <div class="carousel-item">Item 4</div>
          <div class="carousel-item">Item 5</div>
          <div class="carousel-item">Item 6</div>
        </div>
        <p>3D Carousel</p>
      </div>
    </div>
  </section>

  <!-- Complex transformations -->
  <section class="transform-section">
    <h2>Complex Transformations</h2>
    <div class="complex-transforms">
      <div class="matrix-transform">
        <div class="matrix-element">
          <span>Matrix Transform</span>
        </div>
        <h3>Matrix Transform</h3>
        <p>Direct matrix manipulation</p>
      </div>

      <div class="perspective-demo">
        <div class="perspective-element">
          <span>Perspective</span>
        </div>
        <h3>Perspective Effect</h3>
        <p>3D depth simulation</p>
      </div>

      <div class="transform-origin-demo">
        <div class="origin-element">
          <span>Origin</span>
        </div>
        <h3>Transform Origin</h3>
        <p>Custom rotation point</p>
      </div>
    </div>
  </section>

  <!-- Interactive transforms -->
  <section class="transform-section">
    <h2>Interactive Transforms</h2>
    <div class="interactive-transforms">
      <div class="hover-transform">
        <div class="hover-element">
          <h3>Hover Effect</h3>
          <p>Multiple transforms on hover</p>
        </div>
      </div>

      <div class="click-transform">
        <button class="transform-button" onclick="toggleTransform(this)">
          Click to Transform
        </button>
      </div>

      <div class="scroll-transform" id="scrollTransform">
        <h3>Scroll Transform</h3>
        <p>Transforms based on scroll position</p>
      </div>
    </div>
  </section>

  <!-- Performance considerations -->
  <section class="transform-section">
    <h2>Performance Optimized</h2>
    <div class="performance-transforms">
      <div class="gpu-transform">
        <h3>GPU Accelerated</h3>
        <p>Uses transform3d for hardware acceleration</p>
      </div>

      <div class="composited-transform">
        <h3>Composited Layer</h3>
        <p>Forces layer creation</p>
      </div>

      <div class="will-change-transform">
        <h3>Will-Change Optimized</h3>
        <p>Hints browser about upcoming changes</p>
      </div>
    </div>
  </section>

  <!-- Animation combinations -->
  <section class="transform-section">
    <h2>Transform Animations</h2>
    <div class="animated-transforms">
      <div class="spinning-cube">
        <div class="spinner-cube">
          <div class="cube-face"></div>
          <div class="cube-face"></div>
          <div class="cube-face"></div>
          <div class="cube-face"></div>
          <div class="cube-face"></div>
          <div class="cube-face"></div>
        </div>
        <h3>Spinning Cube</h3>
      </div>

      <div class="floating-sphere">
        <div class="sphere"></div>
        <h3>Floating Animation</h3>
      </div>

      <div class="morphing-shape">
        <div class="morph-element"></div>
        <h3>Morphing Shape</h3>
      </div>
    </div>
  </section>

  <!-- Accessibility -->
  <section class="transform-section">
    <h2>Accessible Transforms</h2>
    <div class="accessible-transforms">
      <div class="reduced-motion-transform">
        <h3>Respects Motion Preferences</h3>
        <p>Reduces or disables transforms for sensitive users</p>
      </div>
      
      <div class="focus-safe-transform">
        <button class="focus-button">
          Focus-Safe Transform
        </button>
        <p>Maintains focus visibility during transforms</p>
      </div>
    </div>
  </section>
</div>

`}
              cssCode={`/* Basic 2D transforms */
.transform-translate {
  transform: translate(50px, 100px);    /* Move right 50px, down 100px */
}

.transform-scale {
  transform: scale(1.5);                /* Scale to 150% */
  transform: scale(2, 0.5);            /* Scale X by 2, Y by 0.5 */
}

.transform-rotate {
  transform: rotate(45deg);             /* Rotate 45 degrees */
}

.transform-skew {
  transform: skew(15deg, 5deg);         /* Skew X by 15deg, Y by 5deg */
}

/* Combined 2D transforms */
.combined-2d {
  transform: translate(50px, 20px) rotate(30deg) scale(1.2);
}

/* 3D transforms */
.transform-3d {
  transform-style: preserve-3d;         /* Enable 3D context */
  perspective: 1000px;                  /* Set perspective */
}

.rotate-3d {
  transform: rotateX(45deg) rotateY(30deg) rotateZ(15deg);
}

.translate-3d {
  transform: translate3d(50px, 100px, 75px);
}

/* Perspective and 3D scenes */
.perspective-container {
  perspective: 800px;
  perspective-origin: 50% 50%;
}

.card-3d {
  width: 300px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}

.card-3d:hover {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
}

.card-front {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card-back {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  transform: rotateY(180deg);
}

/* Transform origins */
.transform-origins {
  /* Default origin is center (50% 50%) */
  transform-origin: top left;           /* Rotate from top-left corner */
  transform: rotate(45deg);
}

.scale-from-center {
  transform-origin: center;
  transform: scale(1.5);
}

.rotate-from-bottom {
  transform-origin: bottom center;
  transform: rotate(30deg);
}

/* 3D cube example */
.cube-container {
  perspective: 1000px;
  width: 200px;
  height: 200px;
  margin: 100px auto;
}

.cube {
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  animation: rotateCube 10s infinite linear;
}

.cube-face {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid #333;
  opacity: 0.8;
}

.cube-face.front  { background: #ff0000; transform: rotateY(0deg) translateZ(100px); }
.cube-face.back   { background: #00ff00; transform: rotateY(180deg) translateZ(100px); }
.cube-face.right  { background: #0000ff; transform: rotateY(90deg) translateZ(100px); }
.cube-face.left   { background: #ffff00; transform: rotateY(-90deg) translateZ(100px); }
.cube-face.top    { background: #ff00ff; transform: rotateX(90deg) translateZ(100px); }
.cube-face.bottom { background: #00ffff; transform: rotateX(-90deg) translateZ(100px); }

@keyframes rotateCube {
  0% { transform: rotateX(0) rotateY(0); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

/* Parallax effects */
.parallax-container {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 1px;
}

.parallax-layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.parallax-back {
  transform: translateZ(-1px) scale(2);
}

.parallax-base {
  transform: translateZ(0);
}

/* Matrix transformations */
.matrix-transform {
  /* matrix(scaleX, skewY, skewX, scaleY, translateX, translateY) */
  transform: matrix(1.2, 0.2, -0.1, 1.1, 50, 30);
}

.matrix-3d-transform {
  /* matrix3d() - 4x4 transformation matrix */
  transform: matrix3d(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    50, 100, 0, 1
  );
}

/* Interactive 3D cards */
.interactive-card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.interactive-card:hover .card-inner {
  transform: rotateY(180deg);
}

/* Transform performance optimization */
.optimized-transform {
  /* Force hardware acceleration */
  transform: translate3d(0, 0, 0);
  will-change: transform;
}

/* Responsive transforms */
@media (max-width: 768px) {
  .mobile-transform {
    transform: scale(0.8) translate(-10%, -10%);
  }
}

/* Transform animations with keyframes */
@keyframes flipCard {
  0% { transform: perspective(400px) rotateY(0); }
  100% { transform: perspective(400px) rotateY(-180deg); }
}

.animated-flip {
  animation: flipCard 2s ease-in-out infinite alternate;
}

/* Complex 3D transforms */
.complex-3d {
  transform: 
    perspective(800px)
    translate3d(50px, 100px, 200px)
    rotateX(30deg)
    rotateY(45deg)
    scale3d(1.2, 1.2, 1.2);
}`}
              explanation="CSS Transforms provide powerful 2D and 3D transformation capabilities that are hardware accelerated for smooth performance. They're essential for modern interactive designs."
              accessibilityTips={[
                "Use transforms sparingly - complex 3D effects can cause motion sickness",
                "Provide options to disable animations for sensitive users",
                "Ensure transformed content remains accessible to screen readers",
                "Test transform effects across different devices and browsers"
              ]}
            />
          </section>

          {/* Best Practices */}
          <section className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Visual Effects & Animations Best Practices
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Performance & Accessibility
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Use transform and opacity for best animation performance</li>
                  <li>• Respect prefers-reduced-motion user preferences</li>
                  <li>• Keep animations under 500ms for UI feedback</li>
                  <li>• Use will-change property judiciously</li>
                  <li>• Test on lower-end devices for performance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Design & Implementation
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Use modern color spaces for better color accuracy</li>
                  <li>• Provide meaningful animations that enhance UX</li>
                  <li>• Test color combinations for accessibility compliance</li>
                  <li>• Use progressive enhancement for modern features</li>
                  <li>• Consider battery life impact of complex animations</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
