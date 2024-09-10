
import jwt from 'jsonwebtoken';
import { user } from '../models/userModel';

export const generateToken = (userId: string, role: string) => {
    return jwt.sign({ userId, role }, process.env.JWT_SECRET!, { expiresIn: '1h' });
};
