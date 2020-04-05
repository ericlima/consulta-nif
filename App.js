import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    term: "",
    API_KEY: "535accbd0bb3df7f9f65eab220b6d317",
    url: "https://www.nif.pt/?json=1&q={NIF}&key={API_KEY}"
  };

  constructor(props) {
    super(props);
  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    console.log(this.state.term);

    //this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Consulta NIF Portugues</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
