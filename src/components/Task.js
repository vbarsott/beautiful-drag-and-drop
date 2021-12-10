import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Container = ({ provided, task, isDragging }) => {
  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      className={`'border m-2 p-2' ${
        isDragging ? 'bg-accent bg-opacity-30' : 'bg-gray-300'
      }`}>
      <p className='p-2'>{task.content}</p>
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
            isDragging={snapshot.isDragging}
          />
        )}
      </Draggable>
    </>
  );
};

export default Task;
