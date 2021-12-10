import React from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

const Container = ({ provided, tasks, isDraggingOver }) => {
  return (
    <div
      className={`'tasks-list border min-vh-20' ${
        isDraggingOver
          ? 'bg-secondary bg-opacity-50'
          : 'bg-secondary bg-opacity-30'
      }`}
      ref={provided.innerRef}
      {...provided.droppableProps}>
      {tasks.map((task, index) => (
        <Task key={task.id} task={task} index={index} />
      ))}
      {provided.placeholder}
    </div>
  );
};

const Column = ({ column, tasks }) => {
  return (
    <div className='columns col bg-light m-2 p-2 border'>
      <h6 className='column-title h6 text-center bg-accent bg-opacity-30 p-1 border'>
        {column.title}
      </h6>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <Container
            provided={provided}
            tasks={tasks}
            isDraggingOver={snapshot.isDraggingOver}
          />
        )}
      </Droppable>
    </div>
  );
};

export default Column;
