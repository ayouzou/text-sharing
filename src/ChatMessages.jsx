import React from 'react';

function ChatMessage({ message, markMessageAsRead }) {
  const handleReadClick = () => {
    markMessageAsRead(message);
  };

  return (
    <div className={`message ${message.sender}`} onClick={handleReadClick}>
      <p>
        <span className="author">{message.author}:</span> {message.text}
      </p>
    </div>
  );
}

export default ChatMessage;
