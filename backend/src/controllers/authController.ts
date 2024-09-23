

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

// ------------------------------User login function----------------------------------------------

// export const login = async (req: Request, res: Response) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ where: { email } });

//         if (!user) {
//             return res.status(401).json({ message: 'User not found.' });
//         }

//         // Use the comparePassword method
//         if (user.comparePassword(password)) {
//             // Generate JWT token here
//             // Here you can generate the JWT token if needed
//             const secretKey = process.env.JWT_SECRET || 'default_secret';
//             const token = jwt.sign(
//                 { id: user.id, email: user.email, role: user.role },
//                 secretKey,
//                 { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
//             );
//             res.status(200).json({ message: 'Login successful',token });
//         } else {
//             return res.status(401).json({ message: 'Invalid credentials... password incorrect.' });
//         }
//     } catch (error) {
//         console.error('Error logging in:', error);
//         res.status(500).json({ message: 'Error logging in' });
//     }
// };
/////////////////////////////////////////////////////////////////////////
// export const login = async (req:Request, res:Response) => {
//     const { email, password } = req.body;

//     try {
//         // Find user by email
//         const user = await User.findOne({ where: { email } });
//         console.log('user',user)
//         if (!user) {
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }

//         // Log the plain password and the stored hashed password
//         console.log("Plain password from request:", password);
//         console.log("Hashed password from DB:", user.password);

//         // Compare the plain password with the stored hashed password
//         // const passwordMatch = await bcrypt.compare(password, user.password);

//         // // Log the result of the comparison
//         // console.log("Password match:", passwordMatch);

//         // if (!passwordMatch) {
//         //     return res.status(401).json({ message: 'Invalid credentials' });
//         // }

//         const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET || 'default_secret', { expiresIn: '1h' });

//         res.status(200).json({ message: 'Login successful', token });
//     } catch (error) {
//         console.error('Error logging in:', error);
//         res.status(500).json({ message: 'Error logging in' });
//     }
// };

///////////////////////////////////////////////////

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(req.body);

    try {
        const user = await User.findOne({ where: { email } });
        console.log(user, 'user');

        if (!user) {
            console.error('User not found:', email);
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // const passwordMatch = await bcrypt.compare(password, user.password);
        // console.log('Password match:', passwordMatch); // Log the result of the password comparison

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