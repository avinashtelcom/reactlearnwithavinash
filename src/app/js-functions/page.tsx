import { CodeExample } from "@/components/CodeExample";

export default function JSFunctionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript Functions & Scope
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl">
            Master JavaScript functions, arrow functions, and scope concepts essential for React development. 
            Learn function declarations, expressions, closures, and modern arrow function syntax.
          </p>
        </header>

        <div className="space-y-12">
          {/* Function Basics */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Function Fundamentals
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Functions are the building blocks of JavaScript applications. Learn different ways to define and use functions.
            </p>
            <CodeExample
              title="Function Declarations vs Expressions"
              description="Understanding different function definition patterns"
              javascriptCode={`// JavaScript Function Examples

// Function Declaration - Hoisted
function greetUser(name) {
  const greeting = \`Hello, \${name}!\`;
  document.getElementById('greeting-output').textContent = greeting;
  return greeting;
}

// Function Expression - Not hoisted
const calculateArea = function(width, height) {
  return width * height;
};

// Anonymous function assigned to variable
const displayArea = function() {
  const width = document.getElementById('width').value;
  const height = document.getElementById('height').value;
  const area = calculateArea(width, height);
  document.getElementById('area-output').textContent = \`Area: \${area}\`;
};

// Higher Order Functions
function transformArray(array, transformer) {
  return array.map(transformer);
}

function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function with default parameters
function showUserInfo(name, age = 'Unknown', role = 'User') {
  const info = \`Name: \${name}, Age: \${age}, Role: \${role}\`;
  document.getElementById('user-info').innerHTML = \`<p>\${info}</p>\`;
}

// Immediately Invoked Function Expression (IIFE)
(function() {
  console.log('IIFE executed immediately');
})();

// Function returning another function
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

// Event handlers
document.getElementById('calculate-btn')?.addEventListener('click', displayArea);

document.getElementById('transform-btn')?.addEventListener('click', function() {
  const fruits = ['apple', 'banana', 'cherry'];
  const capitalized = transformArray(fruits, capitalizeString);
  
  const listElement = document.getElementById('transformed-list');
  listElement.innerHTML = capitalized
    .map(fruit => \`<li>\${fruit}</li>\`)
    .join('');
});`}
              explanation="Functions can be declared or expressed. Declarations are hoisted, expressions are not. Both patterns are commonly used in React for event handlers, utility functions, and component logic."
              accessibilityTips={[
                "Use descriptive function names that explain their purpose",
                "Provide default parameters for optional values",
                "Keep functions focused on a single responsibility",
                "Use pure functions when possible for predictable behavior"
              ]}
            />
          </section>

          {/* Arrow Functions */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Arrow Functions (ES2015)
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Arrow functions provide a concise syntax and lexical 'this' binding, making them perfect for React event handlers and functional programming.
            </p>
            <CodeExample
              title="Arrow Function Syntax & Benefits"
              description="Modern arrow function patterns for React development"
              javascriptCode={`// Arrow Function Examples

// Basic arrow function syntax
const greetArrow = (name) => {
  return \`Hello, \${name} from arrow function!\`;
};

// Concise arrow functions
const add = (a, b) => a + b;
const square = x => x * x;
const getMessage = () => 'Hello World';

// Arrow functions for event handling
const handleGreeting = () => {
  const name = document.getElementById('name-input').value || 'Anonymous';
  const greeting = greetArrow(name);
  document.getElementById('arrow-output').textContent = greeting;
};

// Array methods with arrow functions (React patterns)
const users = [
  { id: 1, name: 'Alice', age: 25, active: true },
  { id: 2, name: 'Bob', age: 30, active: false },
  { id: 3, name: 'Charlie', age: 35, active: true }
];

const processUserData = () => {
  // Filter active users
  const activeUsers = users.filter(user => user.active);
  
  // Transform data
  const userCards = activeUsers.map(user => ({
    ...user,
    displayName: user.name.toUpperCase(),
    isAdult: user.age >= 18
  }));
  
  // Render user cards (React-like pattern)
  const cardsHTML = userCards
    .map(user => \`
      <div class="user-card">
        <h4>\${user.displayName}</h4>
        <p>Age: \${user.age}</p>
        <p>Status: \${user.isAdult ? 'Adult' : 'Minor'}</p>
      </div>
    \`)
    .join('');
  
  document.getElementById('user-cards').innerHTML = cardsHTML;
};

// React-like counter with arrow functions
const createCounter = () => {
  let count = 0;
  
  const updateDisplay = () => {
    document.getElementById('count').textContent = count;
  };
  
  return {
    increment: () => {
      count++;
      updateDisplay();
    },
    decrement: () => {
      count--;
      updateDisplay();
    },
    reset: () => {
      count = 0;
      updateDisplay();
    }
  };
};

// Lexical 'this' example
class ComponentExample {
  constructor() {
    this.name = 'Component';
    this.data = { value: 42 };
  }
  
  // Regular function - 'this' depends on call context
  regularMethod() {
    return \`Regular: \${this.name}\`;
  }
  
  // Arrow function - 'this' is lexically bound
  arrowMethod = () => {
    return \`Arrow: \${this.name}\`;
  }
  
  setupEventHandlers() {
    // This won't work as expected with regular functions
    // setTimeout(this.regularMethod, 1000); // 'this' will be undefined
    
    // This works because arrow function preserves 'this'
    setTimeout(this.arrowMethod, 1000);
  }
}

// Event listeners
document.getElementById('arrow-greet')?.addEventListener('click', handleGreeting);
document.getElementById('process-data')?.addEventListener('click', processUserData);

// Counter setup
const counter = createCounter();
document.getElementById('increment')?.addEventListener('click', counter.increment);
document.getElementById('decrement')?.addEventListener('click', counter.decrement);
document.getElementById('reset')?.addEventListener('click', counter.reset);

// Lexical this demo
const component = new ComponentExample();
document.getElementById('this-demo')?.addEventListener('click', () => {
  const output = document.getElementById('this-output');
  output.innerHTML = \`
    <p>Regular method: \${component.regularMethod()}</p>
    <p>Arrow method: \${component.arrowMethod()}</p>
    <p>Arrow functions preserve 'this' from enclosing scope</p>
  \`;
});`}
              explanation="Arrow functions provide concise syntax and lexical 'this' binding. They're perfect for React event handlers, array methods, and functional programming patterns commonly used in modern React development."
              accessibilityTips={[
                "Use arrow functions for short, simple operations",
                "Prefer arrow functions for React event handlers to avoid 'this' binding issues",
                "Use regular functions when you need dynamic 'this' binding",
                "Arrow functions are great for array methods like map, filter, reduce"
              ]}
            />
          </section>

          {/* Scope & Closures */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Scope & Closures
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Understanding scope and closures is crucial for managing state and creating reusable utility functions in React applications.
            </p>
            <CodeExample
              title="Scope, Closures & Practical Applications"
              description="Understanding variable scope and closure patterns for React"
              javascriptCode={`// Scope and Closures Examples

// Global scope variable
let globalCounter = 0;

// Function demonstrating different scopes
function demonstrateScope() {
  // Function scope variable
  let functionVar = 'I am function scoped';
  
  if (true) {
    // Block scope variable (let/const)
    let blockVar = 'I am block scoped';
    var functionScoped = 'I am function scoped (var)';
    
    console.log('Inside block:', blockVar); // Works
  }
  
  // console.log(blockVar); // Error: blockVar is not defined
  console.log('Outside block:', functionScoped); // Works (var is function scoped)
  
  return {
    global: globalCounter,
    function: functionVar,
    varExample: functionScoped
  };
}

// Closure example - Counter factory
function createCounter(initialValue = 0) {
  let count = initialValue;
  
  // These functions have access to 'count' even after createCounter returns
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count,
    reset: () => { count = initialValue; return count; }
  };
}

// Create independent counter instances
const counter1 = createCounter(0);
const counter2 = createCounter(10);

// Function factory for validators (React form validation pattern)
function createValidator(type, message) {
  return function(value) {
    let isValid = false;
    
    switch(type) {
      case 'email':
        isValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
        break;
      case 'minAge':
        isValid = parseInt(value) >= 18;
        break;
      case 'required':
        isValid = value && value.trim().length > 0;
        break;
    }
    
    return {
      isValid,
      message: isValid ? 'Valid' : message,
      value
    };
  };
}

// Create specific validators using closures
const emailValidator = createValidator('email', 'Please enter a valid email address');
const ageValidator = createValidator('minAge', 'Age must be 18 or older');

// Module pattern using IIFE and closures
const CalculatorModule = (function() {
  // Private variables (closure)
  let history = [];
  let currentResult = 0;
  
  // Private functions
  const logOperation = (operation, operand, result) => {
    history.push(\`\${operation} \${operand} = \${result}\`);
  };
  
  // Public API
  return {
    add: function(num) {
      const oldResult = currentResult;
      currentResult += num;
      logOperation('add', num, currentResult);
      return currentResult;
    },
    
    multiply: function(num) {
      const oldResult = currentResult;
      currentResult *= num;
      logOperation('multiply', num, currentResult);
      return currentResult;
    },
    
    getResult: function() {
      return currentResult;
    },
    
    getHistory: function() {
      return [...history]; // Return copy to prevent external modification
    },
    
    clear: function() {
      currentResult = 0;
      history = [];
      return currentResult;
    }
  };
})();

// Event handlers
document.getElementById('scope-test')?.addEventListener('click', () => {
  const result = demonstrateScope();
  const output = document.getElementById('scope-output');
  output.innerHTML = \`
    <div>Global counter: \${result.global}</div>
    <div>Function variable: \${result.function}</div>
    <div>Var example: \${result.varExample}</div>
  \`;
});

// Counter 1 event handlers
document.getElementById('inc1')?.addEventListener('click', () => {
  const newValue = counter1.increment();
  document.getElementById('counter1').textContent = newValue;
});

document.getElementById('dec1')?.addEventListener('click', () => {
  const newValue = counter1.decrement();
  document.getElementById('counter1').textContent = newValue;
});

// Counter 2 event handlers
document.getElementById('inc2')?.addEventListener('click', () => {
  const newValue = counter2.increment();
  document.getElementById('counter2').textContent = newValue;
});

document.getElementById('dec2')?.addEventListener('click', () => {
  const newValue = counter2.decrement();
  document.getElementById('counter2').textContent = newValue;
});

// Validation examples
document.getElementById('validate-email')?.addEventListener('click', () => {
  const email = document.getElementById('email-input').value;
  const result = emailValidator(email);
  document.getElementById('validation-results').innerHTML = \`
    <p>Email validation: \${result.message}</p>
  \`;
});

document.getElementById('validate-age')?.addEventListener('click', () => {
  const age = document.getElementById('age-input').value;
  const result = ageValidator(age);
  document.getElementById('validation-results').innerHTML += \`
    <p>Age validation: \${result.message}</p>
  \`;
});

// Calculator module demo
document.getElementById('use-calculator')?.addEventListener('click', () => {
  CalculatorModule.clear();
  const result1 = CalculatorModule.add(5);
  const result2 = CalculatorModule.multiply(3);
  const result3 = CalculatorModule.add(2);
  
  const history = CalculatorModule.getHistory();
  const output = document.getElementById('calculator-output');
  
  output.innerHTML = \`
    <div>Final result: \${CalculatorModule.getResult()}</div>
    <div>History: \${history.join(', ')}</div>
  \`;
});`}
              explanation="Closures allow functions to access variables from their outer scope even after the outer function has returned. This enables powerful patterns like data privacy, function factories, and module systems - all essential for React development."
              accessibilityTips={[
                "Use closures to create private variables and methods",
                "Leverage closures for creating reusable validation functions",
                "Understand scope to avoid variable naming conflicts",
                "Use closures to maintain state in functional programming patterns"
              ]}
            />
          </section>

          {/* Best Practices */}
          <section className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Functions Best Practices for React
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  🎯 Function Design
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Use arrow functions for React event handlers</li>
                  <li>• Keep functions pure when possible for predictability</li>
                  <li>• Use descriptive names that explain the function's purpose</li>
                  <li>• Prefer multiple small functions over large complex ones</li>
                  <li>• Use default parameters for optional values</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  ⚡ Performance & Patterns
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Use closures for data privacy and encapsulation</li>
                  <li>• Avoid creating functions inside render methods</li>
                  <li>• Leverage function factories for reusable logic</li>
                  <li>• Understand 'this' binding in different contexts</li>
                  <li>• Use higher-order functions for data transformation</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
