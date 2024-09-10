import express, { Express } from 'express';
import bodyParser from 'body-parser';
import connectDB from './connection/connectDB';

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(3001, () => {
   connectDB();
   console.log('server is running on port 3001');
});