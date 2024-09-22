




// import { WebSocket } from 'ws'; // Import the WebSocket class from the 'ws' library
// import { addMessage, getMessages } from '../models/chatModel'; // Import functions to add and get messages from the chat model

// // Keep track of connected clients
// const clients: WebSocket[] = []; // Array to store all connected WebSocket clients

// // Function to handle a new WebSocket connection
// export const handleWebSocketConnection = (ws: WebSocket) => {
//     console.log("Connected to WebSocket"); // Log connection

//     // Add the new client to the list of connected clients
//     clients.push(ws);

//     // Send existing messages to the new user
//     getMessages()
//         .then((messages) => {
//             // Send the initial messages back to the newly connected client
//             ws.send(JSON.stringify({ type: 'INITIAL_MESSAGES', messages }));
//         })
//         .catch((err) => {
//             // Handle any error that occurs while fetching messages
//             console.error('Error fetching messages:', err);
//             ws.send(JSON.stringify({ type: 'ERROR', message: 'Could not fetch messages' })); // Notify client of the error
//         });

//     // Handle incoming messages from this client
//     ws.on('message', async (data: string) => {
//         try {
//             const parsedData = JSON.parse(data.toString()); // Parse the incoming message

//             // Check if the message type is 'SEND_MESSAGE'
//             if (parsedData.type === 'SEND_MESSAGE') {
//                 // Add the new message to the chat
//                 const newMessage = await addMessage(parsedData.payload);
                
//                 // Broadcast the new message to all connected clients
//                 clients.forEach((client: WebSocket) => {
//                     if (client.readyState === WebSocket.OPEN) { // Check if the client is still connected
//                         client.send(JSON.stringify({ type: 'NEW_MESSAGE', payload: newMessage })); // Send the new message
//                     }
//                 });
//             }
//         } catch (err) {
//             // Handle any error that occurs during message processing
//             console.error('Error processing message:', err);
//             ws.send(JSON.stringify({ type: 'ERROR', message: 'Invalid message format' })); // Notify the client of the error
//         }
//     });

//     // Handle client disconnection
//     ws.on('close', () => {
//         // Remove the client from the list of connected clients
//         const index = clients.indexOf(ws);
//         if (index !== -1) {
//             clients.splice(index, 1); // Remove the client from the array
//             console.log("Client disconnected. Remaining clients:", clients.length); // Log disconnection
//         }
//     });
// };
