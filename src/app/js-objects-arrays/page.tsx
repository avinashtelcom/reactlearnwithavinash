import { CodeExample } from "@/components/CodeExample";

export default function JSObjectsArraysPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript Objects & Arrays
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl">
            Master JavaScript objects and arrays - the fundamental data structures for React development. 
            Learn object manipulation, array methods, and destructuring patterns essential for modern React applications.
          </p>
        </header>

        <div className="space-y-12">
          {/* Object Fundamentals */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              JavaScript Objects
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Objects are key-value pairs that form the backbone of JavaScript. In React, they're used for props, state, and component data.
            </p>
            <CodeExample
              title="Object Creation & Manipulation"
              description="Essential object patterns for React development"
              javascriptCode={`// JavaScript Objects Examples

// Object literal syntax
const user = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  age: 25,
  role: 'Developer',
  isActive: true
};

// Object with methods (React component pattern)
const userProfile = {
  // Properties
  firstName: 'John',
  lastName: 'Doe',
  preferences: {
    theme: 'dark',
    language: 'en',
    notifications: true
  },
  
  // Methods
  getFullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  },
  
  updatePreference(key, value) {
    this.preferences[key] = value;
    return this.preferences;
  },
  
  // Arrow function method (lexical this)
  getDisplayInfo: () => {
    // Note: arrow functions don't bind 'this'
    return 'User profile info';
  }
};

// Object constructor function
function User(name, email, role) {
  this.name = name;
  this.email = email;
  this.role = role;
  this.createdAt = new Date();
  
  this.getInfo = function() {
    return \`\${this.name} (\${this.role})\`;
  };
}

// ES6 Class syntax (React component pattern)
class UserManager {
  constructor() {
    this.users = [];
    this.nextId = 1;
  }
  
  addUser(userData) {
    const newUser = {
      id: this.nextId++,
      ...userData,
      createdAt: new Date().toISOString()
    };
    this.users.push(newUser);
    return newUser;
  }
  
  findUser(id) {
    return this.users.find(user => user.id === id);
  }
  
  updateUser(id, updates) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      // Immutable update pattern (React state)
      this.users[userIndex] = {
        ...this.users[userIndex],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      return this.users[userIndex];
    }
    return null;
  }
}

// Object property access patterns
function demonstrateObjectAccess() {
  const obj = {
    'simple-key': 'value1',
    'complex key': 'value2',
    dynamicKey: 'value3',
    nested: {
      level1: {
        level2: 'deep value'
      }
    }
  };
  
  return {
    dotNotation: obj.dynamicKey,
    bracketNotation: obj['simple-key'],
    complexKey: obj['complex key'],
    deepAccess: obj.nested.level1.level2,
    dynamicAccess: obj[\`dynamic\${'Key'}\`]
  };
}

// Object methods and properties
function demonstrateObjectMethods() {
  const sampleObject = {
    name: 'React Component',
    type: 'functional',
    props: ['children', 'className', 'onClick']
  };
  
  return {
    keys: Object.keys(sampleObject),
    values: Object.values(sampleObject),
    entries: Object.entries(sampleObject),
    hasOwnProperty: sampleObject.hasOwnProperty('name'),
    propertyNames: Object.getOwnPropertyNames(sampleObject)
  };
}

// Immutable object updates (React pattern)
function updateObjectImmutably(originalObject, updates) {
  return {
    ...originalObject,
    ...updates,
    updatedAt: Date.now()
  };
}

// Nested object updates
function updateNestedObject(obj, path, value) {
  const keys = path.split('.');
  const result = { ...obj };
  
  let current = result;
  for (let i = 0; i < keys.length - 1; i++) {
    current[keys[i]] = { ...current[keys[i]] };
    current = current[keys[i]];
  }
  
  current[keys[keys.length - 1]] = value;
  return result;
}

// Event handlers
document.getElementById('update-profile')?.addEventListener('click', () => {
  const updatedUser = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    age: parseInt(document.getElementById('age').value),
    role: document.getElementById('role').value
  };
  
  const profileHTML = \`
    <div class="profile-card">
      <h4>\${updatedUser.name}</h4>
      <p>Email: \${updatedUser.email}</p>
      <p>Age: \${updatedUser.age}</p>
      <p>Role: \${updatedUser.role}</p>
    </div>
  \`;
  
  document.getElementById('profile-display').innerHTML = profileHTML;
});

document.getElementById('demo-methods')?.addEventListener('click', () => {
  const methods = demonstrateObjectMethods();
  const output = document.getElementById('methods-output');
  
  output.innerHTML = \`
    <div>Keys: [\${methods.keys.join(', ')}]</div>
    <div>Values: [\${methods.values.join(', ')}]</div>
    <div>Entries: \${JSON.stringify(methods.entries)}</div>
    <div>Has 'name' property: \${methods.hasOwnProperty}</div>
  \`;
});

document.getElementById('demo-nested')?.addEventListener('click', () => {
  const component = {
    name: 'UserCard',
    props: {
      user: {
        id: 1,
        profile: {
          name: 'Alice',
          avatar: 'avatar.jpg'
        }
      },
      theme: 'dark',
      onUpdate: 'function'
    }
  };
  
  const output = document.getElementById('nested-output');
  output.innerHTML = \`
    <div>Component: \${component.name}</div>
    <div>User Name: \${component.props.user.profile.name}</div>
    <div>Theme: \${component.props.theme}</div>
    <pre>\${JSON.stringify(component, null, 2)}</pre>
  \`;
});

document.getElementById('demo-comparison')?.addEventListener('click', () => {
  const obj1 = { name: 'Alice', age: 25 };
  const obj2 = { name: 'Alice', age: 25 };
  const obj3 = obj1;
  
  const updated = updateObjectImmutably(obj1, { age: 26 });
  
  const output = document.getElementById('comparison-output');
  output.innerHTML = \`
    <div>obj1 === obj2: \${obj1 === obj2} (false - different references)</div>
    <div>obj1 === obj3: \${obj1 === obj3} (true - same reference)</div>
    <div>Original obj1: \${JSON.stringify(obj1)}</div>
    <div>Updated copy: \${JSON.stringify(updated)}</div>
    <div>obj1 unchanged: \${obj1.age === 25}</div>
  \`;
});`}
              explanation="Objects are fundamental to React development - they represent component props, state, and data. Understanding object manipulation, property access, and immutable updates is crucial for effective React programming."
              accessibilityTips={[
                "Use descriptive property names for better code readability",
                "Prefer immutable updates to avoid unintended side effects",
                "Use Object.keys(), Object.values(), and Object.entries() for iteration",
                "Understand the difference between shallow and deep copying"
              ]}
            />
          </section>

          {/* Array Methods */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              JavaScript Arrays & Essential Methods
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Arrays and their methods are essential for rendering lists, filtering data, and transforming information in React applications.
            </p>
            <CodeExample
              title="Array Methods for React Development"
              description="Essential array methods: map, filter, reduce, forEach, and more"
              javascriptCode={`// JavaScript Array Methods Examples

// Sample data for demonstrations
const users = [
  { id: 1, name: 'Alice Johnson', role: 'Developer', age: 28, active: true },
  { id: 2, name: 'Bob Smith', role: 'Designer', age: 32, active: false },
  { id: 3, name: 'Charlie Brown', role: 'Developer', age: 25, active: true },
  { id: 4, name: 'Diana Ross', role: 'Manager', age: 35, active: true },
  { id: 5, name: 'Eve Wilson', role: 'Designer', age: 29, active: false }
];

let todos = [
  { id: 1, text: 'Learn JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Build awesome apps', completed: false }
];

let nextTodoId = 4;

// Array.map() - Transform data (React rendering pattern)
const transformUserData = () => {
  const transformed = users.map(user => ({
    ...user,
    displayName: user.name.toUpperCase(),
    isAdult: user.age >= 18,
    status: user.active ? 'Active' : 'Inactive'
  }));
  
  return transformed;
};

// Array.filter() - Filter data based on conditions
const filterActiveUsers = () => {
  return users.filter(user => user.active);
};

const filterByRole = (role) => {
  return users.filter(user => user.role === role);
};

// Array.reduce() - Aggregate data
const getUserStats = () => {
  return users.reduce((stats, user) => {
    // Count by role
    stats.byRole[user.role] = (stats.byRole[user.role] || 0) + 1;
    
    // Calculate average age
    stats.totalAge += user.age;
    stats.count += 1;
    stats.averageAge = stats.totalAge / stats.count;
    
    // Count active users
    if (user.active) stats.activeCount++;
    
    return stats;
  }, {
    byRole: {},
    totalAge: 0,
    count: 0,
    averageAge: 0,
    activeCount: 0
  });
};

// Array.find() and Array.findIndex()
const findUser = (id) => users.find(user => user.id === id);
const findUserIndex = (id) => users.findIndex(user => user.id === id);

// Array.some() and Array.every()
const hasActiveUsers = () => users.some(user => user.active);
const allUsersAdult = () => users.every(user => user.age >= 18);

// Array.sort() - Sorting data
const sortUsersByName = () => {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
};

const sortUsersByAge = () => {
  return [...users].sort((a, b) => b.age - a.age);
};

// Array.includes() and Array.indexOf()
const searchUsers = (searchTerm) => {
  return users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// Immutable array operations (React state patterns)
const addTodo = (text) => {
  const newTodo = {
    id: nextTodoId++,
    text,
    completed: false
  };
  
  // Immutable add
  todos = [...todos, newTodo];
  return todos;
};

const toggleTodo = (id) => {
  // Immutable update
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  return todos;
};

const removeTodo = (id) => {
  // Immutable remove
  todos = todos.filter(todo => todo.id !== id);
  return todos;
};

const clearCompletedTodos = () => {
  todos = todos.filter(todo => !todo.completed);
  return todos;
};

// Array grouping (useful for React data organization)
const groupUsersByRole = () => {
  return users.reduce((groups, user) => {
    const role = user.role;
    if (!groups[role]) {
      groups[role] = [];
    }
    groups[role].push(user);
    return groups;
  }, {});
};

// Render todo list (React-like pattern)
const renderTodos = () => {
  const todoList = document.getElementById('todo-list');
  const stats = document.getElementById('todo-stats');
  
  // Calculate stats
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const remaining = total - completed;
  
  // Update stats
  stats.innerHTML = \`
    <div>Total: \${total} | Completed: \${completed} | Remaining: \${remaining}</div>
  \`;
  
  // Render todos
  todoList.innerHTML = todos
    .map(todo => \`
      <li class="todo-item \${todo.completed ? 'completed' : ''}">
        <input type="checkbox" \${todo.completed ? 'checked' : ''} 
               onchange="toggleTodo(\${todo.id}); renderTodos();">
        <span>\${todo.text}</span>
        <button onclick="removeTodo(\${todo.id}); renderTodos();">Delete</button>
      </li>
    \`)
    .join('');
};

// Event handlers
document.getElementById('add-todo')?.addEventListener('click', () => {
  const input = document.getElementById('new-todo');
  const text = input.value.trim();
  if (text) {
    addTodo(text);
    input.value = '';
    renderTodos();
  }
});

document.getElementById('toggle-all')?.addEventListener('click', () => {
  const allCompleted = todos.every(todo => todo.completed);
  todos = todos.map(todo => ({ ...todo, completed: !allCompleted }));
  renderTodos();
});

document.getElementById('clear-completed')?.addEventListener('click', () => {
  clearCompletedTodos();
  renderTodos();
});

document.getElementById('demo-transform')?.addEventListener('click', () => {
  const transformed = transformUserData();
  const stats = getUserStats();
  
  document.getElementById('original-data').innerHTML = \`
    <h4>Original Data:</h4>
    <pre>\${JSON.stringify(users, null, 2)}</pre>
  \`;
  
  document.getElementById('transformed-data').innerHTML = \`
    <h4>Transformed Data:</h4>
    <pre>\${JSON.stringify(transformed.slice(0, 2), null, 2)}</pre>
    <h4>User Statistics:</h4>
    <pre>\${JSON.stringify(stats, null, 2)}</pre>
  \`;
});

document.getElementById('search-users')?.addEventListener('click', () => {
  const searchTerm = document.getElementById('search-term').value;
  const results = searchUsers(searchTerm);
  
  document.getElementById('search-results').innerHTML = \`
    <h4>Search Results for "\${searchTerm}":</h4>
    <ul>
      \${results.map(user => \`<li>\${user.name} - \${user.role}</li>\`).join('')}
    </ul>
  \`;
});

document.getElementById('sort-users')?.addEventListener('click', () => {
  const sorted = sortUsersByName();
  
  document.getElementById('search-results').innerHTML = \`
    <h4>Users Sorted by Name:</h4>
    <ul>
      \${sorted.map(user => \`<li>\${user.name} - \${user.role}</li>\`).join('')}
    </ul>
  \`;
});

document.getElementById('group-users')?.addEventListener('click', () => {
  const grouped = groupUsersByRole();
  
  const groupedHTML = Object.entries(grouped)
    .map(([role, roleUsers]) => \`
      <div>
        <h5>\${role} (\${roleUsers.length}):</h5>
        <ul>
          \${roleUsers.map(user => \`<li>\${user.name}</li>\`).join('')}
        </ul>
      </div>
    \`)
    .join('');
  
  document.getElementById('search-results').innerHTML = \`
    <h4>Users Grouped by Role:</h4>
    \${groupedHTML}
  \`;
});

document.getElementById('demo-immutable')?.addEventListener('click', () => {
  const original = [1, 2, 3, 4, 5];
  
  // Immutable operations
  const doubled = original.map(x => x * 2);
  const evens = original.filter(x => x % 2 === 0);
  const sum = original.reduce((acc, x) => acc + x, 0);
  const withAdded = [...original, 6, 7];
  const withoutFirst = original.slice(1);
  const reversed = [...original].reverse();
  
  document.getElementById('immutable-output').innerHTML = \`
    <div>Original: [\${original.join(', ')}]</div>
    <div>Doubled: [\${doubled.join(', ')}]</div>
    <div>Evens: [\${evens.join(', ')}]</div>
    <div>Sum: \${sum}</div>
    <div>With Added: [\${withAdded.join(', ')}]</div>
    <div>Without First: [\${withoutFirst.join(', ')}]</div>
    <div>Reversed: [\${reversed.join(', ')}]</div>
    <div>Original Unchanged: [\${original.join(', ')}]</div>
  \`;
});

// Initialize
window.toggleTodo = toggleTodo;
window.removeTodo = removeTodo;
document.addEventListener('DOMContentLoaded', renderTodos);`}
              explanation="Array methods like map(), filter(), and reduce() are essential for React development. They enable data transformation, list rendering, and state management while maintaining immutability - a core React principle."
              accessibilityTips={[
                "Use map() to transform data for rendering React components",
                "Use filter() to show/hide items based on conditions",
                "Use reduce() to calculate derived state or aggregate data",
                "Always return new arrays instead of mutating existing ones in React"
              ]}
            />
          </section>

          {/* Destructuring */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Destructuring Assignment
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Destructuring is essential for React development - it's used for extracting props, state values, and working with function parameters cleanly.
            </p>
            <CodeExample
              title="Object & Array Destructuring for React"
              description="Modern destructuring patterns essential for React development"
              javascriptCode={`// Destructuring Assignment Examples

// Object destructuring - React props pattern
const UserCard = ({ user, onEdit, onDelete, theme = 'light' }) => {
  // Destructuring nested object
  const { id, name, email, profile: { avatar, bio } = {} } = user;
  
  return \`
    <div class="user-card \${theme}">
      <img src="\${avatar || 'default-avatar.png'}" alt="\${name}">
      <h3>\${name}</h3>
      <p>\${email}</p>
      <p>\${bio || 'No bio available'}</p>
      <div class="actions">
        <button onclick="handleEdit(\${id})">Edit</button>
        <button onclick="handleDelete(\${id})">Delete</button>
      </div>
    </div>
  \`;
};

// Array destructuring - React hooks pattern
let counterState = [0, null]; // [value, setter]

const useCounter = (initialValue = 0) => {
  let count = initialValue;
  
  const setCount = (newValue) => {
    count = typeof newValue === 'function' ? newValue(count) : newValue;
    updateCounterDisplay();
    return count;
  };
  
  counterState = [count, setCount];
  return counterState;
};

// Destructuring function parameters (React event handlers)
const handleFormSubmit = ({ target, preventDefault }) => {
  preventDefault();
  
  // Destructuring form data
  const formData = new FormData(target);
  const { name, email, role } = Object.fromEntries(formData);
  
  return { name, email, role };
};

// API response destructuring
const processApiResponse = (response) => {
  // Destructuring with renaming and defaults
  const {
    data: userData,
    status = 'unknown',
    message: apiMessage = 'No message',
    meta: { total, page = 1, limit = 10 } = {}
  } = response;
  
  return {
    userData,
    status,
    apiMessage,
    pagination: { total, page, limit }
  };
};

// Rest operator with destructuring
const extractUserInfo = (user) => {
  // Extract specific properties, rest goes to 'others'
  const { id, name, email, ...others } = user;
  
  return {
    essential: { id, name, email },
    additional: others
  };
};

// Array destructuring with rest
const processUserList = (users) => {
  // Get first user, second user, and rest
  const [firstUser, secondUser, ...remainingUsers] = users;
  
  return {
    primary: firstUser,
    secondary: secondUser,
    others: remainingUsers
  };
};

// Nested destructuring (React component props)
const ProfileComponent = ({
  user: {
    personal: { firstName, lastName },
    contact: { email, phone },
    settings: { theme = 'light', language = 'en' } = {}
  },
  onUpdate,
  isEditable = false
}) => {
  const fullName = \`\${firstName} \${lastName}\`;
  
  return \`
    <div class="profile \${theme}">
      <h2>\${fullName}</h2>
      <p>Email: \${email}</p>
      <p>Phone: \${phone || 'Not provided'}</p>
      <p>Language: \${language}</p>
      \${isEditable ? '<button onclick="editProfile()">Edit</button>' : ''}
    </div>
  \`;
};

// Swap variables with destructuring
const swapValues = (a, b) => {
  [a, b] = [b, a];
  return { a, b };
};

// Function returning multiple values
const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

// Destructuring in for loops
const processUsers = (users) => {
  const results = [];
  
  for (const { id, name, active } of users) {
    if (active) {
      results.push(\`Active user: \${name} (ID: \${id})\`);
    }
  }
  
  return results;
};

// Sample data
const sampleUsers = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    profile: {
      avatar: 'alice.jpg',
      bio: 'Full-stack developer'
    }
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    profile: {
      avatar: 'bob.jpg',
      bio: 'UI/UX Designer'
    }
  }
];

const sampleApiResponse = {
  data: [
    { id: 1, name: 'User 1', role: 'admin' },
    { id: 2, name: 'User 2', role: 'user' }
  ],
  status: 'success',
  message: 'Users fetched successfully',
  meta: {
    total: 50,
    page: 1,
    limit: 10
  }
};

// Helper functions
const updateCounterDisplay = () => {
  document.getElementById('counter-display').textContent = counterState[0];
  document.getElementById('state-info').innerHTML = \`
    <div>Current state: [\${counterState[0]}, function]</div>
    <div>Destructured as: const [count, setCount] = useState(\${counterState[0]})</div>
  \`;
};

// Event handlers
document.getElementById('render-users')?.addEventListener('click', () => {
  const userCardsHTML = sampleUsers
    .map(user => UserCard({ 
      user, 
      onEdit: () => {}, 
      onDelete: () => {}, 
      theme: 'light' 
    }))
    .join('');
    
  document.getElementById('user-cards').innerHTML = userCardsHTML;
});

document.getElementById('increment-counter')?.addEventListener('click', () => {
  const [count, setCount] = useCounter();
  setCount(count + 1);
});

document.getElementById('reset-counter')?.addEventListener('click', () => {
  const [, setCount] = useCounter();
  setCount(0);
});

document.getElementById('fetch-user-data')?.addEventListener('click', () => {
  // Simulate API call
  const processed = processApiResponse(sampleApiResponse);
  
  document.getElementById('api-results').innerHTML = \`
    <h4>Destructured API Response:</h4>
    <pre>\${JSON.stringify(processed, null, 2)}</pre>
  \`;
});

document.getElementById('demo-params')?.addEventListener('click', () => {
  // Demonstrate parameter destructuring
  const config = {
    theme: 'dark',
    language: 'en',
    animations: true,
    notifications: {
      email: true,
      push: false
    }
  };
  
  // Function with destructured parameters
  const applySettings = ({
    theme = 'light',
    language = 'en',
    animations = false,
    notifications: { email = false, push = false } = {}
  }) => {
    return {
      appliedTheme: theme,
      appliedLanguage: language,
      animationsEnabled: animations,
      emailNotifications: email,
      pushNotifications: push
    };
  };
  
  const result = applySettings(config);
  
  document.getElementById('param-results').innerHTML = \`
    <h4>Parameter Destructuring Result:</h4>
    <pre>\${JSON.stringify(result, null, 2)}</pre>
  \`;
});

document.getElementById('demo-advanced')?.addEventListener('click', () => {
  // Advanced destructuring patterns
  const complexObject = {
    users: [
      { id: 1, name: 'Alice', scores: [85, 90, 88] },
      { id: 2, name: 'Bob', scores: [92, 87, 91] }
    ],
    metadata: {
      total: 2,
      avgScore: 88.5,
      filters: { active: true, role: 'student' }
    }
  };
  
  // Complex destructuring
  const {
    users: [
      { name: firstName, scores: [firstScore] },
      { name: secondName, scores: [, , thirdScore] }
    ],
    metadata: {
      total,
      filters: { active }
    }
  } = complexObject;
  
  // Array destructuring with computed property
  const [first, second, third] = ['apple', 'banana', 'cherry'];
  const { length } = ['apple', 'banana', 'cherry'];
  
  document.getElementById('advanced-results').innerHTML = \`
    <h4>Advanced Destructuring:</h4>
    <div>First user: \${firstName}, first score: \${firstScore}</div>
    <div>Second user: \${secondName}, third score: \${thirdScore}</div>
    <div>Total users: \${total}, Active filter: \${active}</div>
    <div>Array destructuring: \${first}, \${second}, \${third}</div>
    <div>Array length: \${length}</div>
  \`;
});

// Initialize counter
document.addEventListener('DOMContentLoaded', () => {
  useCounter(0);
  updateCounterDisplay();
});`}
              explanation="Destructuring assignment provides a clean way to extract values from objects and arrays. It's extensively used in React for props, state, and function parameters, making code more readable and maintainable."
              accessibilityTips={[
                "Use destructuring to extract React props for cleaner component code",
                "Provide default values in destructuring for optional props",
                "Use array destructuring with React hooks (useState, useEffect)",
                "Combine destructuring with rest operators for flexible function parameters"
              ]}
            />
          </section>

          {/* Best Practices */}
          <section className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Objects & Arrays Best Practices for React
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  📦 Object Management
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Use object destructuring for React props and state</li>
                  <li>• Prefer immutable updates with spread operator (...)</li>
                  <li>• Use descriptive property names for better readability</li>
                  <li>• Leverage Object.keys(), Object.values(), Object.entries()</li>
                  <li>• Understand reference vs. value equality for objects</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  📋 Array Operations
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Use map() for transforming data and rendering lists</li>
                  <li>• Use filter() for conditional rendering and data filtering</li>
                  <li>• Use reduce() for aggregating data and complex transformations</li>
                  <li>• Always return new arrays instead of mutating existing ones</li>
                  <li>• Combine array methods for powerful data processing pipelines</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
