import React, { useState, useEffect } from 'react';

import Board from './components/Board';
import ColorRadio from './components/ColorRadio';

function App() {
  const [nRows, setNRows] = useState(8);
  const [inputText, setInputText] = useState('');
  const [pieceState, setPieceState] = useState(null);
  const [pOneColor, setPOneColor] = useState('red');
  const [pTwoColor, setPTwoColor] = useState('black');

  useEffect(() => {
    const initiateBoard = rows => {
      const lastTwo = rows - 2;
      const rowsArr = new Array(rows).fill('');
      const rowsAndColsArr = rowsArr.map(() => new Array(rows).fill(''));
      const initialBoard = rowsAndColsArr.map((row, idx) => {
        return row.map(() => {
          const player = idx < 2 ? 1 : idx >= lastTwo ? 2 : '';
          const color = idx < 2 ? pOneColor : idx >= lastTwo ? pTwoColor : '';
          return {
            color,
            player,
          };
        });
      });
      setPieceState(initialBoard);
    };
    initiateBoard(nRows);
  }, []);

  const handleBoardSizeChange = value => {
    setInputText(value);
    if (Number(value) > 0) {
      setNRows(Number(value));
    }
  };

  const handleColorChange = (color, player) => {
    setPieceState(pieceState.map(row => {
      return row.map(square => {
        if (square.player === player) {
          square.color = color;
        };
        return square;
      });
    }));
  };

  return (
    <div className='App'>
      <Board className='board' nRows={nRows} pieceState={pieceState} />
      <div className='controls-container'>
        <p className='controls-text'>
          Board Size
        </p>
        <input type='text' value={inputText} onChange={(e) => handleBoardSizeChange(e.target.value)} />
        <ColorRadio player={1} handleChange={handleColorChange} />
        <ColorRadio player={2} handleChange={handleColorChange} />
      </div>
    </div >
  )
}

export default App;
