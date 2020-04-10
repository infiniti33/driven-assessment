import React, { useState } from 'react';

import Row from './Row';

const Board = props => {
  const { nRows } = props;

  const renderRows = numRows => {
    const rows = [];
    let isBlack = true;

    for (let i = 0; i < numRows; i++) {
      rows.push(
        <Row columns={nRows} startBlack={isBlack} key={`row${i}`} />
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