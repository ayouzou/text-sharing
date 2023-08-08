import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessages';
import ReadMessages from './ReadMessages'; 
import'./App.css'

function App() {
  const [messages, setMessages] = useState([]);
  const [readMessages, setReadMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  const markMessageAsRead = (message) => {
    setReadMessages([...readMessages, message.text]);
  };

  return (
    <div className="App">
      <h1>Chat App</h1>
      <div className="chat-window">
      <ReadMessages readMessages={readMessages} />
        <div className="messages">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message}
              markMessageAsRead={markMessageAsRead}
            />
          ))}
        </div>
        <ChatInput addMessage={addMessage} />
      </div>
       {/* Add the ReadMessages component */}
    </div>
  );
}

export default App;
