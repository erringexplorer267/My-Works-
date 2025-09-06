import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, onDelete }) {
  // Determine the CSS class based on priority
  const priorityClass = `todo-item ${todo.priority}`;

  return (
    <li className={priorityClass}>
      <div className="todo-item-info">
        <span className="todo-text">{todo.text}</span>
        <div className="todo-details">
          {todo.date && <span>Due: {todo.date} | </span>}
          <span>Priority: {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}</span>
        </div>
      </div>
      <button onClick={() => onDelete(todo.id)} className="delete-button">
        &#x2715; {/* Unicode character for an 'X' mark */}
      </button>
    </li>
  );
}

export default TodoItem;