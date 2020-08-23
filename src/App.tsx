import React, {Component} from 'react';
import "typeface-bigelow-rules";
import './App.css';

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import Monster from "./interfaces";

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMontsters = monsters.filter((monster: Monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>

        <SearchBox placeholder={'search monsters'} handleChange={this.handleChange}/>
        <CardList monsters={filteredMontsters}/>
      </div>
    );
  }
}

export default App;
