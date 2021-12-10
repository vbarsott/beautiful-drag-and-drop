import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Container = ({ provided, task }) => {
  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      className='border m-1 p-1'>
      {task.content}
    </div>
  );
};

const Task = ({ task, index }) => {
  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided) => <Container provided={provided} task={task} />}
      </Draggable>
    </>
  );
};

export default Task;
