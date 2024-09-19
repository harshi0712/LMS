import cors from 'cors'
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import sequelize from './connection/connectDB';
import './models/userModel';
import UserRouter from './routes/userRoutes'
import courseRoutes from './routes/courseRoutes'
import adminRoutes from './routes/adminRoutes';
import instructorRoutes from './routes/instructorRoutes';
import studentRoutes from './routes/studentRoutes';
import Assessment  from './routes/assessmentRoutes';
import authRoutes from   './routes/authRoutes';
import enrollment    from './routes/enrollmentRoutes';
import chatRouts from  './routes/chatRoutes';
import progress from './routes/progressRoutes';
import chatRoutes from './routes/chatRoutes'; // Assuming you have this route set up


const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

sequelize.sync()
.then(() => {
   console.log('Database synced');
   
}).catch((error) => {
   console.error('Error syncing database:', error);
});

app.use('/user',UserRouter);
app.use('/course',courseRoutes);
app.use(  '/admin', adminRoutes);
app.use('/instructor', instructorRoutes);
app.use('/student', studentRoutes);
app.use('/assessment', Assessment);
app.use('/authRoute', authRoutes);
app.use('/enrollment',enrollment);
app.use('/chat', chatRouts);
app.use('/progress', progress);
app.use('/chat', chatRoutes);






app.listen(3001, () => {
   console.log('server is running on port 3001');
});