import React, { Component } from 'react';
import Messages from './components/messages';


class App extends Component {
  state = {
    message: [
      {id: 1, content: 'i love you'},
      {id: 2, content: 'be mine'}
    ]
  }
  render(){
  return (
    <div className="App">
     <h1 className="center pink-text">
       <Messages message={this.state.message}/>
     </h1>

    </div>
    );
  }
}

export default App;
