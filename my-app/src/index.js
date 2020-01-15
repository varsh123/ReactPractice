
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import ShoppingList from './ShoppingList';




function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    )
}
  
  class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          name : null,
          xIsNext: true   // is x the next player to enter or 'o', isnext =true is x else o
        };
      }

    handleClick(i) { // let i = 0 

        const squares = this.state.squares.slice(); // creating new array from existing array [null, null , null , null......]   .IF WE dont use slice older value will be overidden with null
        
        if ( this.calculateWinner(squares)  || squares[i] ) {
            console.log("Checking for winner conditionn in handle click and then come out , don't take further input");
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O'; // ['X',null , null ......]  --> this is local array
        this.setState( 
                {
                    squares: squares , 
                    name:"Anuraj",
                    xIsNext: !this.state.xIsNext
                }
            ); // left one is state variable , right one is local variable
        // after this my state's array or original array "squares" will become ['X',null , null ......]   setState will also call render() at last
    }

    calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if ( ( squares[a] === squares[a] ) && ( squares[a] === squares[b] ) && ( squares[a] === squares[c] ) ) {
            return squares[a]; // either 'X' or 'O'
          }
        }
        return null;
      }

    renderSquare(i) {
      return <Square  
        value = {
                this.state.squares[i]
                /* parent is passing a variable "value" to child which child can use as "this.props.value" .react uses virtual dom which means it will go n execute a particular part of whole html t*/

            } 
        onClick = {
            () => this.handleClick(i)
            }
      />;
    }
  
    render() {
        
        //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        const winner = this.calculateWinner(this.state.squares);
        let status;
        
        if ( winner !== null ) { // if winner is not null , we have some value for winner - X or O
            status = 'Winner: ' + winner; // either X or O
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
  
      return (
        <div>

          <div className="status">{status}</div>

          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  // <ShoppingList name="Mark" age="27"/>
  ReactDOM.render(
    <Game/>,
    document.getElementById('root')
  );
  