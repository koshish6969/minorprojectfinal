import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const pusher = new Pusher("7301c04b6d68b65ccc23", {
      cluster: "ap2",
      encrypted: true
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data) => {
      setMessages([...messages, data]);
    });

    return () => {
      channel.unsubscribe();
    };
  }, [messages]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });
    setMessage('');
  };

  return (
    <div>
      <h1>Chat with a seller</h1>
      <div id="chat">
        {messages.map((data) => (
          <div key={data.timestamp}>
            <p>{data.message}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Enter your message here"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBox;
