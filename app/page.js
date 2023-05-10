'use client';

import TodoList from '@/components/TodoList';
import { useSelector } from 'react-redux';

export default function Home() {
  const todayTodos = useSelector((state) => state.todayTodos);

  return (
    <div>
      <TodoList currentTodos={todayTodos} />
    </div>
  );
}
