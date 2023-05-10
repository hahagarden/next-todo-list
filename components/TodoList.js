import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, resetTodo } from '../redux/todayTodosSlice';
import { addSaving } from '../redux/savedTodosSlice';

export default function TodoList({ currentTodos }) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  return (
    <>
      <form>
        <input placeholder='write a todo.' value={input} onChange={(e) => setInput(e.target.value)} />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(addTodo({ id: Date.now(), content: input }));
            setInput('');
          }}
        >
          submit
        </button>
      </form>
      <ul>
        {currentTodos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          dispatch(resetTodo());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(addSaving({ id: Date.now(), todos: currentTodos }));
        }}
      >
        Save
      </button>
    </>
  );
}
