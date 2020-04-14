import React from 'react';

const GamePiece = props => {
  const { color } = props;

  return (
    <div className={`game-piece`} style={{ 'backgroundColor': color }} />
  );
};

export default GamePiece;
