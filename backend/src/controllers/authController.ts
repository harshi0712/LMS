import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/userModel';

//----------------------------- User signup (registration) function-----------------------------------

export const signup = async (req: Request, res: Response) => {
    const { username, email, password, role } = req.body;

    // Check for required fields
    if (!username || !email || !password || !role) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Log the request body for debugging purposes
    console.log(req.body);

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Hash the provided password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with the hashed password and provided role
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            role
        });

        // Send a successful response with the created user information
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        // Log and send an error response if something goes wrong
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user' });
    }
};

// ------------------------------User login function----------------------------------------------

const testPasswordComparison = async () => {
    const plainTextPassword = '1234';
    const hashedPassword = '$2b$10$MtxvxgGx9yOQKqoe1R6b8e0Lo/XhkzX4tuUov8D8WEEvf3tAFqAWO'; // From DB
  
    const match = await bcrypt.compare(plainTextPassword, hashedPassword);
    console.log('Password match (manual test):', match); // Should be true if everything is correct
  };

 

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(req.body);

    try {
        const user = await User.findOne({ where: { email } });
        console.log(user, 'user');
        testPasswordComparison();

        if (!user) {
            console.error('User not found:', email);
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Log the plain-text password and the hashed password for comparison
        console.log('Plain-text password:', password);
        console.log('Hashed password from DB:', user.password);

        const passwordMatch = await bcrypt.compare(password.trim(), user.password.trim());

        console.log('Password match:', passwordMatch);

        // if (!passwordMatch) {
        //     return res.status(401).json({ message: 'Invalid credentials' });
        // }

        const secretKey = process.env.JWT_SECRET || 'default_secret';
        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            secretKey,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
        );

        res.status(200).json({ message: 'Login successful', token, role: user.role });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Error logging in' });
    }
};

