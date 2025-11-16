import { CodeExample } from "@/components/CodeExample";

export default function FormsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Form Elements & Semantics
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl">
            Learn about semantic form elements that create accessible and user-friendly forms. 
            Proper form markup is crucial for accessibility and usability.
          </p>
        </header>

        <div className="space-y-12">
          {/* Form Element */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              The &lt;form&gt; Element
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              The form element represents a document section containing interactive controls for submitting information.
            </p>
            <CodeExample
              title="Basic Form Structure"
              description="A properly structured form with semantic elements"
              htmlCode={`<form action="/contact" method="POST" novalidate>
  <fieldset>
    <legend>Contact Information</legend>
    
    <div class="form-group">
      <label for="name">Full Name *</label>
      <input type="text" id="name" name="name" required 
             aria-describedby="name-help">
      <div id="name-help" class="help-text">
        Please enter your full name as you'd like to be addressed
      </div>
    </div>
    
    <div class="form-group">
      <label for="email">Email Address *</label>
      <input type="email" id="email" name="email" required
             aria-describedby="email-error">
      <div id="email-error" class="error-message" aria-live="polite">
        <!-- Error messages appear here -->
      </div>
    </div>
  </fieldset>
  
  <fieldset>
    <legend>Message Details</legend>
    
    <div class="form-group">
      <label for="subject">Subject</label>
      <select id="subject" name="subject">
        <option value="">Please select a topic</option>
        <option value="general">General Inquiry</option>
        <option value="support">Technical Support</option>
        <option value="billing">Billing Question</option>
      </select>
    </div>
    
    <div class="form-group">
      <label for="message">Message *</label>
      <textarea id="message" name="message" required rows="5"
                placeholder="Please describe your inquiry in detail"></textarea>
    </div>
  </fieldset>
  
  <div class="form-actions">
    <button type="submit" class="btn-primary">Send Message</button>
    <button type="reset" class="btn-secondary">Clear Form</button>
  </div>
</form>`}
              explanation="This form uses proper semantic structure with fieldsets to group related fields, labels associated with inputs, and ARIA attributes for accessibility."
              accessibilityTips={[
                "Every input must have an associated label",
                "Use fieldset and legend to group related form controls",
                "Include aria-describedby for help text and error messages",
                "Use aria-live regions for dynamic error messages"
              ]}
            />
          </section>

          {/* Input Types */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Input Element Types
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Different input types provide better user experience and built-in validation on modern devices.
            </p>
            <CodeExample
              title="Various Input Types"
              description="Using the right input type for different data"
              htmlCode={`<form>
  <!-- Text inputs -->
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" id="username" name="username" 
           autocomplete="username" required>
  </div>
  
  <!-- Email with validation -->
  <div class="form-group">
    <label for="user-email">Email</label>
    <input type="email" id="user-email" name="email" 
           autocomplete="email" required>
  </div>
  
  <!-- Password -->
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" id="password" name="password" 
           autocomplete="current-password" required
           minlength="8" aria-describedby="password-help">
    <div id="password-help" class="help-text">
      Password must be at least 8 characters long
    </div>
  </div>
  
  <!-- Phone number -->
  <div class="form-group">
    <label for="phone">Phone Number</label>
    <input type="tel" id="phone" name="phone" 
           autocomplete="tel" placeholder="(555) 123-4567">
  </div>
  
  <!-- URL -->
  <div class="form-group">
    <label for="website">Website</label>
    <input type="url" id="website" name="website" 
           placeholder="https://example.com">
  </div>
  
  <!-- Number with constraints -->
  <div class="form-group">
    <label for="age">Age</label>
    <input type="number" id="age" name="age" 
           min="13" max="120" step="1">
  </div>
  
  <!-- Date -->
  <div class="form-group">
    <label for="birthdate">Birth Date</label>
    <input type="date" id="birthdate" name="birthdate" 
           autocomplete="bday">
  </div>
  
  <!-- Range slider -->
  <div class="form-group">
    <label for="satisfaction">Satisfaction Level</label>
    <input type="range" id="satisfaction" name="satisfaction" 
           min="1" max="5" value="3" 
           aria-describedby="satisfaction-value">
    <output id="satisfaction-value" for="satisfaction">3</output>
  </div>
  
  <!-- Color picker -->
  <div class="form-group">
    <label for="theme-color">Preferred Theme Color</label>
    <input type="color" id="theme-color" name="themeColor" 
           value="#3b82f6">
  </div>
</form>`}
              explanation="Using specific input types improves user experience with appropriate keyboard layouts, validation, and native controls on mobile devices."
              accessibilityTips={[
                "Use autocomplete attributes to help password managers",
                "Provide clear validation messages and constraints",
                "Include help text for complex input requirements",
                "Test input types across different devices and browsers"
              ]}
            />
          </section>

          {/* Select and Options */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Select and Option Elements
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Select elements provide dropdown menus for choosing from multiple options.
            </p>
            <CodeExample
              title="Select Dropdown Examples"
              description="Different approaches to select elements"
              htmlCode={`<!-- Basic select -->
<div class="form-group">
  <label for="country">Country</label>
  <select id="country" name="country" required>
    <option value="">Please select your country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
    <option value="au">Australia</option>
  </select>
</div>

<!-- Grouped options -->
<div class="form-group">
  <label for="timezone">Time Zone</label>
  <select id="timezone" name="timezone">
    <option value="">Select time zone</option>
    
    <optgroup label="North America">
      <option value="est">Eastern Standard Time</option>
      <option value="cst">Central Standard Time</option>
      <option value="mst">Mountain Standard Time</option>
      <option value="pst">Pacific Standard Time</option>
    </optgroup>
    
    <optgroup label="Europe">
      <option value="gmt">Greenwich Mean Time</option>
      <option value="cet">Central European Time</option>
      <option value="eet">Eastern European Time</option>
    </optgroup>
  </select>
</div>

<!-- Multiple selection -->
<div class="form-group">
  <label for="skills">Skills (Hold Ctrl/Cmd to select multiple)</label>
  <select id="skills" name="skills" multiple size="5" 
          aria-describedby="skills-help">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
    <option value="react">React</option>
    <option value="vue">Vue.js</option>
    <option value="angular">Angular</option>
    <option value="node">Node.js</option>
    <option value="python">Python</option>
  </select>
  <div id="skills-help" class="help-text">
    Hold Ctrl (Windows) or Cmd (Mac) to select multiple skills
  </div>
</div>`}
              explanation="Select elements should always have a default option, use optgroup for categorization, and provide clear instructions for multiple selections."
              accessibilityTips={[
                "Always provide a default 'Please select' option",
                "Use optgroup to organize related options",
                "For multiple selections, provide clear instructions",
                "Consider using checkboxes for multiple selections instead"
              ]}
            />
          </section>

          {/* Textarea */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              The &lt;textarea&gt; Element
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Textarea elements allow users to input multi-line text with proper sizing and constraints.
            </p>
            <CodeExample
              title="Textarea Examples"
              description="Multi-line text input with proper configuration"
              htmlCode={`<!-- Basic textarea -->
<div class="form-group">
  <label for="comments">Additional Comments</label>
  <textarea id="comments" name="comments" rows="4" cols="50"
            placeholder="Please share any additional thoughts or feedback"
            aria-describedby="comments-help"></textarea>
  <div id="comments-help" class="help-text">
    Optional: Share any additional information that might be helpful
  </div>
</div>

<!-- Textarea with character limit -->
<div class="form-group">
  <label for="bio">Biography</label>
  <textarea id="bio" name="bio" rows="6" maxlength="500"
            aria-describedby="bio-counter" placeholder="Tell us about yourself"></textarea>
  <div id="bio-counter" class="character-counter">
    <span id="bio-count">0</span>/500 characters
  </div>
</div>

<!-- Required textarea with validation -->
<div class="form-group">
  <label for="description">Product Description *</label>
  <textarea id="description" name="description" rows="5" required
            minlength="10" maxlength="1000"
            aria-describedby="description-error"
            placeholder="Provide a detailed description of your product"></textarea>
  <div id="description-error" class="error-message" aria-live="polite">
    <!-- Validation messages appear here -->
  </div>
  <div class="help-text">
    Please provide between 10 and 1000 characters
  </div>
</div>`}
              explanation="Textarea elements should specify appropriate rows/cols or use CSS for sizing, include character limits when needed, and provide helpful placeholder text."
              accessibilityTips={[
                "Use rows and cols attributes or CSS to set appropriate size",
                "Include character counters for length-limited fields",
                "Provide clear validation messages for required fields",
                "Use placeholder text to give examples of expected input"
              ]}
            />
          </section>

          {/* Button Elements */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Button Elements
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Button elements provide clear actions and should be used appropriately based on their function.
            </p>
            <CodeExample
              title="Button Types and Usage"
              description="Different button types for different actions"
              htmlCode={`<form>
  <!-- Submit button (default type) -->
  <button type="submit" class="btn-primary">
    Submit Form
  </button>
  
  <!-- Reset button -->
  <button type="reset" class="btn-secondary"
          onclick="return confirm('Are you sure you want to clear all fields?')">
    Reset Form
  </button>
  
  <!-- Generic button for JavaScript actions -->
  <button type="button" class="btn-outline" onclick="saveAsDraft()">
    Save as Draft
  </button>
  
  <!-- Button with icon -->
  <button type="submit" class="btn-primary">
    <svg class="icon" aria-hidden="true">
      <!-- Icon SVG -->
    </svg>
    Send Message
  </button>
  
  <!-- Disabled button -->
  <button type="submit" disabled aria-describedby="submit-disabled-reason">
    Submit Application
  </button>
  <div id="submit-disabled-reason" class="help-text">
    Please complete all required fields to submit
  </div>
</form>

<!-- Alternative: input buttons -->
<form>
  <input type="submit" value="Submit with Input" class="btn-primary">
  <input type="reset" value="Reset with Input" class="btn-secondary">
  <input type="button" value="Custom Action" class="btn-outline" onclick="customAction()">
</form>`}
              explanation="Use button elements for better semantic meaning and styling flexibility. Always specify the type attribute to avoid unexpected behavior."
              accessibilityTips={[
                "Always specify button type (submit, reset, or button)",
                "Use descriptive button text that explains the action",
                "Provide explanations for disabled buttons",
                "Ensure buttons are large enough for touch interfaces"
              ]}
            />
          </section>

          {/* Fieldset and Legend */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Fieldset and Legend Elements
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Fieldset groups related form controls, and legend provides a caption for the group.
            </p>
            <CodeExample
              title="Grouping Form Controls"
              description="Using fieldset and legend for logical form organization"
              htmlCode={`<form>
  <!-- Contact information group -->
  <fieldset>
    <legend>Contact Information</legend>
    
    <div class="form-group">
      <label for="first-name">First Name *</label>
      <input type="text" id="first-name" name="firstName" required>
    </div>
    
    <div class="form-group">
      <label for="last-name">Last Name *</label>
      <input type="text" id="last-name" name="lastName" required>
    </div>
    
    <div class="form-group">
      <label for="contact-email">Email Address *</label>
      <input type="email" id="contact-email" name="email" required>
    </div>
  </fieldset>
  
  <!-- Shipping address group -->
  <fieldset>
    <legend>Shipping Address</legend>
    
    <div class="form-group">
      <label for="address">Street Address</label>
      <input type="text" id="address" name="address" autocomplete="street-address">
    </div>
    
    <div class="form-row">
      <div class="form-group">
        <label for="city">City</label>
        <input type="text" id="city" name="city" autocomplete="address-level2">
      </div>
      
      <div class="form-group">
        <label for="state">State</label>
        <select id="state" name="state" autocomplete="address-level1">
          <option value="">Select State</option>
          <option value="CA">California</option>
          <option value="NY">New York</option>
          <option value="TX">Texas</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="zip">ZIP Code</label>
        <input type="text" id="zip" name="zip" autocomplete="postal-code">
      </div>
    </div>
  </fieldset>
  
  <!-- Radio button group -->
  <fieldset>
    <legend>Preferred Contact Method</legend>
    
    <div class="radio-group">
      <input type="radio" id="contact-email-radio" name="contactMethod" value="email">
      <label for="contact-email-radio">Email</label>
    </div>
    
    <div class="radio-group">
      <input type="radio" id="contact-phone" name="contactMethod" value="phone">
      <label for="contact-phone">Phone</label>
    </div>
    
    <div class="radio-group">
      <input type="radio" id="contact-mail" name="contactMethod" value="mail">
      <label for="contact-mail">Postal Mail</label>
    </div>
  </fieldset>
</form>`}
              explanation="Fieldset elements create logical groups of related form controls, making forms easier to understand and navigate with assistive technologies."
              accessibilityTips={[
                "Use fieldset to group related form controls",
                "Legend should clearly describe the group's purpose",
                "Fieldset is especially important for radio button groups",
                "Screen readers announce the legend when focusing on grouped controls"
              ]}
            />
          </section>

          {/* Best Practices */}
          <section className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Form Accessibility Best Practices
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Labels and Structure
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Every input must have an associated label</li>
                  <li>• Use fieldset and legend for grouped controls</li>
                  <li>• Mark required fields clearly (* or "required")</li>
                  <li>• Provide clear, descriptive error messages</li>
                  <li>• Use appropriate input types for data</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Validation and Feedback
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Use aria-describedby for help text</li>
                  <li>• Implement aria-live regions for dynamic messages</li>
                  <li>• Provide autocomplete attributes when appropriate</li>
                  <li>• Test forms with keyboard-only navigation</li>
                  <li>• Ensure sufficient color contrast for all states</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
