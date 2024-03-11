import './todo.css'
import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const Todo = ({ task, index, deleteTask, editTask, counter }) => {
  const handleEdit = () => {
    const newTask = prompt('Enter the new task:', task);
    if (newTask !== null) {
      editTask(index, newTask);
    }
  };

  return (
    <div className="task-card">
        <div className="task-card-comm">
            <p className='text'>{task}</p>
            <span className='text'>Counter: {counter}</span>
        </div>
        <div className='task-card-button'>
            <button className='button2' onClick={handleEdit}><FaEdit /></button>
            <button className='button2' onClick={() => deleteTask(index)}><FaTrash /></button>
        </div>
    </div>
  );
};

export default Todo;
