import React from 'react';

const GamePiece = props => {
  const { color, shape } = props;

  const makeStyle = (color, shape) => {
    const style = {}
    if (shape === 'square' || shape === 'circle') {
      style.height = '25px';
      style.width = '25px';
      style.backgroundColor = color;
    }
    if (shape === 'circle') {
      style.borderRadius = '50%';
    }
    if (shape === 'triangle') {
      style.width = 0;
      style.height = 0;
      style.borderLeft = '12px solid transparent';
      style.borderRight = '12px solid transparent';
      style.borderBottom = `24px solid ${color}`;
    }
    return style;
  };

  return (
    <div className={`game-piece`} style={makeStyle(color, shape)} />
  );
};

export default GamePiece;
