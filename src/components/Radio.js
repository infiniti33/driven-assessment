import React from 'react';

const Radio = props => {

  const { player, option, options, handleChange } = props;

  const renderRadios = (option, options) => {
    return options.map(opt => {
      return (
        <div >
          <input type="radio" id={`${player}-${opt}`} name={`${player}-${option}`} value={`${opt.toLowerCase()}`} onChange={(e) => handleChange(e.target.value, player)} />
          <label className='controls-text' htmlFor={`${player}-${opt}`}>{opt}</label> <br></br>
        </div>
      );
    });
  }

  return (
    <div style={{ 'paddingRight': '20px' }}>
      <p className='controls-text'>
        {`Player ${player} ${option}`}
      </p>
      {renderRadios(option, options)}
    </div>
  );
};

export default Radio;
