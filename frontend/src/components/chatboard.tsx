// // ChatApp.js
// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';

// const ChatContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     height: 100vh;
//     max-width: 600px;
//     margin: auto;
//     border: 1px solid #ccc;
//     border-radius: 8px;
//     overflow: hidden;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// const MessageList = styled.div`
//     flex: 1;
//     padding: 20px;
//     overflow-y: auto;
//     background-color: #f9f9f9;
// `;

// const Message = styled.div`
//     margin: 10px 0;
//     padding: 10px;
//     border-radius: 5px;
//     background-color: ${props => (props.isUser ? '#dcf8c6' : '#fff')};
//     align-self: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
// `;

// const InputContainer = styled.div`
//     display: flex;
//     padding: 10px;
//     background-color: #fff;
//     border-top: 1px solid #ccc;
// `;

// const Input = styled.input`
//     flex: 1;
//     padding: 10px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
// `;

// const Button = styled.button`
//     padding: 10px 20px;
//     margin-left: 10px;
//     border: none;
//     border-radius: 5px;
//     background-color: #007bff;
//     color: white;
//     cursor: pointer;

//     &:hover {
//         background-color: #0056b3;
//     }
// `;

// const ChatApp = () => {
//     const [ws, setWs] = useState(null);
//     const [messages, setMessages] = useState([]);
//     const [messageInput, setMessageInput] = useState('');

//     useEffect(() => {
//         const socket = new WebSocket('ws://localhost:3000'); // Adjust the URL if needed

//         socket.onopen = () => {
//             console.log('Connected to WebSocket');
//         };

//         socket.onmessage = (event) => {
//             const data = JSON.parse(event.data);
//             if (data.type === 'INITIAL_MESSAGES') {
//                 setMessages(data.messages);
//             } else if (data.type === 'NEW_MESSAGE') {
//                 setMessages(prevMessages => [...prevMessages, data.payload]);
//             } else if (data.type === 'ERROR') {
//                 console.error(data.message);
//             }
//         };

//         setWs(socket);

//         return () => {
//             socket.close();
//         };
//     }, []);

//     const handleSendMessage = () => {
//         if (messageInput.trim() === '') return;

//         const message = { type: 'SEND_MESSAGE', payload: { text: messageInput, sender: 'User' } };
//         ws.send(JSON.stringify(message));
//         setMessageInput('');
//     };

//     return (
//         <ChatContainer>
//             <MessageList>
//                 {messages.map((msg, index) => (
//                     <Message key={index} isUser={msg.sender === 'User'}>
//                         {msg.text}
//                     </Message>
//                 ))}
//             </MessageList>
//             <InputContainer>
//                 <Input
//                     type="text"
//                     value={messageInput}
//                     onChange={(e) => setMessageInput(e.target.value)}
//                     placeholder="Type your message..."
//                 />
//                 <Button onClick={handleSendMessage}>Send</Button>
//             </InputContainer>
//         </ChatContainer>
//     );
// };

// export default ChatApp;
