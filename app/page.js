'use client';

import { useState } from 'react';
import Input from '@/components/Input';
import List from '@/components/List';

const todosArray = [
  /* { id: timestamp, content: string } */
];

export default function Home() {
  const [todos, setTodos] = useState(todosArray);

  return (
    <div>
      <Input setTodos={setTodos} />
      <List todos={todos} />
      <button onClick={() => setTodos([])}>Reset</button>
      <button onClick={() => {}}>Save</button>
    </div>
  );
}
