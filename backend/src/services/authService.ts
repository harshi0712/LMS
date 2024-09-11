import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

const JWT_SECRET = process.env.JWT_SECRET || 'secret'; // Use a more secure secret in production

// Register a new user
export const registerUser = async (username: string, password: string, role: 'admin' | 'instructor' | 'student') => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return User.create({ username, password: hashedPassword, role });
};

// Authenticate a user and generate a JWT token
export const authenticateUser = async (username: string, password: string) => {
    const user = await User.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    return { token };
};

// Get user by ID
export const getUserById = async (id: number) => {
    return User.findByPk(id);
};
