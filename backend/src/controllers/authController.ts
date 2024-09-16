import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/userModel';
 
//----------------------------- User signup (registration) function-----------------------------------
export const signup = async (req: Request, res: Response) => {
    const { username, email, password, role } = req.body;
 
    // Log the request body for debugging purposes
    console.log(req.body);
 
    try {
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
export const login = async (req: Request, res: Response) => {
    const { username, password, role } = req.body;
 
    try {
        // Find the user by their username from the database
        const user = await User.findOne({
            where: { username }
        });
 
        // Check if the user exists and the provided password matches the hashed password
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
 
        // Validate the user's role
        if (user.role !== role) {
            return res.status(403).json({ message: 'Invalid role' });
        }
 
        // Select the secret key based on the user's role for JWT token generation
        const secretKey = process.env.JWT_SECRET || 'default_secret'; // Ensure to set your JWT secret in environment variables
 
        // Generate a JWT token with a role-specific payload
        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            secretKey,
            { expiresIn: '1h' } // Adjust the expiration time as needed
        );
 
        // Send a successful response with the JWT token
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        // Log and send an error response if something goes wrong
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Error logging in' });
    }
};