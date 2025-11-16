import { CodeExample } from "@/components/CodeExample";

export default function JSModulesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript Modules (ES2015)
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl">
            Master ES2015 modules with import and export statements. Learn module patterns essential for organizing React applications, 
            component structure, and building scalable JavaScript projects.
          </p>
        </header>

        <div className="space-y-12">
          {/* Basic Import/Export */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Basic Import & Export Patterns
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Learn the fundamental import and export patterns used in React applications for organizing components, utilities, and data.
            </p>
            <CodeExample
              title="ES2015 Module Fundamentals"
              description="Named exports, default exports, and import patterns for React development"
              javascriptCode={`// JavaScript Modules Examples

// ========================================
// BASIC NAMED EXPORTS
// ========================================

// utils/constants.js
export const API_BASE_URL = 'https://api.example.com';
export const DEFAULT_TIMEOUT = 5000;
export const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
};

// utils/validation.js
export const validateEmail = (email) => {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
};

export const validateRequired = (value) => {
  return value && value.toString().trim().length > 0;
};

// ========================================
// DEFAULT EXPORTS
// ========================================

// components/Button.jsx
const Button = ({ children, variant = 'primary', size = 'medium', disabled = false, onClick, ...props }) => {
  const baseClasses = 'btn';
  const variantClass = \`btn-\${variant}\`;
  const sizeClass = \`btn-\${size}\`;
  const disabledClass = disabled ? 'btn-disabled' : '';
  
  const className = [baseClasses, variantClass, sizeClass, disabledClass]
    .filter(Boolean)
    .join(' ');
  
  return \`
    <button 
      class="\${className}" 
      \${disabled ? 'disabled' : ''}
      onclick="handleButtonClick(event)"
    >
      \${children}
    </button>
  \`;
};

export default Button;

// components/Card.jsx - Default export with named exports
const Card = ({ title, content, actions, className = '' }) => {
  return \`
    <div class="card \${className}">
      \${title ? \`<div class="card-header"><h3>\${title}</h3></div>\` : ''}
      <div class="card-body">\${content}</div>
      \${actions ? \`<div class="card-footer">\${actions}</div>\` : ''}
    </div>
  \`;
};

export const CardHeader = ({ children }) => \`<div class="card-header">\${children}</div>\`;
export const CardBody = ({ children }) => \`<div class="card-body">\${children}</div>\`;
export const CardFooter = ({ children }) => \`<div class="card-footer">\${children}</div>\`;

export default Card;

// ========================================
// MIXED EXPORTS (DEFAULT + NAMED)
// ========================================

// utils/api.js
const apiClient = {
  baseURL: 'https://api.example.com',
  timeout: 5000,
  
  async request(method, endpoint, data = null) {
    const url = \`\${this.baseURL}\${endpoint}\`;
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${this.getToken()}\`
      }
    };
    
    if (data) {
      options.body = JSON.stringify(data);
    }
    
    try {
      const response = await fetch(url, options);
      return await response.json();
    } catch (error) {
      throw new Error(\`API request failed: \${error.message}\`);
    }
  },
  
  getToken() {
    return localStorage.getItem('authToken') || '';
  }
};

// Named exports for specific HTTP methods
export const get = (endpoint) => apiClient.request('GET', endpoint);
export const post = (endpoint, data) => apiClient.request('POST', endpoint, data);
export const put = (endpoint, data) => apiClient.request('PUT', endpoint, data);
export const del = (endpoint) => apiClient.request('DELETE', endpoint);

// Default export for the main API client
export default apiClient;

// ========================================
// RE-EXPORTS (BARREL EXPORTS)
// ========================================

// components/index.js - Barrel export pattern
export { default as Button } from './Button.jsx';
export { default as Card, CardHeader, CardBody, CardFooter } from './Card.jsx';
export { default as Modal } from './Modal.jsx';
export { default as Input } from './Input.jsx';
export { default as Form } from './Form.jsx';

// Create compound exports
export * from './ui'; // Re-export all from ui folder
export * as Icons from './icons'; // Re-export as namespace

// ========================================
// DYNAMIC IMPORTS
// ========================================

// Dynamic import for code splitting (React lazy loading)
const loadComponent = async (componentName) => {
  try {
    const module = await import(\`./components/\${componentName}.jsx\`);
    return module.default;
  } catch (error) {
    console.error(\`Failed to load component \${componentName}:\`, error);
    return null;
  }
};

// Conditional imports
const loadUtilities = async () => {
  if (process.env.NODE_ENV === 'development') {
    const { devTools } = await import('./utils/devTools.js');
    return devTools;
  } else {
    const { prodUtils } = await import('./utils/prodUtils.js');
    return prodUtils;
  }
};

// ========================================
// CUSTOM HOOKS (REACT PATTERN)
// ========================================

// hooks/useAuth.js
const useAuth = () => {
  let user = null;
  let isLoading = false;
  let error = null;
  
  const login = async (credentials) => {
    isLoading = true;
    try {
      const response = await apiClient.post('/auth/login', credentials);
      user = response.user;
      localStorage.setItem('authToken', response.token);
      error = null;
    } catch (err) {
      error = err.message;
      user = null;
    } finally {
      isLoading = false;
    }
  };
  
  const logout = () => {
    user = null;
    localStorage.removeItem('authToken');
  };
  
  return { user, isLoading, error, login, logout };
};

export default useAuth;

// hooks/useLocalStorage.js
const useLocalStorage = (key, initialValue) => {
  // Get from local storage then parse stored json or return initialValue
  const getValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(\`Error reading localStorage key "\${key}":\`, error);
      return initialValue;
    }
  };
  
  const [storedValue, setStoredValue] = [getValue(), null];
  
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(\`Error setting localStorage key "\${key}":\`, error);
    }
  };
  
  return [storedValue, setValue];
};

export default useLocalStorage;

// ========================================
// MODULE EXAMPLES GENERATOR
// ========================================

const moduleExamples = {
  'basic-exports': \`
// Named exports example
export const API_URL = 'https://api.example.com';
export const formatDate = (date) => date.toLocaleDateString();
export const validateEmail = (email) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);

// Importing named exports
import { API_URL, formatDate, validateEmail } from './utils.js';
  \`,
  
  'default-exports': \`
// Default export example
const UserService = {
  async getUser(id) { /* implementation */ },
  async createUser(userData) { /* implementation */ },
  async updateUser(id, updates) { /* implementation */ }
};

export default UserService;

// Importing default export
import UserService from './services/UserService.js';
  \`,
  
  'mixed-exports': \`
// Mixed exports (default + named)
const ApiClient = { /* main API client */ };

export const get = (url) => ApiClient.request('GET', url);
export const post = (url, data) => ApiClient.request('POST', url, data);

export default ApiClient;

// Importing mixed exports
import ApiClient, { get, post } from './utils/api.js';
  \`,
  
  're-exports': \`
// Barrel exports (components/index.js)
export { default as Button } from './Button.jsx';
export { default as Card } from './Card.jsx';
export { default as Modal } from './Modal.jsx';

// Re-export with renaming
export { UserForm as Form } from './UserForm.jsx';

// Re-export all
export * from './ui';

// Importing from barrel
import { Button, Card, Modal } from './components';
  \`,
  
  'dynamic-imports': \`
// Dynamic imports for code splitting
const LazyComponent = async () => {
  const { default: Component } = await import('./LazyComponent.jsx');
  return Component;
};

// Conditional imports
const loadDevelopmentTools = async () => {
  if (process.env.NODE_ENV === 'development') {
    const { devTools } = await import('./devTools.js');
    return devTools;
  }
};
  \`
};

const moduleTemplates = {
  'react-component': {
    filename: 'UserCard.jsx',
    code: \`import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../utils/dateUtils.js';
import './UserCard.css';

const UserCard = ({ user, onEdit, onDelete, className = '' }) => {
  const handleEdit = () => {
    onEdit(user.id);
  };

  const handleDelete = () => {
    if (window.confirm(\`Delete user \${user.name}?\`)) {
      onDelete(user.id);
    }
  };

  return (
    <div className={\`user-card \${className}\`}>
      <div className="user-card__header">
        <img src={user.avatar} alt={user.name} />
        <h3>{user.name}</h3>
      </div>
      <div className="user-card__body">
        <p>Email: {user.email}</p>
        <p>Joined: {formatDate(user.createdAt)}</p>
      </div>
      <div className="user-card__actions">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    createdAt: PropTypes.string.isRequired
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default UserCard;\`
  },
  
  'utility-functions': {
    filename: 'stringUtils.js',
    code: \`// String utility functions
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const camelCase = (str) => {
  return str
    .replace(/(?:^\\w|[A-Z]|\\b\\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\\s+/g, '');
};

export const kebabCase = (str) => {
  return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase();
};

export const truncate = (str, maxLength, suffix = '...') => {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - suffix.length) + suffix;
};

export const slugify = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\\w\\s-]/g, '')
    .replace(/[\\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Default export for most commonly used function
export default capitalize;\`
  },
  
  'constants': {
    filename: 'constants.js',
    code: \`// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3
};

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};

// User Roles
export const USER_ROLES = {
  ADMIN: 'admin',
  MODERATOR: 'moderator',
  USER: 'user',
  GUEST: 'guest'
};

// Theme Configuration
export const THEME_CONFIG = {
  COLORS: {
    PRIMARY: '#007bff',
    SECONDARY: '#6c757d',
    SUCCESS: '#28a745',
    DANGER: '#dc3545',
    WARNING: '#ffc107',
    INFO: '#17a2b8'
  },
  BREAKPOINTS: {
    SM: '576px',
    MD: '768px',
    LG: '992px',
    XL: '1200px'
  }
};

// Validation Rules
export const VALIDATION_RULES = {
  EMAIL_REGEX: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 20
};\`
  },
  
  'api-service': {
    filename: 'userService.js',
    code: \`import { API_CONFIG, HTTP_STATUS } from '../constants.js';

class UserService {
  constructor() {
    this.baseURL = API_CONFIG.BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = \`\${this.baseURL}\${endpoint}\`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async getUsers(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = \`/users\${queryString ? \`?\${queryString}\` : ''}\`;
    return this.request(endpoint);
  }

  async getUser(id) {
    return this.request(\`/users/\${id}\`);
  }

  async createUser(userData) {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  }

  async updateUser(id, updates) {
    return this.request(\`/users/\${id}\`, {
      method: 'PUT',
      body: JSON.stringify(updates)
    });
  }

  async deleteUser(id) {
    return this.request(\`/users/\${id}\`, {
      method: 'DELETE'
    });
  }
}

// Export singleton instance
const userService = new UserService();
export default userService;

// Named exports for individual methods if needed
export const { getUsers, getUser, createUser, updateUser, deleteUser } = userService;\`
  },
  
  'custom-hook': {
    filename: 'useApi.js',
    code: \`import { useState, useEffect, useCallback } from 'react';

const useApi = (apiFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (...args) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction(...args);
      setData(result);
      return result;
    } catch (err) {
      setError(err.message || 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  }, dependencies);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    data,
    loading,
    error,
    execute,
    reset
  };
};

export default useApi;

// Usage example:
// import useApi from './hooks/useApi.js';
// import { getUsers } from './services/userService.js';
//
// const UserList = () => {
//   const { data: users, loading, error, execute } = useApi(getUsers);
//
//   useEffect(() => {
//     execute();
//   }, [execute]);
//
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   return <div>{users?.map(user => <div key={user.id}>{user.name}</div>)}</div>;
// };\`
  }
};

// Event handlers
document.getElementById('show-basic-exports')?.addEventListener('click', () => {
  document.getElementById('module-examples-output').innerHTML = \`
    <h4>Basic Named Exports</h4>
    <pre><code>\${moduleExamples['basic-exports']}</code></pre>
  \`;
});

document.getElementById('show-default-exports')?.addEventListener('click', () => {
  document.getElementById('module-examples-output').innerHTML = \`
    <h4>Default Exports</h4>
    <pre><code>\${moduleExamples['default-exports']}</code></pre>
  \`;
});

document.getElementById('show-mixed-exports')?.addEventListener('click', () => {
  document.getElementById('module-examples-output').innerHTML = \`
    <h4>Mixed Exports (Default + Named)</h4>
    <pre><code>\${moduleExamples['mixed-exports']}</code></pre>
  \`;
});

document.getElementById('show-re-exports')?.addEventListener('click', () => {
  document.getElementById('module-examples-output').innerHTML = \`
    <h4>Re-exports (Barrel Pattern)</h4>
    <pre><code>\${moduleExamples['re-exports']}</code></pre>
  \`;
});

document.getElementById('show-dynamic-imports')?.addEventListener('click', () => {
  document.getElementById('module-examples-output').innerHTML = \`
    <h4>Dynamic Imports</h4>
    <pre><code>\${moduleExamples['dynamic-imports']}</code></pre>
  \`;
});

document.getElementById('generate-module')?.addEventListener('click', () => {
  const moduleType = document.getElementById('module-type').value;
  const template = moduleTemplates[moduleType];
  
  document.getElementById('generated-module').innerHTML = \`
    <h4>Generated Module: \${template.filename}</h4>
    <pre><code>\${template.code}</code></pre>
  \`;
});

// Module resolution examples
const resolutionExamples = {
  relative: \`
// Relative imports (same directory)
import Button from './Button.jsx';
import { validateEmail } from './validation.js';

// Relative imports (parent directory)
import { API_CONFIG } from '../constants.js';
import UserCard from '../components/UserCard.jsx';

// Relative imports (nested directories)
import { formatDate } from '../../utils/dateUtils.js';
import Modal from '../../components/ui/Modal.jsx';
  \`,
  
  absolute: \`
// Absolute imports (from src root)
import Button from 'components/Button.jsx';
import { API_CONFIG } from 'constants.js';
import { formatDate } from 'utils/dateUtils.js';

// Configured with webpack resolve.alias or jsconfig.json
import { Button, Card } from '@/components';
import { useAuth } from '@/hooks';
import { userService } from '@/services';
  \`,
  
  nodeModules: \`
// Node modules imports
import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import lodash from 'lodash';
import { format } from 'date-fns';

// Scoped packages
import { Button } from '@mui/material';
import { toast } from '@/components/ui/toast';
  \`,
  
  barrel: \`
// components/index.js (barrel export)
export { default as Button } from './Button.jsx';
export { default as Card } from './Card.jsx';
export { default as Modal } from './Modal.jsx';
export { default as Input } from './Input.jsx';

// Using barrel exports
import { Button, Card, Modal, Input } from './components';

// or
import * as Components from './components';
const { Button, Card } = Components;
  \`
};

document.getElementById('show-relative-imports')?.addEventListener('click', () => {
  document.getElementById('resolution-output').innerHTML = \`
    <h4>Relative Imports</h4>
    <pre><code>\${resolutionExamples.relative}</code></pre>
  \`;
});

document.getElementById('show-absolute-imports')?.addEventListener('click', () => {
  document.getElementById('resolution-output').innerHTML = \`
    <h4>Absolute Imports</h4>
    <pre><code>\${resolutionExamples.absolute}</code></pre>
  \`;
});

document.getElementById('show-node-modules')?.addEventListener('click', () => {
  document.getElementById('resolution-output').innerHTML = \`
    <h4>Node Modules Imports</h4>
    <pre><code>\${resolutionExamples.nodeModules}</code></pre>
  \`;
});

document.getElementById('show-barrel-exports')?.addEventListener('click', () => {
  document.getElementById('resolution-output').innerHTML = \`
    <h4>Barrel Exports</h4>
    <pre><code>\${resolutionExamples.barrel}</code></pre>
  \`;
});`}
              explanation="ES2015 modules provide a standardized way to organize and share code. Understanding import/export patterns, module resolution, and dynamic imports is essential for building scalable React applications with proper code organization and code splitting."
              accessibilityTips={[
                "Use named exports for multiple related functions or constants",
                "Use default exports for single main functionality (like React components)",
                "Organize modules logically by feature or functionality",
                "Use barrel exports (index.js) to create clean import paths",
                "Leverage dynamic imports for code splitting and lazy loading"
              ]}
            />
          </section>

          {/* Best Practices */}
          <section className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Modules Best Practices for React
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  📦 Module Organization
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Use default exports for React components</li>
                  <li>• Use named exports for utility functions and constants</li>
                  <li>• Create barrel exports (index.js) for clean imports</li>
                  <li>• Organize modules by feature or domain</li>
                  <li>• Keep modules focused on a single responsibility</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  ⚡ Performance & Patterns
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Use dynamic imports for code splitting</li>
                  <li>• Leverage tree-shaking with named exports</li>
                  <li>• Use absolute imports with path aliases (@/components)</li>
                  <li>• Group related exports in barrel files</li>
                  <li>• Avoid circular dependencies between modules</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
