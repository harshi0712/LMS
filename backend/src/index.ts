import cors from 'cors'
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import sequelize from './connection/connectDB';
import './models/userModel';
import UserRouter from './routes/userRoutes'
import courseRoutes from './routes/courseRoutes'
const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

sequelize.sync().then(() => {
   console.log('Database synced');
   
}).catch((error) => {
   console.error('Error syncing database:', error);
});

app.use('/user',UserRouter)
app.use('/course',courseRoutes)

app.listen(3001, () => {
   console.log('server is running on port 3001');
});