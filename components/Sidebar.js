'use client';

import { useRouter } from 'next/navigation'; // 클라이언트 컴포넌트 안에서만 가능

export default function Sidebar({ savedTodos }) {
  const router = useRouter();

  const convertToDate = (savedId) => {
    const timestamp = new Date(savedId);
    const month = timestamp.getMonth() + 1;
    const date = timestamp.getDate();
    const day = ['일', '월', '화', '수', '목', '금', '토'][timestamp.getDay()];
    return (
      <>
        <div>
          {month}/{date}
        </div>
        <div>{day}</div>
      </>
    );
  };

  const handleDateClick = (savedId) => {
    router.push(`/todos/${savedId}`);
  };

  return (
    <aside>
      <button onClick={() => router.push('/')}>Home</button>
      {savedTodos.map((savedTodo) => (
        <button key={savedTodo.id} onClick={() => handleDateClick(savedTodo.id)}>
          {convertToDate(savedTodo.id)}
        </button>
      ))}
    </aside>
  );
}
