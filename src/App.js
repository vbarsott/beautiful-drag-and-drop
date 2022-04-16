import './styles/css/styles.css';
import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import GenreColumns from './components/GenreColumns';

function App() {
  const [songsList, setSongsList] = useState({
    'song-1': {
      id: 'song-1',
      songName: 'Aces high',
      songArtist: 'Iron Maiden',
      songGenre: 'Rock and Roll',
    },
    'song-2': {
      id: 'song-2',
      songName: 'Mustang Sally',
      songArtist: 'Wilson Picket',
      songGenre: 'Rythm and Blues',
    },
    'song-3': {
      id: 'song-3',
      songName: 'Try a Little Tenderness',
      songArtist: 'Otis Redding',
      songGenre: 'Rythm and Blues',
    },
    'song-4': {
      id: 'song-4',
      songName: 'Girl from Ipanema',
      songArtist: 'Tom Jobim',
      songGenre: 'Bossa Nova',
    },
  });

  const [genreColumns, setGenreColumns] = useState({
    'to-sort': {
      id: 'to-sort',
      genreName: 'To sort',
      songIds: ['song-1', 'song-2', 'song-3', 'song-4'],
    },
    'rock-and-roll': {
      id: 'rock-and-roll',
      genreName: 'Rock and Roll',
      songIds: [],
    },
    'bossa-nova': {
      id: 'bossa-nova',
      genreName: 'Bossa Nova',
      songIds: [],
    },
    'rhythm-and-blues': {
      id: 'rhythm-and-blues',
      genreName: 'Rhythm and Blues',
      songIds: [],
    },
  });

  const [columnsOrder, setColumnsOrder] = useState([
    'to-sort',
    'rock-and-roll',
    'bossa-nova',
    'rhythm-and-blues',
  ]);

  const onDragEnd = (result) => {
    const { draggableId, source, destination, type } = result;

    // Verify if item is being properly dropped
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // If dragging columns:
    if (type === 'column') {
      const newColumnsOrder = Array.from(columnsOrder);
      newColumnsOrder.splice(source.index, 1);
      newColumnsOrder.splice(destination.index, 0, draggableId);
      setColumnsOrder(newColumnsOrder);
      return;
    }

    // Create persistent draggable items
    const initialDroppableId = genreColumns[source.droppableId];
    const finalDroppableId = genreColumns[destination.droppableId];

    // if dropping inside the same column:
    if (initialDroppableId === finalDroppableId) {
      const newSongsIds = Array.from(initialDroppableId.songIds);
      newSongsIds.splice(source.index, 1);
      newSongsIds.splice(destination.index, 0, draggableId);

      const updateColumn = { ...initialDroppableId, songIds: newSongsIds };
      const updateColumns = {
        ...genreColumns,
        [updateColumn.id]: updateColumn,
      };

      setGenreColumns(updateColumns);
      return;
    }

    // if dropping on a different column (moving items among columns)
    const newSongIdsArray = Array.from(initialDroppableId.songIds);
    newSongIdsArray.splice(source.index, 1);

    const updateInitialDroppableId = {
      ...initialDroppableId,
      songIds: newSongIdsArray,
    };

    const finalSongIdsArray = Array.from(finalDroppableId.songIds);
    finalSongIdsArray.splice(destination.index, 0, draggableId);

    // update the songIds array of the column where it ends
    const updateFinalDroppableId = {
      ...finalDroppableId,
      songIds: finalSongIdsArray,
    };

    // set the updated state for all columns
    const updatedState = {
      ...genreColumns,
      [updateInitialDroppableId.id]: updateInitialDroppableId,
      [updateFinalDroppableId.id]: updateFinalDroppableId,
    };
    setGenreColumns(updatedState);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId='all-columns'
          direction='horizontal'
          type='column'>
          {(provided, snapshot) => (
            <main className='bg-gray-800 py-4'>
              <h1 className='fontStyled fs-4 ls-2 text-light text-center pb-4'>
                Beautiful Drag And Drop Feature
              </h1>
              <h2 className='fontStyled fs-5 ls-2 text-light text-center pb-4'>
                Lists of favorite songs to sort by genre
              </h2>
              <div className='container'>
                <div
                  className={`${
                    snapshot.isDraggingOver
                      ? 'row border border-light rounded-3 bg-gray-300 min-vh-50'
                      : 'row border border-light rounded-3 bg-gray-700 min-vh-50'
                  }`}
                  ref={provided.innerRef}
                  {...provided.droppableProps}>
                  {columnsOrder.map((columnOrderId, index) => {
                    const column = genreColumns[columnOrderId];
                    const songs = column.songIds.map(
                      (songId) => songsList[songId]
                    );
                    return (
                      <GenreColumns
                        key={column.id}
                        column={column}
                        songs={songs}
                        index={index}
                      />
                    );
                  })}
                  {provided.placeholder}
                </div>
              </div>
            </main>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default App;
