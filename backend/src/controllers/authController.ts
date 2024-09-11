

import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/userModel'; 
//import { generateToken } from '../utils/authUtils'; // Adjust if necessary

export const signup = async (req: Request, res: Response) => {
    const { username, password, role } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create a new user
        const newUser = await User.create({
            username,
            password: hashedPassword,
            role
        });
        
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user' });
    }
};

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        // Find the user by username
        const user = await User.findOne({
            where: { username }
        });

        // Check if the user exists and password matches
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        //Generate token (if you have a token generation utility)
         //const token = generateToken(user.id, user.role);
       // res.json({ token });

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Error logging in' });
    }
};
