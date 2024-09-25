import cors from 'cors';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import sequelize from './connection/connectDB';
import './models/userModel';
import UserRouter from './routes/userRoutes';
import courseRoutes from './routes/courseRoutes';
import adminRoutes from './routes/adminRoutes';
import instructorRoutes from './routes/instructorRoutes';
import studentRoutes from './routes/studentRoutes';
import Assessment from './routes/assessmentRoutes';
import authRoutes from './routes/authRoutes';
import enrollmentRoutes from './routes/enrollmentRoutes';
import progressRoutes from './routes/progressRoutes'; // Updated import name
import searchbar from './controllers/searchbarController'


const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sync database
sequelize.sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
    });

// Define routes
app.use('/user', UserRouter);
app.use('/course', courseRoutes);
app.use('/admin', adminRoutes);
app.use('/instructor', instructorRoutes);
app.use('/student', studentRoutes);
app.use('/assessment', Assessment);
app.use('/auth', authRoutes); // Fixed route to be more concise
app.use('/enrollment', enrollmentRoutes);
app.use('/progress', progressRoutes);
app.use('/search',searchbar);
app.listen(3002, () => {
    console.log('Server is running on port 3002');
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////
//web socket connection  
import WebSocket from 'ws';
import http from 'http';

export function setupWebSocketServer(server: http.Server) {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        console.log('New client connected');

        ws.on('message', (message: WebSocket.RawData) => {
            try {
                const msg = JSON.parse(message.toString()); // Convert to string
                const timestamp = new Date().toLocaleTimeString();
                const response = { ...msg, timestamp };

                // Broadcast to all clients
                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify(response));
                    }
                });
            } catch (error: any) { // Specify 'any' type for error
                console.error('Error processing message:', error);
                ws.send('Error processing your message.');
            }
        });

        ws.on('close', () => {
            console.log('Client disconnected');
        });

        ws.on('error', (error: Error) => { // Specify 'Error' type for error
            console.error('WebSocket error:', error);
        });
    });

    wss.on('error', (error: Error) => { // Specify 'Error' type for error
        console.error('WebSocket server error:', error);
    });

    server.on('error', (error: Error) => { // Specify 'Error' type for error
        console.error('HTTP server error:', error);
    });

    server.on('listening', () => {
        const address = server.address();
        if (address && typeof address === 'object') {
            console.log(`WebSocket server is running on ws://localhost:${address.port}`);
        }
    });
}
