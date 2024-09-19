// routes/chatRoutes.ts
import express from 'express';
import { Server } from 'ws';
import { handleWebSocketConnection } from '../controllers/chatboard'; // Adjust the path as needed

const router = express.Router();

// Set up the WebSocket server
const wss = new Server({ noServer: true });

wss.on('connection', handleWebSocketConnection);

// Export the router
export default router;

// You would typically integrate the WebSocket server with your HTTP server in your main server file
