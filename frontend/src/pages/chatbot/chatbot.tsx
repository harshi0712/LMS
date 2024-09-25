import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const Chat: React.FC = () => {
    const [name, setName] = useState<string | null>(null);
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<{ user: string; message: string; timestamp: string }[]>([]);
    const socketRef = useRef<ReturnType<typeof io> | null>(null);

    useEffect(() => {
        const username = prompt('Please enter your name:');
        if (username) {
            setName(username);
        }

        socketRef.current = io('http://localhost:3002');

        socketRef.current.on('message', (msg: { user: string; message: string; timestamp: string }) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socketRef.current?.disconnect();
        };
    }, []);

    const sendMessage = () => {
        if (message.trim()) {
            const msg = { user: name || 'Unknown', message, timestamp: new Date().toLocaleTimeString() };
            socketRef.current?.emit('message', msg);
            setMessages((prevMessages) => [...prevMessages, msg]);
            setMessage('');
        }
    };

    return (
        <Box sx={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <Box sx={{ height: '400px', overflowY: 'auto', border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
                {messages.map((msg, index) => (
                    <Paper key={index} sx={{ padding: '8px', marginBottom: '5px', backgroundColor: msg.user === name ? '#e0f7fa' : '#fff' }}>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{msg.user} <span style={{ fontWeight: 'normal', fontSize: '0.8em' }}>{msg.timestamp}</span></Typography>
                        <Typography variant="body1">{msg.message}</Typography>
                    </Paper>
                ))}
            </Box>
            <TextField
                variant="outlined"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        sendMessage();
                        e.preventDefault();
                    }
                }}
                placeholder="Type a message..."
            />
            <Button variant="contained" color="primary" onClick={sendMessage} sx={{ marginTop: '10px' }}>
                Send
            </Button>
        </Box>
    );
};

export default Chat;
