
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD!, {
  host: process.env.DB_HOST,
  dialect: 'mysql', 
  logging: false // Disable logging if you don't want to see SQL queries in the console
});
sequelize.authenticate().
then(()=>console.log("connected")
).catch((error)=>console.log(error)
)
export default sequelize;
