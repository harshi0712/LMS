// components/Chat.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Select,
  MenuItem,
} from '@mui/material';

const Chat = () => {
  const [messages, setMessages] = useState<{ text: string; time: string; sender: string; recipient: string }[]>([]);
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('User');
  const [currentChatUser, setCurrentChatUser] = useState('');
  const [users, setUsers] = useState<string[]>(['User1', 'User2', 'User3']);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_BASE_URL}/api/messages`); // Update to your backend API endpoint
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async () => {
    if (input.trim() && currentChatUser) {
      const message = {
        text: input,
        time: new Date().toLocaleTimeString(),
        sender: username,
        recipient: currentChatUser,
      };

      try {
        await axios.post(`${process.env.NEXT_BASE_URL}/api/messages`, message); // Update to your backend API endpoint
        setInput('');
        fetchMessages();
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f0f0f0', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
      <Box sx={{ backgroundColor: '#075e54', color: 'white', padding: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Chat</Typography>
        <Select value={currentChatUser} onChange={(e) => setCurrentChatUser(e.target.value)} displayEmpty sx={{ color: 'white', bgcolor: 'transparent' }}>
          <MenuItem value="" disabled>Select User</MenuItem>
          {users.map((user) => (
            <MenuItem key={user} value={user}>{user}</MenuItem>
          ))}
        </Select>
        <TextField value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your name" sx={{ input: { color: 'white' }, bgcolor: 'transparent' }} />
      </Box>
      <Box sx={{ flex: 1, padding: 2, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        {messages.filter(msg => msg.recipient === currentChatUser || msg.sender === currentChatUser).map((msg, index) => (
          <Paper key={index} elevation={2} sx={{ margin: '5px 0', padding: 1, borderRadius: '10px', backgroundColor: msg.sender === username ? '#dcf8c6' : 'white', alignSelf: msg.sender === username ? 'flex-end' : 'flex-start' }}>
            <Typography variant="body2" component="div">
              <strong>{msg.sender}</strong>: {msg.text}
            </Typography>
            <Typography variant="caption" color="gray">{msg.time}</Typography>
          </Paper>
        ))}
      </Box>
      <Box sx={{ display: 'flex', padding: 2 }}>
        <TextField fullWidth value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." sx={{ marginRight: 1 }} />
        <Button variant="contained" color="primary" onClick={sendMessage}>Send</Button>
      </Box>
    </Box>
  );
};

export default Chat;
