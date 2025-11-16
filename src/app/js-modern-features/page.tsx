import { CodeExample } from "@/components/CodeExample";

export default function JSModernFeaturesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Modern JavaScript Features
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl">
            Master ES2015+ JavaScript features essential for React development: template literals, 
            conditional operators, spread/rest operators, and advanced destructuring patterns.
          </p>
        </header>

        <div className="space-y-12">
          {/* Template Literals */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Template Literals (ES2015)
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Template literals provide string interpolation and multi-line strings, making them perfect for React JSX, dynamic content generation, and HTML templating.
            </p>
            <CodeExample
              title="Template Literals for React Development"
              description="String interpolation, multi-line strings, and tagged templates"
              javascriptCode={`// Template Literals Examples

// Basic string interpolation (React inline styles pattern)
const createUserProfile = (name, age, role, theme) => {
  const profileClass = \`user-profile \${theme}-theme\`;
  const greeting = \`Hello, \${name}!\`;
  const description = \`I'm a \${age}-year-old \${role}.\`;
  
  return \`
    <div class="\${profileClass}">
      <div class="profile-header">
        <h2>\${greeting}</h2>
        <p class="profile-description">\${description}</p>
      </div>
      <div class="profile-stats">
        <span>Age: \${age}</span>
        <span>Role: \${role.toUpperCase()}</span>
        <span>Theme: \${theme}</span>
      </div>
    </div>
  \`;
};

// Multi-line string templates (React component pattern)
const generateReactComponent = (componentName, props = []) => {
  const propsDestructuring = props.length > 0 ? \`{ \${props.join(', ')} }\` : '';
  
  return \`
import React from 'react';

const \${componentName} = (\${propsDestructuring}) => {
  return (
    <div className="\${componentName.toLowerCase()}">
      <h1>Welcome to \${componentName}</h1>
      \${props.map(prop => \`<p>\${prop}: {\${prop}}</p>\`).join('\\n      ')}
    </div>
  );
};

export default \${componentName};
  \`.trim();
};

// Expression evaluation in templates
const calculateExpression = (num1, operation, num2) => {
  const result = eval(\`\${num1} \${operation} \${num2}\`);
  const timestamp = new Date().toLocaleTimeString();
  
  return \`
    <div class="calculation-result">
      <h4>Calculation Result</h4>
      <p>Expression: \${num1} \${operation} \${num2} = \${result}</p>
      <p>Calculated at: \${timestamp}</p>
      <p>Result type: \${typeof result}</p>
      \${result < 0 ? '<span class="negative">Negative result</span>' : ''}
      \${Number.isInteger(result) ? '<span class="integer">Integer result</span>' : '<span class="decimal">Decimal result</span>'}
    </div>
  \`;
};

// Tagged template functions
const highlight = (strings, ...values) => {
  return strings.reduce((result, string, i) => {
    const value = values[i] ? \`<mark>\${values[i]}</mark>\` : '';
    return result + string + value;
  }, '');
};

const currency = (strings, ...values) => {
  return strings.reduce((result, string, i) => {
    const value = values[i] ? \`$\${values[i].toFixed(2)}\` : '';
    return result + string + value;
  }, '');
};

const html = (strings, ...values) => {
  const escapedValues = values.map(value => 
    String(value).replace(/[&<>"']/g, match => {
      const escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      };
      return escapeMap[match];
    })
  );
  
  return strings.reduce((result, string, i) => {
    const value = escapedValues[i] || '';
    return result + string + value;
  }, '');
};

// URL building with templates
const buildApiUrl = (baseUrl, endpoint, id = null, queryParams = {}) => {
  const fullEndpoint = id ? \`\${endpoint}/\${id}\` : endpoint;
  const queryString = Object.entries(queryParams)
    .filter(([key, value]) => value !== null && value !== undefined)
    .map(([key, value]) => \`\${encodeURIComponent(key)}=\${encodeURIComponent(value)}\`)
    .join('&');
  
  return \`\${baseUrl}/\${fullEndpoint}\${queryString ? \`?\${queryString}\` : ''}\`;
};

// React-like conditional rendering with templates
const renderUserList = (users, isLoading, error) => {
  if (isLoading) {
    return \`
      <div class="loading">
        <p>Loading users...</p>
        <div class="spinner"></div>
      </div>
    \`;
  }
  
  if (error) {
    return \`
      <div class="error">
        <h3>Error Loading Users</h3>
        <p>\${error.message}</p>
        <button onclick="retryLoadUsers()">Retry</button>
      </div>
    \`;
  }
  
  if (users.length === 0) {
    return \`
      <div class="empty-state">
        <p>No users found</p>
        <button onclick="addNewUser()">Add First User</button>
      </div>
    \`;
  }
  
  return \`
    <div class="user-list">
      <h3>Users (\${users.length})</h3>
      \${users.map(user => \`
        <div class="user-card">
          <h4>\${user.name}</h4>
          <p>\${user.email}</p>
          <div class="user-actions">
            <button onclick="editUser('\${user.id}')">Edit</button>
            <button onclick="deleteUser('\${user.id}')">Delete</button>
          </div>
        </div>
      \`).join('')}
    </div>
  \`;
};

// Dynamic CSS with templates
const generateCssRule = (selector, properties) => {
  const cssProperties = Object.entries(properties)
    .map(([property, value]) => \`  \${property}: \${value};\`)
    .join('\\n');
  
  return \`
\${selector} {
\${cssProperties}
}
  \`.trim();
};

// Template for configuration objects
const createApiConfig = (environment) => {
  const configs = {
    development: {
      apiUrl: 'http://localhost:3000/api',
      debug: true,
      timeout: 5000
    },
    production: {
      apiUrl: 'https://api.myapp.com',
      debug: false,
      timeout: 10000
    }
  };
  
  const config = configs[environment] || configs.development;
  
  return \`
// API Configuration for \${environment.toUpperCase()}
const apiConfig = {
  baseURL: '\${config.apiUrl}',
  timeout: \${config.timeout},
  debug: \${config.debug},
  headers: {
    'Content-Type': 'application/json',
    'X-Environment': '\${environment}'
  }
};
  \`.trim();
};

// Event handlers
document.getElementById('generate-profile')?.addEventListener('click', () => {
  const name = document.getElementById('user-name').value;
  const age = document.getElementById('user-age').value;
  const role = document.getElementById('user-role').value;
  const theme = document.getElementById('user-theme').value;
  
  const profile = createUserProfile(name, age, role, theme);
  document.getElementById('generated-profile').innerHTML = profile;
});

document.getElementById('generate-component')?.addEventListener('click', () => {
  const componentName = 'UserProfile';
  const props = ['name', 'email', 'role', 'isActive'];
  
  const component = generateReactComponent(componentName, props);
  document.getElementById('component-output').innerHTML = \`
    <h4>Generated React Component:</h4>
    <pre><code>\${component}</code></pre>
  \`;
});

document.getElementById('calculate')?.addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value) || 0;
  const operation = document.getElementById('operation').value;
  const num2 = parseFloat(document.getElementById('num2').value) || 0;
  
  const result = calculateExpression(num1, operation, num2);
  document.getElementById('calculation-result').innerHTML = result;
});

document.getElementById('demo-tagged')?.addEventListener('click', () => {
  const name = 'Alice';
  const score = 95.5;
  const price = 29.99;
  const userInput = '<script>alert("xss")</script>';
  
  const highlightedText = highlight\`User \${name} scored \${score}% on the test.\`;
  const currencyText = currency\`The item costs \${price} including tax.\`;
  const safeHtml = html\`User input: \${userInput}\`;
  
  document.getElementById('tagged-output').innerHTML = \`
    <div>
      <h4>Tagged Template Examples:</h4>
      <p>Highlighted: \${highlightedText}</p>
      <p>Currency: \${currencyText}</p>
      <p>Safe HTML: \${safeHtml}</p>
    </div>
  \`;
});

document.getElementById('build-url')?.addEventListener('click', () => {
  const baseUrl = document.getElementById('base-url').value;
  const endpoint = document.getElementById('endpoint').value;
  const userId = document.getElementById('user-id').value;
  const queryString = document.getElementById('query-params').value;
  
  // Parse query string
  const queryParams = {};
  if (queryString) {
    queryString.split('&').forEach(param => {
      const [key, value] = param.split('=');
      if (key && value) {
        queryParams[key] = value;
      }
    });
  }
  
  const fullUrl = buildApiUrl(baseUrl, endpoint, userId, queryParams);
  
  document.getElementById('url-result').innerHTML = \`
    <h4>Built URL:</h4>
    <p><code>\${fullUrl}</code></p>
    <p>Base URL: \${baseUrl}</p>
    <p>Endpoint: \${endpoint}</p>
    <p>ID: \${userId || 'None'}</p>
    <p>Query Params: \${JSON.stringify(queryParams)}</p>
  \`;
});`}
              explanation="Template literals revolutionize string handling in JavaScript with interpolation, multi-line strings, and tagged templates. They're essential for React development, enabling dynamic content generation, component templating, and clean string manipulation."
              accessibilityTips={[
                "Use template literals for dynamic React className generation",
                "Leverage multi-line templates for complex HTML structures",
                "Use tagged templates for HTML escaping and security",
                "Combine templates with array methods for list rendering"
              ]}
            />
          </section>

          {/* Conditional Operator */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Conditional (Ternary) Operator
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              The ternary operator is essential for conditional rendering in React JSX. It provides a concise way to handle conditional logic inline.
            </p>
            <CodeExample
              title="Conditional Operator for React JSX"
              description="Mastering ternary operators for conditional rendering and logic"
              javascriptCode={`// Conditional (Ternary) Operator Examples

// Basic conditional rendering (React JSX pattern)
const renderUserInterface = (isLoggedIn, isPremium, hasNotifications) => {
  return \`
    <div class="app-header">
      \${isLoggedIn ? \`
        <div class="user-menu">
          <span class="welcome">Welcome back!</span>
          \${isPremium ? '<span class="premium-badge">Premium</span>' : ''}
          \${hasNotifications ? '<span class="notification-indicator"></span>' : ''}
          <button onclick="logout()">Logout</button>
        </div>
      \` : \`
        <div class="auth-buttons">
          <button onclick="showLogin()">Login</button>
          <button onclick="showSignup()">Sign Up</button>
        </div>
      \`}
    </div>
  \`;
};

// Nested conditional logic
const renderUserStatus = (userStatus, connectionStatus) => {
  const statusIcon = connectionStatus === 'online' ? '🟢' : 
                    connectionStatus === 'away' ? '🟡' : '🔴';
  
  const statusMessage = userStatus === 'admin' ? 'Administrator' :
                       userStatus === 'premium' ? 'Premium Member' :
                       userStatus === 'user' ? 'Regular User' : 'Guest';
  
  const canManageUsers = userStatus === 'admin' || userStatus === 'owner';
  const canEditContent = canManageUsers || userStatus === 'editor';
  const canViewContent = canEditContent || userStatus === 'user';
  
  return \`
    <div class="user-status">
      <div class="status-header">
        <span class="status-icon">\${statusIcon}</span>
        <span class="status-text">\${connectionStatus.toUpperCase()}</span>
      </div>
      <div class="user-info">
        <h4>\${statusMessage}</h4>
        <div class="permissions">
          <p>Can view content: \${canViewContent ? 'Yes' : 'No'}</p>
          <p>Can edit content: \${canEditContent ? 'Yes' : 'No'}</p>
          <p>Can manage users: \${canManageUsers ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  \`;
};

// Conditional CSS classes (React className pattern)
const generateStyledComponent = (theme, size, isActive, hasError) => {
  const baseClass = 'styled-component';
  const themeClass = theme === 'auto' ? 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : 
    theme;
  
  const className = \`
    \${baseClass} 
    \${themeClass}-theme 
    \${size}-size 
    \${isActive ? 'active' : 'inactive'}
    \${hasError ? 'error' : ''}
  \`.trim().replace(/\\s+/g, ' ');
  
  return \`
    <div class="\${className}">
      <h4>Styled Component Demo</h4>
      <p>Theme: \${themeClass}</p>
      <p>Size: \${size}</p>
      <p>State: \${isActive ? 'Active' : 'Inactive'}</p>
      \${hasError ? '<p class="error-message">Error occurred!</p>' : ''}
      <div class="generated-classes">
        <strong>Generated classes:</strong>
        <code>\${className}</code>
      </div>
    </div>
  \`;
};

// Complex conditional logic with multiple factors
const checkPermissions = (role, isVerified, hasSubscription, accountAge) => {
  const isNewAccount = accountAge < 7;
  const isTrustedAccount = accountAge > 90 && isVerified;
  
  // Complex permission logic
  const canCreatePosts = role !== 'viewer' && 
                        (isVerified || accountAge > 30) && 
                        !isNewAccount;
  
  const canDeletePosts = role === 'admin' || 
                        role === 'owner' || 
                        (role === 'editor' && isTrustedAccount);
  
  const canAccessPremiumFeatures = hasSubscription || 
                                  role === 'admin' || 
                                  role === 'owner';
  
  const canModerateComments = role === 'admin' || 
                             role === 'owner' || 
                             (role === 'editor' && isVerified && accountAge > 60);
  
  const maxUploadSize = role === 'owner' ? '100MB' :
                       role === 'admin' ? '50MB' :
                       hasSubscription ? '25MB' :
                       isVerified ? '10MB' : '5MB';
  
  const dailyPostLimit = role === 'owner' || role === 'admin' ? 'Unlimited' :
                        hasSubscription ? '50' :
                        isVerified ? '20' :
                        isNewAccount ? '1' : '5';
  
  return \`
    <div class="permissions-summary">
      <h4>Permission Summary for \${role.toUpperCase()}</h4>
      
      <div class="account-info">
        <p><strong>Account Status:</strong></p>
        <ul>
          <li>Verified: \${isVerified ? '✅' : '❌'}</li>
          <li>Subscription: \${hasSubscription ? '✅ Active' : '❌ None'}</li>
          <li>Account Age: \${accountAge} days \${isNewAccount ? '(New)' : isTrustedAccount ? '(Trusted)' : ''}</li>
        </ul>
      </div>
      
      <div class="permissions-grid">
        <div class="permission-item">
          <strong>Create Posts:</strong>
          <span class="\${canCreatePosts ? 'allowed' : 'denied'}">
            \${canCreatePosts ? '✅ Allowed' : '❌ Denied'}
          </span>
        </div>
        
        <div class="permission-item">
          <strong>Delete Posts:</strong>
          <span class="\${canDeletePosts ? 'allowed' : 'denied'}">
            \${canDeletePosts ? '✅ Allowed' : '❌ Denied'}
          </span>
        </div>
        
        <div class="permission-item">
          <strong>Premium Features:</strong>
          <span class="\${canAccessPremiumFeatures ? 'allowed' : 'denied'}">
            \${canAccessPremiumFeatures ? '✅ Access' : '❌ No Access'}
          </span>
        </div>
        
        <div class="permission-item">
          <strong>Moderate Comments:</strong>
          <span class="\${canModerateComments ? 'allowed' : 'denied'}">
            \${canModerateComments ? '✅ Allowed' : '❌ Denied'}
          </span>
        </div>
        
        <div class="permission-item">
          <strong>Upload Limit:</strong>
          <span>\${maxUploadSize}</span>
        </div>
        
        <div class="permission-item">
          <strong>Daily Post Limit:</strong>
          <span>\${dailyPostLimit}</span>
        </div>
      </div>
    </div>
  \`;
};

// Conditional operators with array methods (React list rendering)
const renderUserCards = (users, currentUserId, showOfflineUsers) => {
  return users
    .filter(user => showOfflineUsers ? true : user.isOnline)
    .map(user => {
      const isCurrentUser = user.id === currentUserId;
      const userStatus = user.isOnline ? 'online' : 'offline';
      const canMessage = user.isOnline && !isCurrentUser && user.allowsMessages;
      
      return \`
        <div class="user-card \${isCurrentUser ? 'current-user' : ''} \${userStatus}">
          <div class="user-avatar">
            <img src="\${user.avatar || 'default-avatar.png'}" alt="\${user.name}">
            <span class="status-indicator \${userStatus}"></span>
          </div>
          
          <div class="user-info">
            <h4>\${user.name} \${isCurrentUser ? '(You)' : ''}</h4>
            <p class="user-status">
              \${user.isOnline ? '🟢 Online' : '🔴 Offline'}
              \${user.lastSeen && !user.isOnline ? \` • Last seen \${user.lastSeen}\` : ''}
            </p>
          </div>
          
          <div class="user-actions">
            \${canMessage ? '<button onclick="sendMessage(' + user.id + ')">Message</button>' : ''}
            \${!isCurrentUser ? '<button onclick="viewProfile(' + user.id + ')">Profile</button>' : ''}
            \${isCurrentUser ? '<button onclick="editProfile()">Edit Profile</button>' : ''}
          </div>
        </div>
      \`;
    })
    .join('');
};

// Event handlers
document.getElementById('update-ui')?.addEventListener('click', () => {
  const isLoggedIn = document.getElementById('is-logged-in').checked;
  const isPremium = document.getElementById('is-premium').checked;
  const hasNotifications = document.getElementById('has-notifications').checked;
  
  const ui = renderUserInterface(isLoggedIn, isPremium, hasNotifications);
  document.getElementById('conditional-ui').innerHTML = ui;
});

document.getElementById('render-status')?.addEventListener('click', () => {
  const userStatus = document.getElementById('user-status').value;
  const connectionStatus = document.getElementById('connection-status').value;
  
  const statusDisplay = renderUserStatus(userStatus, connectionStatus);
  document.getElementById('status-display').innerHTML = statusDisplay;
});

document.getElementById('apply-styling')?.addEventListener('click', () => {
  const theme = document.getElementById('theme-select').value;
  const size = document.getElementById('size-select').value;
  const isActive = document.getElementById('is-active').checked;
  const hasError = document.getElementById('has-error').checked;
  
  const styledComponent = generateStyledComponent(theme, size, isActive, hasError);
  document.getElementById('styled-component').innerHTML = styledComponent;
});

document.getElementById('check-permissions')?.addEventListener('click', () => {
  const role = document.getElementById('user-role').value;
  const isVerified = document.getElementById('is-verified').checked;
  const hasSubscription = document.getElementById('has-subscription').checked;
  const accountAge = parseInt(document.getElementById('account-age').value) || 0;
  
  const permissions = checkPermissions(role, isVerified, hasSubscription, accountAge);
  document.getElementById('permissions-result').innerHTML = permissions;
});`}
              explanation="The conditional (ternary) operator is indispensable for React development, enabling concise conditional rendering in JSX. It handles simple conditions, nested logic, and complex permission systems while keeping code readable and maintainable."
              accessibilityTips={[
                "Use ternary operators for simple conditional rendering in React JSX",
                "Chain ternary operators carefully - consider readability over brevity",
                "Combine with logical operators (&& and ||) for complex conditions",
                "Use parentheses to group complex conditional expressions clearly"
              ]}
            />
          </section>

          {/* Spread & Rest Operators */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Spread & Rest Operators (ES2015)
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Spread and rest operators are essential for React development, enabling immutable updates, function parameters, and component prop handling.
            </p>
            <CodeExample
              title="Spread & Rest Operators for React"
              description="Master spread and rest operators for modern React development patterns"
              javascriptCode={`// Spread & Rest Operators Examples

let currentList = ['Apple', 'Banana', 'Cherry'];

// Rest operator in function parameters
const calculateNumbers = (operation, ...numbers) => {
  switch (operation) {
    case 'sum':
      return numbers.reduce((sum, num) => sum + num, 0);
    case 'multiply':
      return numbers.reduce((product, num) => product * num, 1);
    case 'average':
      return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    case 'minMax':
      return {
        min: Math.min(...numbers),
        max: Math.max(...numbers),
        range: Math.max(...numbers) - Math.min(...numbers)
      };
    default:
      return 0;
  }
};

// Spread operator for array operations (React state updates)
const addItemToList = (list, newItem) => {
  return [...list, newItem]; // Immutable add to end
};

const removeFirstItem = (list) => {
  const [first, ...rest] = list;
  return { removed: first, newList: rest };
};

const removeLastItem = (list) => {
  return list.slice(0, -1); // Remove last item
};

const insertItemAtPosition = (list, item, position) => {
  return [
    ...list.slice(0, position),
    item,
    ...list.slice(position)
  ];
};

const mergeLists = (...lists) => {
  return [...new Set([...lists.flat()])]; // Merge and deduplicate
};

// Object operations with spread (React props and state)
let currentUser = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  age: 28,
  role: 'Developer',
  preferences: {
    theme: 'light',
    notifications: true,
    language: 'en'
  }
};

const updateUser = (user, updates) => {
  return {
    ...user,
    ...updates,
    updatedAt: new Date().toISOString()
  };
};

const updateNestedPreferences = (user, preferenceUpdates) => {
  return {
    ...user,
    preferences: {
      ...user.preferences,
      ...preferenceUpdates
    }
  };
};

const addRandomPreference = (user) => {
  const randomPrefs = [
    { autoSave: true },
    { darkMode: false },
    { soundEnabled: true },
    { emailNotifications: false },
    { twoFactorAuth: true },
    { dataSharing: false }
  ];
  
  const randomPref = randomPrefs[Math.floor(Math.random() * randomPrefs.length)];
  
  return updateNestedPreferences(user, randomPref);
};

// Component props spreading (React pattern)
const createComponent = (props) => {
  // Default props
  const defaultProps = {
    title: 'Default Title',
    subtitle: '',
    theme: 'light',
    size: 'medium',
    disabled: false,
    loading: false,
    onClick: () => console.log('Clicked')
  };
  
  // Merge props with defaults using spread
  const finalProps = { ...defaultProps, ...props };
  
  // Destructure final props
  const {
    title,
    subtitle,
    theme,
    size,
    disabled,
    loading,
    onClick,
    ...otherProps
  } = finalProps;
  
  // Generate className using spread and conditionals
  const baseClasses = ['component', \`theme-\${theme}\`, \`size-\${size}\`];
  const conditionalClasses = [
    disabled && 'disabled',
    loading && 'loading'
  ].filter(Boolean);
  
  const className = [...baseClasses, ...conditionalClasses].join(' ');
  
  // Handle additional props
  const additionalPropsString = Object.entries(otherProps)
    .map(([key, value]) => \`\${key}="\${value}"\`)
    .join(' ');
  
  return \`
    <div class="\${className}" \${additionalPropsString}>
      <div class="component-header">
        <h3>\${title}</h3>
        \${subtitle ? \`<p class="subtitle">\${subtitle}</p>\` : ''}
      </div>
      
      <div class="component-body">
        \${loading ? \`
          <div class="loading-spinner">Loading...</div>
        \` : \`
          <p>Component content goes here</p>
          <button onclick="handleComponentClick()" \${disabled ? 'disabled' : ''}>
            Click Me
          </button>
        \`}
      </div>
      
      <div class="component-footer">
        <small>Props: \${JSON.stringify(finalProps, null, 2)}</small>
      </div>
    </div>
  \`;
};

// React Hook pattern simulation
const useUserManager = (initialUser) => {
  let user = { ...initialUser };
  
  const setUser = (updates) => {
    if (typeof updates === 'function') {
      user = updates(user);
    } else {
      user = { ...user, ...updates };
    }
    renderUser();
    return user;
  };
  
  const updateUserField = (field, value) => {
    return setUser({ [field]: value });
  };
  
  const resetUser = () => {
    return setUser({ ...initialUser });
  };
  
  const addPreference = (key, value) => {
    return setUser({
      preferences: {
        ...user.preferences,
        [key]: value
      }
    });
  };
  
  return {
    user,
    setUser,
    updateUserField,
    resetUser,
    addPreference
  };
};

// Utility functions using spread/rest
const combineArrays = (...arrays) => {
  return arrays.flat();
};

const getUniqueItems = (...arrays) => {
  return [...new Set(combineArrays(...arrays))];
};

const excludeProperties = (obj, ...keysToExclude) => {
  const { [keysToExclude[0]]: excluded, ...rest } = obj;
  return keysToExclude.length > 1 ? 
    excludeProperties(rest, ...keysToExclude.slice(1)) : 
    rest;
};

// Render functions
const renderList = () => {
  const listElement = document.getElementById('items-list');
  listElement.innerHTML = currentList
    .map((item, index) => \`<li>\${index + 1}. \${item}</li>\`)
    .join('');
};

const renderUser = () => {
  const userDisplay = document.getElementById('user-display');
  userDisplay.innerHTML = \`
    <div class="user-profile">
      <h4>Current User Profile:</h4>
      <div class="user-details">
        <p><strong>Name:</strong> \${currentUser.name}</p>
        <p><strong>Email:</strong> \${currentUser.email}</p>
        <p><strong>Age:</strong> \${currentUser.age}</p>
        <p><strong>Role:</strong> \${currentUser.role}</p>
      </div>
      <div class="user-preferences">
        <h5>Preferences:</h5>
        <pre>\${JSON.stringify(currentUser.preferences, null, 2)}</pre>
      </div>
      \${currentUser.updatedAt ? \`<p><small>Last updated: \${currentUser.updatedAt}</small></p>\` : ''}
    </div>
  \`;
};

// Event handlers
document.getElementById('add-item')?.addEventListener('click', () => {
  const newItem = document.getElementById('new-item').value.trim();
  if (newItem) {
    currentList = addItemToList(currentList, newItem);
    document.getElementById('new-item').value = '';
    renderList();
    
    document.getElementById('array-operations-log').innerHTML = \`
      <p>Added "\${newItem}" to list using spread operator: [...list, newItem]</p>
    \`;
  }
});

document.getElementById('remove-first')?.addEventListener('click', () => {
  if (currentList.length > 0) {
    const { removed, newList } = removeFirstItem(currentList);
    currentList = newList;
    renderList();
    
    document.getElementById('array-operations-log').innerHTML = \`
      <p>Removed "\${removed}" using destructuring: const [first, ...rest] = list</p>
    \`;
  }
});

document.getElementById('remove-last')?.addEventListener('click', () => {
  if (currentList.length > 0) {
    const removed = currentList[currentList.length - 1];
    currentList = removeLastItem(currentList);
    renderList();
    
    document.getElementById('array-operations-log').innerHTML = \`
      <p>Removed "\${removed}" using slice: list.slice(0, -1)</p>
    \`;
  }
});

document.getElementById('clear-list')?.addEventListener('click', () => {
  currentList = [];
  renderList();
  document.getElementById('array-operations-log').innerHTML = \`
    <p>Cleared list by assigning empty array</p>
  \`;
});

document.getElementById('merge-lists')?.addEventListener('click', () => {
  const sampleList = ['Orange', 'Grape', 'Mango'];
  const merged = mergeLists(currentList, sampleList);
  currentList = merged;
  renderList();
  
  document.getElementById('array-operations-log').innerHTML = \`
    <p>Merged lists using: [...new Set([...lists.flat()])]</p>
    <p>Added: \${sampleList.join(', ')}</p>
  \`;
});

document.getElementById('update-user')?.addEventListener('click', () => {
  const updates = {
    name: document.getElementById('edit-name').value,
    email: document.getElementById('edit-email').value,
    age: parseInt(document.getElementById('edit-age').value),
    role: document.getElementById('edit-role').value
  };
  
  currentUser = updateUser(currentUser, updates);
  renderUser();
});

document.getElementById('add-preference')?.addEventListener('click', () => {
  currentUser = addRandomPreference(currentUser);
  renderUser();
});

document.getElementById('reset-user')?.addEventListener('click', () => {
  currentUser = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    age: 28,
    role: 'Developer',
    preferences: {
      theme: 'light',
      notifications: true,
      language: 'en'
    }
  };
  renderUser();
});

document.getElementById('calculate-advanced')?.addEventListener('click', () => {
  const numbersString = document.getElementById('calc-numbers').value;
  const operation = document.getElementById('calc-operation').value;
  
  const numbers = numbersString.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
  
  if (numbers.length === 0) {
    document.getElementById('calc-result').innerHTML = '<p>Please enter valid numbers</p>';
    return;
  }
  
  const result = calculateNumbers(operation, ...numbers);
  
  document.getElementById('calc-result').innerHTML = \`
    <div class="calc-result">
      <h4>Calculation Result:</h4>
      <p><strong>Operation:</strong> \${operation}</p>
      <p><strong>Numbers:</strong> [\${numbers.join(', ')}]</p>
      <p><strong>Result:</strong> \${typeof result === 'object' ? JSON.stringify(result, null, 2) : result}</p>
      <p><small>Used rest operator: calculateNumbers(operation, ...numbers)</small></p>
    </div>
  \`;
});

document.getElementById('render-component')?.addEventListener('click', () => {
  const props = {
    title: document.getElementById('prop-title').value,
    subtitle: document.getElementById('prop-subtitle').value,
    theme: document.getElementById('prop-theme').value,
    size: document.getElementById('prop-size').value,
    disabled: document.getElementById('prop-disabled').checked,
    loading: document.getElementById('prop-loading').checked,
    customProp: 'custom-value',
    dataTestId: 'demo-component'
  };
  
  const component = createComponent(props);
  document.getElementById('component-result').innerHTML = component;
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderList();
  renderUser();
});

window.handleComponentClick = () => {
  alert('Component button clicked!');
};`}
              explanation="Spread and rest operators are fundamental to modern React development. They enable immutable state updates, flexible function parameters, and clean component prop handling while maintaining code readability and React best practices."
              accessibilityTips={[
                "Use spread operator for immutable React state updates",
                "Use rest operator for flexible component prop handling",
                "Combine spread with destructuring for clean prop passing",
                "Use spread to merge objects and arrays without mutation"
              ]}
            />
          </section>

          {/* Best Practices */}
          <section className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Modern JavaScript Best Practices for React
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  🎯 Code Quality
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Use template literals for dynamic string generation</li>
                  <li>• Prefer ternary operators for simple conditional rendering</li>
                  <li>• Use spread operator for immutable updates</li>
                  <li>• Destructure props and state for cleaner code</li>
                  <li>• Use rest operator for flexible function parameters</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  ⚡ Performance & Patterns
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Avoid nested ternary operators for complex conditions</li>
                  <li>• Use tagged templates for HTML sanitization</li>
                  <li>• Combine destructuring with default values</li>
                  <li>• Leverage spread for component composition</li>
                  <li>• Use modern syntax for cleaner, more maintainable code</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
