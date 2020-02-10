import React from 'react';


const Messages = ({message}) => {

    const messageList = message.length ? (
        message.map(message => {
            return (
                <div className="your-item" key={message.id}>
                    <span>{message.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center"> 'No Valentine Messages...yet'</p>
    )
    return (
        <div className="your messages">
            {messageList}
        </div>
    )
}

export default Messages;