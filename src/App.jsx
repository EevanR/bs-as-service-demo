import React, { Component } from 'react';
import {getSentence} from './modules/bullShit'

class App extends Component {
  state = {
    randomBS: getSentence()
  }

  getNewBs = () => {
    this.setState({randomBS: getSentence()})
  }
  render() {
    return (
      <div>
        <h1>{this.state.randomBS}</h1>
        <button onClick={this.getNewBs}>Tell me more</button>
      </div>
    );
  }
}

export default App;