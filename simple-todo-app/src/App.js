import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import './App.css';

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
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <div className="todo-container">
        <form onSubmit={addTodo} className="todo-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            className="todo-input"
            required
          />
          <input
            type="date"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
            className="todo-date-input"
          />
          <select
            value={priorityValue}
            onChange={(e) => setPriorityValue(e.target.value)}
            className="todo-priority-select"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button type="submit" className="add-button">Add</button>
        </form>
        {todos.length > 0 ? (
          <TodoList todos={todos} onDelete={deleteTodo} />
        ) : (
          <p className="no-todos-message">No tasks yet! Add one above. 📝</p>
        )}
      </div>
    </div>
  );
}

export default App;