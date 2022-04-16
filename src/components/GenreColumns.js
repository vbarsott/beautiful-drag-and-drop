import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Songs from './Songs';

const GenreColumns = ({ column, songs, index }) => {
  return (
    <>
      <Draggable draggableId={column.id} index={index}>
        {(provided) => (
          <div
            className='col-3 p-3'
            ref={provided.innerRef}
            {...provided.draggableProps}>
            <div
              className='bg-gray-700 border border-light rounded-3'
              {...provided.dragHandleProps}>
              <div className='title p-2'>
                <h2 className='fontStyled fs-5 text-light text-center'>
                  {column.genreName}
                </h2>
              </div>

              <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                  <div
                    className={`${
                      snapshot.isDraggingOver
                        ? 'bg-gray-300 min-vh-70 rounded-3 p-2'
                        : 'bg-gray-700 min-vh-70 rounded-3 p-2'
                    }`}
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                    {songs.map((song, index) => (
                      <Songs key={song.id} song={song} index={index} />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default GenreColumns;
