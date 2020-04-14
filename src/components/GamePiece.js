import React from 'react';

const GamePiece = props => {
  const { color } = props;

  return (
    <div className={`game-piece`} style={{ 'background-color': color }} />
  );
};

export default GamePiece;
