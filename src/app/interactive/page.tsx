import { CodeExample } from "@/components/CodeExample";

export default function InteractivePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Interactive Elements
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl">
            Learn about HTML elements that provide interactivity and user engagement. 
            These elements help create dynamic, accessible user interfaces.
          </p>
        </header>

        <div className="space-y-12">
          {/* Anchor Links */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              The &lt;a&gt; Element (Anchor Links)
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Anchor elements create hyperlinks to other pages, sections, files, email addresses, or any other URL.
            </p>
            <CodeExample
              title="Different Types of Links"
              description="Various ways to use anchor elements for navigation and interaction"
              htmlCode={`<!-- External links -->
<p>
  Visit the <a href="https://html.spec.whatwg.org/" 
               target="_blank" 
               rel="noopener noreferrer">WHATWG HTML Specification</a> 
  for complete HTML documentation.
</p>

<!-- Internal page navigation -->
<nav aria-label="Table of contents">
  <ul>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#advanced-topics">Advanced Topics</a></li>
    <li><a href="#conclusion">Conclusion</a></li>
  </ul>
</nav>

<!-- Email and telephone links -->
<div class="contact-info">
  <p>Contact us:</p>
  <ul>
    <li>
      <a href="mailto:support@example.com?subject=Support Request">
        Email Support
      </a>
    </li>
    <li>
      <a href="tel:+1-555-123-4567">
        Call us at (555) 123-4567
      </a>
    </li>
    <li>
      <a href="sms:+1-555-123-4567">
        Send SMS
      </a>
    </li>
  </ul>
</div>

<!-- Download links -->
<div class="downloads">
  <h3>Download Resources</h3>
  <ul>
    <li>
      <a href="/files/user-manual.pdf" 
         download="user-manual.pdf"
         aria-describedby="pdf-info">
        User Manual (PDF)
      </a>
      <span id="pdf-info" class="file-info">(2.3 MB)</span>
    </li>
    <li>
      <a href="/files/template.docx" download>
        Template Document
      </a>
    </li>
  </ul>
</div>

<!-- Skip links for accessibility -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<!-- Links with descriptive text -->
<p>
  <a href="/articles/web-accessibility-guide" 
     aria-describedby="article-description">
    Web Accessibility Complete Guide
  </a>
</p>
<p id="article-description" class="description">
  A comprehensive guide covering WCAG 2.1 guidelines, 
  testing tools, and implementation strategies.
</p>`}
              explanation="Use descriptive link text that makes sense out of context. Add rel='noopener noreferrer' for external links and proper ARIA labels for better accessibility."
              accessibilityTips={[
                "Use descriptive link text that explains the destination",
                "Add rel='noopener noreferrer' for external links opening in new tabs",
                "Use skip links to help keyboard users navigate efficiently",
                "Avoid 'click here' or 'read more' as link text"
              ]}
            />
          </section>

          {/* Button Element */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Interactive Buttons
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Buttons trigger actions and should be used for interactions that don't navigate to new pages.
            </p>
            <CodeExample
              title="Button Examples and States"
              description="Different button types and interactive states"
              htmlCode={`<!-- Basic action buttons -->
<div class="button-group">
  <button type="button" class="btn-primary" onclick="saveDocument()">
    Save Document
  </button>
  
  <button type="button" class="btn-secondary" onclick="cancelEdit()">
    Cancel
  </button>
  
  <button type="button" class="btn-danger" onclick="deleteItem()" 
          aria-describedby="delete-warning">
    Delete Item
  </button>
  <div id="delete-warning" class="warning-text">
    This action cannot be undone
  </div>
</div>

<!-- Toggle button -->
<button type="button" 
        class="btn-toggle" 
        aria-pressed="false"
        onclick="toggleDarkMode(this)">
  <span class="toggle-text">Dark Mode</span>
  <span class="toggle-indicator" aria-hidden="true"></span>
</button>

<!-- Button with loading state -->
<button type="submit" 
        id="submit-btn"
        class="btn-primary" 
        aria-describedby="submit-status">
  <span class="btn-text">Submit Application</span>
  <span class="loading-spinner" aria-hidden="true" hidden></span>
</button>
<div id="submit-status" aria-live="polite" class="status-message">
  <!-- Status updates appear here -->
</div>

<!-- Dropdown menu button -->
<div class="dropdown">
  <button type="button" 
          class="btn-dropdown" 
          aria-expanded="false"
          aria-haspopup="true"
          onclick="toggleDropdown(this)">
    Options
    <svg class="dropdown-icon" aria-hidden="true">
      <!-- Chevron icon -->
    </svg>
  </button>
  
  <ul class="dropdown-menu" hidden>
    <li><button onclick="editItem()">Edit</button></li>
    <li><button onclick="duplicateItem()">Duplicate</button></li>
    <li><button onclick="shareItem()">Share</button></li>
    <li role="separator"></li>
    <li><button onclick="deleteItem()" class="danger">Delete</button></li>
  </ul>
</div>

<!-- Icon button with accessible label -->
<button type="button" 
        class="btn-icon" 
        aria-label="Close dialog"
        onclick="closeDialog()">
  <svg aria-hidden="true">
    <!-- Close icon -->
  </svg>
</button>`}
              explanation="Buttons should have clear labels, appropriate ARIA attributes for state, and visual feedback for different states (hover, active, disabled)."
              accessibilityTips={[
                "Use aria-pressed for toggle buttons",
                "Include aria-expanded for dropdown buttons",
                "Provide aria-label for icon-only buttons",
                "Use aria-live regions for dynamic status messages"
              ]}
            />
          </section>

          {/* Details and Summary */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Details and Summary Elements
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              The details element creates a disclosure widget where information is visible only when toggled open.
            </p>
            <CodeExample
              title="Collapsible Content Sections"
              description="Using details and summary for expandable content"
              htmlCode={`<!-- Basic FAQ section -->
<section class="faq">
  <h2>Frequently Asked Questions</h2>
  
  <details>
    <summary>What is semantic HTML?</summary>
    <p>
      Semantic HTML uses HTML elements according to their intended meaning 
      rather than their appearance. This improves accessibility, SEO, and 
      code maintainability.
    </p>
  </details>
  
  <details>
    <summary>Why is accessibility important?</summary>
    <div>
      <p>Accessibility ensures that:</p>
      <ul>
        <li>People with disabilities can use your website</li>
        <li>Your site works with assistive technologies</li>
        <li>You reach a wider audience</li>
        <li>You comply with legal requirements</li>
      </ul>
    </div>
  </details>
  
  <details>
    <summary>How do I test for accessibility?</summary>
    <div>
      <p>You can test accessibility using:</p>
      <ol>
        <li>Automated tools like axe or WAVE</li>
        <li>Manual keyboard navigation testing</li>
        <li>Screen reader testing</li>
        <li>Color contrast analyzers</li>
      </ol>
      <p>
        <a href="/accessibility-testing-guide">
          Read our complete testing guide
        </a>
      </p>
    </div>
  </details>
</section>

<!-- Advanced options panel -->
<details class="settings-panel">
  <summary>Advanced Settings</summary>
  
  <div class="settings-content">
    <fieldset>
      <legend>Display Options</legend>
      
      <div class="checkbox-group">
        <input type="checkbox" id="show-tooltips">
        <label for="show-tooltips">Show tooltips</label>
      </div>
      
      <div class="checkbox-group">
        <input type="checkbox" id="high-contrast">
        <label for="high-contrast">High contrast mode</label>
      </div>
      
      <div class="form-group">
        <label for="font-size">Font size</label>
        <select id="font-size">
          <option value="small">Small</option>
          <option value="medium" selected>Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
    </fieldset>
  </div>
</details>

<!-- Nested details for complex structures -->
<details>
  <summary>Web Development Resources</summary>
  
  <details>
    <summary>HTML Resources</summary>
    <ul>
      <li><a href="#">HTML Living Standard</a></li>
      <li><a href="#">MDN HTML Guide</a></li>
      <li><a href="#">HTML Validator</a></li>
    </ul>
  </details>
  
  <details>
    <summary>CSS Resources</summary>
    <ul>
      <li><a href="#">CSS Specifications</a></li>
      <li><a href="#">CSS Grid Guide</a></li>
      <li><a href="#">Flexbox Guide</a></li>
    </ul>
  </details>
  
  <details>
    <summary>JavaScript Resources</summary>
    <ul>
      <li><a href="#">ECMAScript Specification</a></li>
      <li><a href="#">MDN JavaScript Reference</a></li>
      <li><a href="#">JavaScript Testing</a></li>
    </ul>
  </details>
</details>`}
              explanation="The details element provides native browser support for collapsible content without JavaScript. The summary element acts as the clickable header."
              accessibilityTips={[
                "Summary element should clearly describe the hidden content",
                "Details/summary provides keyboard accessibility automatically",
                "Screen readers announce the expanded/collapsed state",
                "Can be nested for complex hierarchical content"
              ]}
            />
          </section>

          {/* Dialog Element */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              The &lt;dialog&gt; Element
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              The dialog element represents a modal or non-modal dialog box or popup window.
            </p>
            <CodeExample
              title="Modal Dialog Examples"
              description="Creating accessible modal dialogs with the dialog element"
              htmlCode={`<!-- Confirmation dialog -->
<dialog id="confirm-dialog" aria-labelledby="confirm-title" aria-describedby="confirm-message">
  <div class="dialog-header">
    <h2 id="confirm-title">Confirm Action</h2>
    <button type="button" 
            class="dialog-close" 
            aria-label="Close dialog"
            onclick="closeDialog('confirm-dialog')">
      ×
    </button>
  </div>
  
  <div class="dialog-content">
    <p id="confirm-message">
      Are you sure you want to delete this item? This action cannot be undone.
    </p>
  </div>
  
  <div class="dialog-actions">
    <button type="button" 
            class="btn-danger" 
            onclick="confirmDelete()">
      Delete
    </button>
    <button type="button" 
            class="btn-secondary" 
            onclick="closeDialog('confirm-dialog')">
      Cancel
    </button>
  </div>
</dialog>

<!-- Form dialog -->
<dialog id="add-contact-dialog" aria-labelledby="contact-title">
  <form method="dialog" class="dialog-form">
    <div class="dialog-header">
      <h2 id="contact-title">Add New Contact</h2>
      <button type="button" 
              class="dialog-close" 
              aria-label="Close dialog"
              onclick="closeDialog('add-contact-dialog')">
        ×
      </button>
    </div>
    
    <div class="dialog-content">
      <div class="form-group">
        <label for="contact-name">Name *</label>
        <input type="text" id="contact-name" name="name" required>
      </div>
      
      <div class="form-group">
        <label for="contact-email">Email</label>
        <input type="email" id="contact-email" name="email">
      </div>
      
      <div class="form-group">
        <label for="contact-phone">Phone</label>
        <input type="tel" id="contact-phone" name="phone">
      </div>
    </div>
    
    <div class="dialog-actions">
      <button type="submit" class="btn-primary">
        Add Contact
      </button>
      <button type="button" 
              class="btn-secondary"
              onclick="closeDialog('add-contact-dialog')">
        Cancel
      </button>
    </div>
  </form>
</dialog>

<!-- Non-modal dialog (alert/notification) -->
<dialog id="notification-dialog" 
        aria-live="polite"
        aria-labelledby="notification-title">
  <div class="notification-content">
    <div class="notification-icon" aria-hidden="true">✓</div>
    <div class="notification-text">
      <h3 id="notification-title">Success!</h3>
      <p>Your changes have been saved successfully.</p>
    </div>
    <button type="button" 
            class="notification-close"
            aria-label="Dismiss notification"
            onclick="closeDialog('notification-dialog')">
      ×
    </button>
  </div>
</dialog>

<!-- JavaScript to open dialogs -->
<script>
function openDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  dialog.showModal(); // For modal behavior
  // Use dialog.show() for non-modal
}

function closeDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  dialog.close();
}

// Open dialog buttons
</script>

<div class="demo-buttons">
  <button onclick="openDialog('confirm-dialog')" class="btn-primary">
    Show Confirmation Dialog
  </button>
  
  <button onclick="openDialog('add-contact-dialog')" class="btn-secondary">
    Add Contact
  </button>
  
  <button onclick="openDialog('notification-dialog')" class="btn-success">
    Show Notification
  </button>
</div>`}
              explanation="The dialog element provides semantic meaning and browser behavior for modal and non-modal dialogs, with automatic focus management and backdrop clicking."
              accessibilityTips={[
                "Use showModal() for modal dialogs, show() for non-modal",
                "Include aria-labelledby and aria-describedby attributes",
                "Provide close buttons with clear labels",
                "Focus management is handled automatically by the browser"
              ]}
            />
          </section>

          {/* Input Types */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Interactive Input Elements
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Special input types that provide rich interaction beyond basic text input.
            </p>
            <CodeExample
              title="Advanced Input Interactions"
              description="Interactive input elements for better user experience"
              htmlCode={`<!-- File upload with drag and drop -->
<div class="file-upload-area">
  <label for="file-upload" class="file-upload-label">
    <input type="file" 
           id="file-upload" 
           name="files" 
           multiple 
           accept=".pdf,.doc,.docx,.jpg,.png"
           aria-describedby="file-help">
    <span class="upload-text">
      Drop files here or click to browse
    </span>
    <span class="upload-icon" aria-hidden="true">📎</span>
  </label>
  <div id="file-help" class="help-text">
    Accepted formats: PDF, DOC, DOCX, JPG, PNG (max 10MB each)
  </div>
</div>

<!-- Range slider with output -->
<div class="range-group">
  <label for="volume-control">Volume Level</label>
  <input type="range" 
         id="volume-control" 
         name="volume" 
         min="0" 
         max="100" 
         value="50"
         oninput="updateVolumeDisplay(this.value)"
         aria-describedby="volume-display">
  <output id="volume-display" for="volume-control" aria-live="polite">
    50%
  </output>
</div>

<!-- Color picker with preview -->
<div class="color-picker-group">
  <label for="theme-color">Theme Color</label>
  <div class="color-input-wrapper">
    <input type="color" 
           id="theme-color" 
           name="themeColor" 
           value="#3b82f6"
           oninput="updateColorPreview(this.value)">
    <div class="color-preview" 
         id="color-preview"
         aria-live="polite"
         style="background-color: #3b82f6;">
      #3b82f6
    </div>
  </div>
</div>

<!-- Search with suggestions -->
<div class="search-group">
  <label for="product-search">Search Products</label>
  <input type="search" 
         id="product-search" 
         name="search" 
         placeholder="Type to search..."
         list="product-suggestions"
         autocomplete="off"
         oninput="handleSearchInput(this.value)">
  
  <datalist id="product-suggestions">
    <option value="HTML Semantics Guide">
    <option value="CSS Grid Tutorial">
    <option value="JavaScript Fundamentals">
    <option value="Web Accessibility Handbook">
  </datalist>
</div>

<!-- Date and time inputs -->
<div class="datetime-group">
  <div class="form-group">
    <label for="appointment-date">Appointment Date</label>
    <input type="date" 
           id="appointment-date" 
           name="date" 
           min="2024-11-16"
           onchange="updateAvailableTimes(this.value)">
  </div>
  
  <div class="form-group">
    <label for="appointment-time">Appointment Time</label>
    <input type="time" 
           id="appointment-time" 
           name="time" 
           step="900"
           aria-describedby="time-help">
    <div id="time-help" class="help-text">
      Available times in 15-minute intervals
    </div>
  </div>
</div>

<!-- Checkbox and radio with custom styling -->
<fieldset class="checkbox-group">
  <legend>Notification Preferences</legend>
  
  <div class="checkbox-item">
    <input type="checkbox" 
           id="email-notifications" 
           name="notifications" 
           value="email"
           aria-describedby="email-desc">
    <label for="email-notifications">Email notifications</label>
    <div id="email-desc" class="option-description">
      Receive updates via email
    </div>
  </div>
  
  <div class="checkbox-item">
    <input type="checkbox" 
           id="sms-notifications" 
           name="notifications" 
           value="sms">
    <label for="sms-notifications">SMS notifications</label>
  </div>
</fieldset>`}
              explanation="Modern input types provide better user experience with native validation, appropriate keyboards on mobile devices, and built-in accessibility features."
              accessibilityTips={[
                "Use appropriate input types for better mobile experience",
                "Provide clear labels and help text for complex inputs",
                "Use output elements to display dynamic values",
                "Test input interactions with keyboard and screen readers"
              ]}
            />
          </section>

          {/* Best Practices */}
          <section className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Interactive Elements Best Practices
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Usability Guidelines
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Use descriptive link text and button labels</li>
                  <li>• Provide visual feedback for all interactive states</li>
                  <li>• Ensure interactive elements are large enough to click</li>
                  <li>• Use consistent interaction patterns throughout</li>
                  <li>• Test with keyboard-only navigation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Accessibility Standards
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Include proper ARIA attributes for dynamic content</li>
                  <li>• Use semantic elements over generic divs with click handlers</li>
                  <li>• Provide alternative text for icon-only buttons</li>
                  <li>• Implement focus management for modal dialogs</li>
                  <li>• Test with screen readers and assistive technologies</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
