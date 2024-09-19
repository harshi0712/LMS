{/*import bcrypt from 'bcrypt'; // Library for hashing passwords
import jwt from 'jsonwebtoken'; // Library for generating JWT tokens
import User from '../models/userModel'; // Import the User model

const JWT_SECRET = process.env.JWT_SECRET || 'secret'; // Secret key for signing tokens

// Function to register a new user
export const registerUser = async (username: string, password: string, role: 'admin' | 'instructor' | 'student') => {
    // Hash the password with bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create and return a new user record
    return User.create({ username, password: hashedPassword, role });
};

// Function to authenticate a user and generate a JWT token
export const authenticateUser = async (username: string, password: string) => {
    // Find the user by username
    const user = await User.findOne({ where: { username } });
    // Check if the user exists and if the password matches
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid credentials'); // Throw an error if credentials are invalid
    }
    // Generate a JWT token with user ID and role
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    return { token }; // Return the generated token
};

// Function to get a user by their ID
export const getUserById = async (id: number) => {
    // Find and return the user record by ID
    return User.findByPk(id);
};
*/}