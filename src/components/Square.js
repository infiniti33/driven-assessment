import React from 'react';
import '../styles/styles.css'

const Square = props => {
  const { color } = props;

  return (
    <div className={`square ${color}`}>
    </div>
  )
}

export default Square;