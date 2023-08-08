import React from 'react';

function ReadMessages({ readMessages }) {
  return (
    <div className="read-messages">
      
      <ul>
        {readMessages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <h2>Read Messages</h2>
    </div>
  );
}

export default ReadMessages;
