import React from 'react';

function Cell(props) {
  function handleClick(e) {
    e.preventDefault();
    props.flipCellsAround();
  }
  return (
    <td
      style={{
        width: '100px',
        height: '100px',
        background: props.isLit ? 'blue' : 'black'
      }}
      onClick={handleClick}
    />
  );
}

export default Cell;
