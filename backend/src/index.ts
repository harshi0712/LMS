// import cors from 'cors';
// import express, { Express } from 'express';
// import bodyParser from 'body-parser';
// import sequelize from './connection/connectDB';
// import './models/userModel';
// import UserRouter from './routes/userRoutes';
// import courseRoutes from './routes/courseRoutes';
// import adminRoutes from './routes/adminRoutes';
// import instructorRoutes from './routes/instructorRoutes';
// import studentRoutes from './routes/studentRoutes';
// import Assessment from './routes/assessmentRoutes';
// import authRoutes from './routes/authRoutes';
// import enrollmentRoutes from './routes/enrollmentRoutes';
// import progressRoutes from './routes/progressRoutes'; // Updated import name

// const app: Express = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Sync database
// sequelize.sync()
//     .then(() => {
//         console.log('Database synced');
//     })
//     .catch((error) => {
//         console.error('Error syncing database:', error);
//     });

// // Define routes
// app.use('/user', UserRouter);
// app.use('/course', courseRoutes);
// app.use('/admin', adminRoutes);
// app.use('/instructor', instructorRoutes);
// app.use('/student', studentRoutes);
// app.use('/assessment', Assessment);
// app.use('/auth', authRoutes); // Fixed route to be more concise
// app.use('/enrollment', enrollmentRoutes);
// app.use('/progress', progressRoutes);

// app.listen(3002, () => {
//     console.log('Server is running on port 3002');
// });



////////////////////////////////////////////////////////////////////////////////////////////////////////////


import cors from 'cors';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import { Server } from 'socket.io'; 
import dotenv from 'dotenv';
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
import progressRoutes from './routes/progressRoutes';

dotenv.config();

const app: Express = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // Update to your frontend's URL
        methods: ["GET", "POST"],
        credentials: true // Allow credentials
    }
});

// Middleware
app.use(cors({
    origin: "http://localhost:3000", // Update to your frontend's URL
    methods: ["GET", "POST"],
    credentials: true // Allow credentials
}));
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
app.use('/auth', authRoutes);
app.use('/enrollment', enrollmentRoutes);
app.use('/progress', progressRoutes);

// Start server
const PORT = process.env.PORT || 3002;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3002`);
});
