import { useState } from 'react';

export default function Input({ setTodos }) {
  const [input, setInput] = useState('');

  return (
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
  );
}
