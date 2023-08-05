import React from "react";
import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from "./component/searchBox/searchBox.component";
import "./App.css";

type myState = {
  monsters: {
    name: string;
    id: string;
    email: string;
  }[];
  searchField: string;
};

class App extends React.Component<{}, myState> {
  state: myState = {
    monsters: [],
    searchField: "",
  };

  // constructor(props: any) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  // }

  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (event: any) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder={"Search Monsters"}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
