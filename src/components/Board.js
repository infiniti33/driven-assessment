import React from 'react';

import Row from './Row';

const Board = props => {
  const { nRows } = props;

  const renderRows = numRows => {
    const rows = [];
    let isBlack = true;
    const lastTwoRows = numRows - 2;

    for (let i = 0; i < numRows; i++) {
      let hasInitialPiece = false;
      let initialPieceColor = 'red';

      if (i < 2) hasInitialPiece = true;
      if (i >= lastTwoRows) {
        hasInitialPiece = true;
        initialPieceColor = 'black';
      }

      rows.push(
        <Row
          columns={nRows}
          startBlack={isBlack}
          key={`row${i}`}
          row={i}
          hasInitialPiece={hasInitialPiece}
          initialPieceColor={initialPieceColor}
        />
      );
      isBlack = !isBlack;
    }

    return rows;
  }

  return (
    <div className='board'>
      {renderRows(nRows)}
    </div>
  );
}

export default Board;