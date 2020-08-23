import React, {Component} from "react";
import "./card.style.css";

class Card extends Component<any, any> {
  render() {
    return <div className={'card-container'}>
      <img alt="monster" src={`https://robohash.org/${this.props.monster.id}?set=set2`}/>
      <h1>{this.props.monster.name}</h1>
      <h2>{this.props.monster.email}</h2>
    </div>
  }
}

export default Card
