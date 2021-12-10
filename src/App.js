import './styles/scss/styles.scss';

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
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  });

  const [columnOrderx, setColumnOrderx] = useState([
    'column-1',
    'column-2',
    'column-3',
  ]);

  const colOrder = columnOrderx.map((columnId) => {
    //get the column index
    const column = columnx[columnId];
    // get each task index based on the column index
    const tasks = column.taskIds.map((taskId) => taskx[taskId]);
    
    return <Column key={column.id} column={column} tasks={tasks} />;
  });

  return (
    <div className='d-flex justify-content-between p-2 border bg-gray-400'>
      {colOrder}
    </div>
  );
};

export default App;
