import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {
  const isDragDisabled = task.id === 'task-1';
  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            className='border rounded-1 m-2'>
            <div
              className={`d-flex align-items-center ${
                isDragDisabled
                  ? 'bg-gray-300'
                  : snapshot.isDragging
                  ? 'bg-gray-200'
                  : 'bg-accent bg-opacity-30'
              } `}>
              <div
                {...provided.dragHandleProps}
                className='d-flex justify-content-center align-items-center rounded-1 bg-accent bg-opacity-30 p-2'>
                👋🏻
              </div>
              <p className='p-2 user-select-none'>{task.content}</p>
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default Task;
