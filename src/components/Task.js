import React from 'react';

const Task = ({ task }) => {
  return <div className='border m-1 p-1'>{task.content}</div>;
};

export default Task;
