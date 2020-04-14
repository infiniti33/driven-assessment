import React from 'react';
import '../styles/styles.css'
import GamePiece from './GamePiece';

const Square = props => {
  const { color, hasInitialPiece, initialPieceColor, row, col } = props;

  let pieceColor = initialPieceColor;
  let hasGamePiece = hasInitialPiece;

  return (
    <div className={`square ${color}`}>
      {hasGamePiece && <GamePiece row={row} col={col} color={pieceColor} />}
    </div>
  );
};

export default Square;
