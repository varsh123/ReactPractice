import React from 'react';
import Game1 from './Game1';
import Game2 from './Game2';


class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name} of age {this.props.age}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
          <div id="game1">
            <Game1/>
          </div>
          <div id="game2">
            <Game2/>
          </div>
        </div>
        
      );
    }
  }

  export default ShoppingList;