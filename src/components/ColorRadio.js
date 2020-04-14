import React from 'react';

const ColorRadio = props => {

  const { player, handleChange } = props;

  return (
    <div>
      <p className='controls-text'>
        {`Player ${player} Color`}
      </p>
      <input type="radio" id={`${player}-red`} name={`${player}-color`} value="red" onChange={(e) => handleChange(e.target.value, player)} />
      <label className='controls-text' htmlFor={`${player}-red`}> Red</label> <br></br>
      <input type="radio" id={`${player}-black`} name={`${player}-color`} value="black" onChange={(e) => handleChange(e.target.value, player)} />
      <label className='controls-text' htmlFor={`${player}-black`}> Black</label> <br></br>
      <input type="radio" id={`${player}-blue`} name={`${player}-color`} value="blue" onChange={(e) => handleChange(e.target.value, player)} />
      <label className='controls-text' htmlFor={`${player}-blue`}> Blue</label> <br></br>
    </div>
  );
};

export default ColorRadio;
