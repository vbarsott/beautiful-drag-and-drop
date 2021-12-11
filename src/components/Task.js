import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {
  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className='border rounded-circle'>
            <div
              className={`d-flex align-items-center ${
                snapshot.isDragging
                  ? 'rounded-circle bg-gray-200 p-4'
                  : 'rounded-circle bg-accent bg-opacity-30 p-4'
              } `}>
              <p className='p-2 user-select-none'>{task.content[0]}</p>
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default Task;
