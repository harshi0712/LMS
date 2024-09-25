// import jwt from 'jsonwebtoken';
// import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import User from '../models/userModel';

//----------------------------- User signup (registration) function-----------------------------------
export const signup = async (req: Request, res: Response) => {
    const { username, email, password, role } = req.body;

    // Check for required fields
    if (!username || !email || !password || !role) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    console.log("SignUp data", req.body);

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Create a new user directly (password will be hashed in the model)
        const newUser = await User.create({
            username,
            email,
            password, // Store the password directly; it will be hashed automatically
            role
        });

        console.log('newUser', newUser);

        // Send a successful response with the created user information
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user' });
    }
};


// ------------------------------ User login function ----------------------------------------------
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Check for required fields
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    console.log("Login attempt for email:", email);

    try {
        // Find the user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch,"isMatch")
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'your_jwt_secret_key', { expiresIn: '1h' });

        // Send a successful response with the token and user information
        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Error logging in' });
    }
};