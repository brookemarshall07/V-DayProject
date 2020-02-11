import React from 'react';


const Messages = ({messages, deleteMessage}) => {

    const messageList = messages.length ? (
        messages.map(message => {
            return (
                <div className="your-item" key={message.id}>
                    <span onClick={() => {deleteMessage(message.id)}}>{message.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center"> No Valentine Grams...yet</p>
    )
    return (
        <div className="your messages">
            {messageList}
        </div>
    )
}

export default Messages;