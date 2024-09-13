// register login API  .......
import { Request, Response } from 'express';
import User from '../models/userModel'; //


export const getAllUsers = async (req: Request, res: Response) => {
    try {
        // Fetch all users using Sequelize
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send({ message: 'Error fetching users' });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        // Fetch a user by primary key using Sequelize
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send({ message: 'Error fetching user' });
    }
};

export const createUser = async (req: Request, res: Response) => {
    const { username, password, role } = req.body;
    console.log("req.body", req.body);

    try {
        // Create a new user
        const newUser = await User.create({
            username,
            password,
            role
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user' });
    }
};

