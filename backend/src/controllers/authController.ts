
import jwt from 'jsonwebtoken'
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/userModel';

         //-------------------------------------------------------- User signup (registration) function---------------------------------------------------------------------------
export const signup = async (req: Request, res: Response) => {
    const { username, password, role } = req.body;

     // Log the request body for debugging purposes
    console.log(req.body);

    try {
         // Hash the provided password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with the hashed password and provided role
        const newUser = await User.create({
            username,
            password: hashedPassword,
            role
        });
        // Send a successful response with the created user information

        res.status(201).send({ message: 'User created successfully', user: newUser });
    } catch (error) {
         // Log and send an error response if something goes wrong
        console.error('Error creating user:', error);
        res.status(500).send({ message: 'Error creating user' });
    }
};



   //----------------------------------------------------------// User login function----------------------------------------------------------------------------------------



export const login = async (req: Request, res: Response) => {
    const { username, password, role } = req.body;

    try {
           // Find the user by their username from the database
        const user = await User.findOne({
            where: { username }
        });

        // Check if the user exists and the provided password matches the hashed password
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send({ message: 'Invalid credentials' });
        }
            // Validate the user's role
        if (user.role !== role)
            return res.status(402).send({ messege: 'invalid role' });
                
         // Select the secret key based on the user's role for JWT token generation
        const secretKey = role === 'student' ? process.env.userSecreatKey :
            role === 'admin' ? process.env.adminSecreatKey :
                role === 'instructor' ? process.env.instructorSecreatKey : '';
                
                // Create a JWT token with the user's username and role as payload
        const payload = { username, role }
        const token = jwt.sign(payload, secretKey as string)

        
        res.status(200).send({ message: 'Login successful', token });

    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send({ message: 'Error logging in' });
    }
};
