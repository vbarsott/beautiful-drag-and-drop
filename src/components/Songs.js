import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Songs = ({ song, index }) => {
  return (
    <>
      <Draggable draggableId={song.id} index={index}>
        {(provided) => (
          <div
            className='text-light p-0'
            ref={provided.innerRef}
            {...provided.draggableProps}>
            <div className='d-flex flex-column' {...provided.dragHandleProps}>
              <p className='list-unstyled bg-gray-800 rounded-3 mb-2 p-2'>
                <span className='fontStyled fs-5 text-primary'>
                  {song.songName}
                </span>
                <br />
                {song.songArtist} <br />
                <span className='text-primary'>{song.songGenre}</span>
              </p>
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default Songs;
