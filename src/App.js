import './styles/scss/styles.scss';

import { DragDropContext } from 'react-beautiful-dnd';
import { useState } from 'react';
import Column from './components/Column';

const App = () => {
  const [taskx, setTaskx] = useState({
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
  });

  const [columnx, setColumnx] = useState({
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    // 'column-2': {
    //   id: 'column-2',
    //   title: 'In progress',
    //   taskIds: [],
    // },
    // 'column-3': {
    //   id: 'column-3',
    //   title: 'Done',
    //   taskIds: [],
    // },
  });

  // Facilitate reordering of the columns
  const [columnOrderx, setColumnOrderx] = useState([
    'column-1',
    // 'column-2',
    // 'column-3',
  ]);

  const onDragEnd = (event) => {
    const { source, destination, draggableId } = event;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = columnx[source.droppableId];
    const finish = columnx[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...columnx,
        [newColumn.id]: newColumn,
      };
      setColumnx(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...columnx,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    };
    setColumnx(newState);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='d-flex justify-content-between p-2 border bg-gray-400'>
          {columnOrderx.map((columnId) => {
            const column = columnx[columnId];
            const tasks = column.taskIds.map((taskId) => taskx[taskId]);
            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </div>
      </DragDropContext>
    </>
  );
};

export default App;
