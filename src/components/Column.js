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
        <Droppable droppableId={column.id}>
          {(provided, snapshot) => (
            <div
              className={`'tasks-list border d-flex flex-column min-vh-40' ${
                snapshot.isDraggingOver
                  ? 'bg-accent bg-opacity-30 min-vh-40'
                  : 'bg-gray-200 min-vh-40'
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
