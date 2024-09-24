import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection/connectDB';
import bcrypt from 'bcryptjs';

// Define the attributes of the User model
interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'instructor' | 'student';
}

// Define the creation attributes (optional fields during creation)
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }

// Define the User model
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public role!: 'admin' | 'instructor' | 'student';

  // Method to compare a plaintext password with the hashed password

}

// Initialize the User model
User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
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
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,  // Password is required
    validate: {
      len: [6, 100],  // Ensure the password has at least 6 characters
    },
  },
  role: {
    type: DataTypes.ENUM('admin', 'instructor', 'student'), // Fixed the typo
    allowNull: false,  // Role is required
  },
}, {
  sequelize,  // Pass the Sequelize instance
  tableName: 'users',  // Specify the table name
  timestamps: false,  // Disable automatic createdAt/updatedAt fields
});

// Before saving the user, hash the password
User.beforeCreate(async (user: User) => {
  if (user.password) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});

// Export the User model
export default User;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// import { DataTypes, Model, Optional } from 'sequelize';
// import sequelize from '../connection/connectDB';
// import bcrypt from 'bcryptjs';

// // Define the attributes of the User model
// interface UserAttributes {
//   id: number;
//   username: string;
//   email: string;
//   password: string;
//   role: 'admin' | 'instructor' | 'student';
// }

// // Define the creation attributes (optional fields during creation)
// interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }

// // Define the User model
// class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
//   public id!: number;
//   public username!: string;
//   public email!: string;
//   public password!: string;
//   public role!: 'admin' | 'instructor' | 'student';

//   // Method to compare a plaintext password with the hashed password
//   public comparePassword(originalPass: string): boolean {
//     return bcrypt.compareSync(originalPass, this.password);
//   }
// }

// // Initialize the User model
// User.init({
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,  // Enforce unique usernames
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,  // Enforce unique emails
//     validate: {
//       isEmail: true,  // Ensure that the value is a valid email
//     },
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,  // Password is required
//     validate: {
//       len: [6, 100],  // Ensure the password has at least 6 characters
//     },
//   },
//   role: {
//     type: DataTypes.ENUM('admin', 'instructor', 'student'), // Fixed the typo
//     allowNull: false,  // Role is required
//   },
// }, {
//   sequelize,  // Pass the Sequelize instance
//   tableName: 'users',  // Specify the table name
//   timestamps: false,  // Disable automatic createdAt/updatedAt fields
// });

// // Before saving the user, hash the password
// User.beforeCreate(async (user: User) => {
//   if (user.password) {
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(user.password, salt);
//   }
// });

// // Export the User model
// export default User;
