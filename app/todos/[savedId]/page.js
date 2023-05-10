'use client';

import TodoList from '@/components/TodoList';
import { useSelector } from 'react-redux';

export default function SavedTodosPage({ params: { savedId } }) {
  const savedTodos = useSelector((state) => state.savedTodos);
  const targetTodos = savedTodos.find((saved) => saved.id === Number(savedId));

  return (
    <>
      <div>This is saved page</div>
      <TodoList currentTodos={targetTodos.todos} />
    </>
  );
}
