import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className="border-b p-2">
          {todo}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
