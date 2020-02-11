import React, { Component } from 'react';
import Messages from './messages';
import AddMessage from './components/addMessage'

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

  addMessage = (message) => {
    message.id = Math.random();
    let messages = [...this.state.messages, message];
    this.setState({
      //alternative way since 
      //key and value are the same
      messages
    })
  }
  render(){
  return (
    <div className="message-app container">
     <h1 className="center pink-text">Your Valentine's Grams</h1>
       <Messages messages={this.state.messages} deleteMessage={this.deleteMessage}/>
       <AddMessage addMessage={this.addMessage}/>
    </div>
    );
  }
}

export default App;
