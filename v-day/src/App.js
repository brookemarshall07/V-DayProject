import React, { Component } from 'react';
import Messages from './components/messages';


class App extends Component {
  state = {
    messages: [
      {id: 1, content: 'i love you'},
      {id: 2, content: 'be mine'}
    ]
  }

  deleteMessage = (id) => {
    const messages = this.state.messages.filter(message => {
      return message.id !== id
    });
    this.setState ({
      //key:    value:
      messages: messages
    })
  }
  render(){
  return (
    <div className="message-app container">
     <h1 className="center pink-text">Your Valentine's Grams</h1>
       <Messages messages={this.state.messages} deleteMessage={this.deleteMessage}/>
    </div>
    );
  }
}

export default App;
