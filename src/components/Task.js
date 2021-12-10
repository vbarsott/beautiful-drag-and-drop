import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Handle = ({ provided }) => {
  return (
    <div
      {...provided.dragHandleProps}
      className='d-flex justify-content-center align-items-center vw-5 vh-5 bg-accent m-1'>
      x
    </div>
  );
};

const Container = ({ provided, task, isDragging }) => {
  return (
    <div
      {...provided.draggableProps}
      ref={provided.innerRef}
      className={`'border rounded-1 m-2 p-2' ${
        isDragging ? 'bg-accent bg-opacity-30' : 'bg-gray-300'
      }`}>
      <div className='d-flex align-items-center'>
        <div
          {...provided.dragHandleProps}
          className='d-flex justify-content-center align-items-center rounded-1 px-2 py-1 bg-accent m-1'>
          👋🏻
        </div>
        <p className='p-2'>{task.content}</p>
      </div>
    </div>
  );
};

const Task = ({ task, index }) => {
  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <Container
            provided={provided}
            task={task}
            isDragging={snapshot.isDragging}></Container>
        )}
      </Draggable>
    </>
  );
};

export default Task;
