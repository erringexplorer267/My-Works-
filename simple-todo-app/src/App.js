import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import './App.css'; // This file will be replaced by Tailwind directives

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [priorityValue, setPriorityValue] = useState('low'); // Default priority

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        date: dateValue,
        priority: priorityValue
      }]);
      setInputValue('');
      setDateValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    // Main container with full screen height, a dark background, and centering
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8">
        {/* Header with responsive text size */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-6">
          To-Do List
        </h1>

        {/* Form for adding a new todo, with a responsive layout */}
        <form onSubmit={addTodo} className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow w-full sm:w-auto p-3 rounded-lg border-2 border-gray-700 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="date"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
            className="w-full sm:w-auto p-3 rounded-lg border-2 border-gray-700 bg-gray-700 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={priorityValue}
            onChange={(e) => setPriorityValue(e.target.value)}
            className="w-full sm:w-auto p-3 rounded-lg border-2 border-gray-700 bg-gray-700 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="low" className="text-gray-800">Low</option>
            <option value="medium" className="text-gray-800">Medium</option>
            <option value="high" className="text-gray-800">High</option>
          </select>
          <button
            type="submit"
            className="w-full sm:w-auto p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </form>

        {todos.length > 0 ? (
          <TodoList todos={todos} onDelete={deleteTodo} />
        ) : (
          <p className="text-gray-400 text-center text-lg mt-8">No tasks yet! Add one above. 📝</p>
        )}
      </div>
    </div>
  );
}

export default App;
