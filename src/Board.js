import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  };
  constructor(props) {
    super(props);
    this.state = {
      board: this.createBoard()
    };
  }
  createBoard() {
    let board = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    return board;
  }
  render() {
    let tBoard = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        let coord = y + '-' + x;
        row.push(<Cell key={coord} />);
      }
      tBoard.push(<tr key={y}>{row}</tr>);
    }
    return (
      <table>
        <tbody>{tBoard}</tbody>
      </table>
    );
  }
}

export default Board;
