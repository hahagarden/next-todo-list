import { savedTodos } from '@/app/layout';
import TodoList from '@/components/TodoList';

export async function generateMetadata({ params: { savedId } }) {
  const timestamp = new Date(Number(savedId));
  const month = timestamp.getMonth() + 1;
  const date = timestamp.getDate();
  const day = ['일', '월', '화', '수', '목', '금', '토'][timestamp.getDay()];

  return {
    title: `${month}월 ${date}일 ${day} | Next Todo`,
  };
}

export default function SavedTodosPage({ params: { savedId } }) {
  const targetTodos = savedTodos.find((saved) => saved.id === Number(savedId));

  return <TodoList currentTodos={targetTodos.todos} />;
}
