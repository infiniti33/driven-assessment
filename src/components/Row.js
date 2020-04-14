import React from 'react';

import Square from './Square';

const Row = props => {
  const { row, columns, startBlack, hasInitialPiece, initialPieceColor } = props;

  const renderSquares = numSquares => {
    const squares = [];
    let isBlack = startBlack;

    for (let i = 0; i < numSquares; i++) {
      const color = isBlack ? 'black' : 'white';
      squares.push(
        <Square
          color={color}
          key={`square${i}`}
          row={row}
          col={i}
          hasInitialPiece={hasInitialPiece}
          initialPieceColor={initialPieceColor}
        />
      );
      isBlack = !isBlack;
    }
    return squares;
  }

  return (
    <div className='row'>
      {renderSquares(columns)}
    </div>
  )
}

export default Row;
