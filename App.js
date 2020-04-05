import React from "react";

class App extends React.Component {
  state = { term: "" };

  constructor(props) {
    super(props)

  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    console.log(this.state.term)

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
