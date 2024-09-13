
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection/connectDB';


// Define the attributes of the User model
interface UserAttributes {
  id: number;
  username: string;
  password: string;
  role: 'admin' | 'instructor' | 'student';
}

// Define the creation attributes
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }

// Define the User model
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public password!: string;
  public role!: 'admin' | 'instructor' | 'student';
}

// Initialize the User model
User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  role: {
    type: DataTypes.ENUM('admin', 'instructor', 'student'),
    allowNull: false
  }
}, {
  sequelize, // Pass the sequelize instance
  tableName: 'users', // The table name in the database
  timestamps: false // Disable timestamps if you don't need them
});

export default User;
