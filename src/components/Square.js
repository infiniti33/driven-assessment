import React from 'react';
import '../styles/styles.css'
import GamePiece from './GamePiece';

const Square = props => {
  const { color, row, col, squareState } = props;
  const hasGamePiece = squareState.color === '' ? false : true;

  return (
    <div className={`square ${color}`}>
      {hasGamePiece && <GamePiece row={row} col={col} color={squareState.color} />}
    </div>
  );
};

export default Square;
