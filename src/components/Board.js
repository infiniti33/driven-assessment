import React from 'react';

import Row from './Row';

const Board = props => {
  const { nRows, pieceState } = props;

  if (!pieceState) return <p>Loading...</p>

  const renderRows = numRows => {
    const rows = [];
    let isBlack = true;

    for (let i = 0; i < numRows; i++) {
      rows.push(
        <Row
          columns={nRows}
          startBlack={isBlack}
          key={`row${i}`}
          row={i}
          rowState={pieceState[i]}
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