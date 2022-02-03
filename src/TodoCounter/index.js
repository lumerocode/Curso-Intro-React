import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <>
    <h1 className='TodoCounterTitle'>YOUR TASK</h1>
    <h2 className="TodoCounter">Completed {completedTodos} to {totalTodos} Tasks</h2></>
  );
}

export { TodoCounter };