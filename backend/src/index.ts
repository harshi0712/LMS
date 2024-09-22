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
import chatRoutes from './routes/chatRoutes'; // Corrected import name
import progressRoutes from './routes/progressRoutes'; // Updated import name

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
app.use('/chat', chatRoutes); // Ensure only one chat route is defined
app.use('/progress', progressRoutes);

app.listen(3002, () => {
    console.log('Server is running on port 3002');
});


// import cors from 'cors';
// import express, { Express } from 'express';
// import bodyParser from 'body-parser';
// import http from 'http';
// import { Server } from 'ws';
// import sequelize from './connection/connectDB';
// import UserRouter from './routes/userRoutes';
// import courseRoutes from './routes/courseRoutes';
// import adminRoutes from './routes/adminRoutes';
// import instructorRoutes from './routes/instructorRoutes';
// import studentRoutes from './routes/studentRoutes';
// import Assessment from './routes/assessmentRoutes';
// import authRoutes from './routes/authRoutes';
// import enrollment from './routes/enrollmentRoutes';
// import chatRoutes from './routes/chatRoutes';
// import progress from './routes/progressRoutes';
// import { handleWebSocketConnection } from './controllers/chatboard';

// const app: Express = express();
// const server = http.createServer(app);
// const wss = new Server({ server });

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// sequelize.sync()
//     .then(() => {
//         console.log('Database synced');
//     })
//     .catch((error) => {
//         console.error('Error syncing database:', error);
//     });

// app.use('/user', UserRouter);
// app.use('/course', courseRoutes);
// app.use('/admin', adminRoutes);
// app.use('/instructor', instructorRoutes);
// app.use('/student', studentRoutes);
// app.use('/assessment', Assessment);
// app.use('/authRoute', authRoutes);
// app.use('/enrollment', enrollment);
// app.use('/progress', progress);
// app.use('/chat', chatRoutes);

// wss.on('connection', handleWebSocketConnection);

// server.listen(3001, () => {
//     console.log('Server is running on port 3001');
// });
