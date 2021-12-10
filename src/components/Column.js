import React from 'react';
import Task from './Task';

const Column = ({ column, tasks }) => {
  return (
    <div className='columns col bg-light m-2 p-2 border'>
      <h6 className='column-title h6 text-center bg-accent bg-opacity-30 p-1 border'>
        {column.title}
      </h6>
      <div className='tasks-list border min-vh-20'>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
