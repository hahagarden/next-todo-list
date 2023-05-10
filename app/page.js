import TodoList from '@/components/TodoList';

const todayTodos = [
  /* { id: timestamp, content: string } */
];

export default function Home() {
  return (
    <div>
      <TodoList currentTodos={todayTodos} />
    </div>
  );
}
