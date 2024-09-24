import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3002'); // Adjust as needed for your backend URL

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('message', (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    if (message) {
      socket.emit('message', message);
      setMessage('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>WebSocket Chat</h1>
      <div style={{ border: '1px solid #ccc', height: '300px', overflowY: 'scroll', marginBottom: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Type a message" 
        style={{ width: '70%', marginRight: '10px' }} 
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatPage;
