'use client';

import { useState } from 'react';

export default function TodoList({ currentTodos }) {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(currentTodos);

  return (
    <>
      <form>
        <input placeholder='write a todo.' value={input} onChange={(e) => setInput(e.target.value)} />
        <button
          onClick={(e) => {
            e.preventDefault();
            setTodos((prev) => [...prev, { id: Date.now(), content: input }]);
            setInput('');
          }}
        >
          submit
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <button onClick={() => setTodos([])}>Reset</button>
      <button onClick={() => {}}>Save</button>
    </>
  );
}
