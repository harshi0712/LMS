import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';

configDotenv();
export default  function connectDB() {
    const url : any = process.env.CONNECTION_URL;
    mongoose.connect(`${url}`)
    .then(()=>{
        console.log("Connected to MongoDB");
    }).catch(err=>{
        console.log(err);
    });
}
