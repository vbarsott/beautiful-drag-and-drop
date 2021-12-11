import React from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

const Column = ({ column, tasks }) => {
  return (
    <>
      <div className='columns col bg-light p-2 border rounded-1'>
        <h6 className='column-title h6 text-center bg-accent bg-opacity-30 p-1 border '>
          {column.title}
        </h6>
        <Droppable droppableId={column.id} direction='horizontal'>
          {(provided, snapshot) => (
            <div
              className={`'tasks-list d-flex justify-content-center border' ${
                snapshot.isDraggingOver
                  ? 'bg-accent bg-opacity-30'
                  : 'bg-gray-200'
              } `}
              ref={provided.innerRef}
              {...provided.droppableProps}>
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </>
  );
};

export default Column;
