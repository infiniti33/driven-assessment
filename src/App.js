import React, { useState } from 'react';

import Board from './components/Board';
import './styles/styles.css';

function App() {
  const [nRows, setNRows] = useState(8);
  const [inputText, setInputText] = useState('');

  const handleInputChange = value => {
    setInputText(value);
    if (Number(value) > 0) {
      setNRows(Number(value))
    }
  }

  return (
    <div className='App'>
      <Board className='board' nRows={nRows} />
      <div className='controls-container'>
        <input type='text' value={inputText} onChange={(e) => handleInputChange(e.target.value)} />
      </div>
    </div>
  )
}

export default App;
