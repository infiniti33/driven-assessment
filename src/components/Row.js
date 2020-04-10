import React from 'react';

import Square from './Square';
import '../styles/styles.css';

const Row = props => {
  const { columns, startBlack } = props;

  const renderSquares = numSquares => {
    const squares = [];
    let isBlack = startBlack;

    for (let i = 0; i < numSquares; i++) {
      const color = isBlack ? 'black' : 'white';
      squares.push(
        <Square color={color} key={`square${i}`} />
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
