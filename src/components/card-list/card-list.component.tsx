import React, {Component} from "react";
import "./card-list.style.css";

import Monster from "../../interfaces";
import Card from "../card/card.component";

class CardList extends Component<any, any> {
  render() {
    return <div className={'card-list'}>
      {
        this.props.monsters.map((monster: Monster) => {
          return <Card key={monster.id} monster={monster}/>
        })
      }
    </div>
  }
}

export default CardList
