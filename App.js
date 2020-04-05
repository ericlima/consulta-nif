import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    term: "",
    API_KEY: "535accbd0bb3df7f9f65eab220b6d317",
    url: "https://www.nif.pt/?json=1&q={NIF}&key={API_KEY}",
    credito: "0,00"
  };

  constructor(props) {
    super(props);
  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  consultaCreditos = async event => {
    const url = "https://www.nif.pt/?json=1&credits=1&key=key"
      .replace("key",this.state.API_KEY);

    const response = await axios.get(url,{ mode: 'no-cors'});

    this.setState({ credito: response.credits })
  }

  onFormSubmit = async event => {

    const url = this.state.url
      .replace("{NIF}", this.state.term)
      .replace("{API_KEY}",this.state.API_KEY);
    
    event.preventDefault();

    console.log(url);

    //this.props.onFormSubmit(this.state.term);

    const response = await axios.get(url, { mode:'cors'});

    console.log(response)

    this.setState({ nif: response.records });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Consulta NIF Portugues</label> 
            <a onClick={this.consultaCreditos} >Consulta Créditos {this.state.credito}</a>
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
