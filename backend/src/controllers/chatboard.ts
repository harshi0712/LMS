// controllers/chatController.ts
import { WebSocket } from 'ws';
import { addMessage, getMessages } from '../models/chatModel';

// Keep track of connected clients
const clients: WebSocket[] = [];

export const handleWebSocketConnection = (ws: WebSocket) => {
    // Add the new client to the list of connected clients
    clients.push(ws);

    // Send existing messages to the new user
    getMessages()
        .then((messages: any) => {
            ws.send(JSON.stringify({ type: 'INITIAL_MESSAGES', messages }));
        })
        .catch((err: unknown) => {
            console.error('Error fetching messages:', err);
            ws.send(JSON.stringify({ type: 'ERROR', message: 'Could not fetch messages' }));
        });

    // Handle incoming messages
    ws.on('message', async (data: string) => {
        const parsedData = JSON.parse(data.toString());

        if (parsedData.type === 'SEND_MESSAGE') {
            try {
                const newMessage = await addMessage(parsedData.payload);
                // Broadcast the new message to all connected clients
                clients.forEach((client: WebSocket) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({ type: 'NEW_MESSAGE', payload: newMessage }));
                    }
                });
            } catch (err: unknown) {
                console.error('Error adding message:', err);
                ws.send(JSON.stringify({ type: 'ERROR', message: 'Could not send message' }));
            }
        }
    });

    // Handle client disconnection
    ws.on('close', () => {
        const index = clients.indexOf(ws);
        if (index !== -1) {
            clients.splice(index, 1); // Remove the client from the list
        }
    });
};
