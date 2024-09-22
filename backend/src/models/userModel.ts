import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection/connectDB';
import bcrypt from 'bcrypt';

// Define the attributes of the User model
interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'instructor' | 'student';
}

// Define the creation attributes (optional fields during creation)
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// Define the User model
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
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
    unique: true,  // Enforce unique usernames
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  // Enforce unique emails
    validate: {
      isEmail: true,  // Ensure that the value is a valid email
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,  // Password is required
    validate: {
      len: [6, 100],  // Ensure the password has at least 6 characters
    }
  },
  role: { // Corrected this part
    type: DataTypes.ENUM('admin', 'instructor', 'student'), // Fixed the typo
    allowNull: false  // Role is required
  }
}, {
  sequelize,  // Pass the Sequelize instance
  tableName: 'users',  // Specify the table name
  timestamps: true  // Enable automatic createdAt/updatedAt fields
});

// Before saving the user, hash the password
User.beforeSave(async (user: User) => {
  if (user.password) {
    try {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    } catch (error) {
      console.error('Error hashing password:', error);
      throw new Error('Error hashing password');
    }
  }
});

// Export the User model
export default User;
