import { Request, Response } from 'express';
import User from '../models/userModel'; // Import the User model
import { Op } from 'sequelize';

// Get all users
// export const getAllUsers = async (req: Request, res: Response) => {
//     try {
//         const users = await User.findAll();
//         res.send(users);
//     } catch (error) {
//         console.error('Error fetching users:', error);
//         res.status(500).send({ message: 'Error fetching users' });
//     }
// };

// Get all users with pagination and search functionality
export const getAllUsers = async (req: Request, res: Response) => {
    // Destructure page, limit, and search from the query with default values
    const page: number = parseInt(req.query.page as string) || 1;
    const limit: number = parseInt(req.query.limit as string) || 10;
    const search: string = req.query.search ? req.query.search as string : '';

    const offset: number = (page - 1) * limit;

    try {
        const { count, rows } = await User.findAndCountAll({
            where: {
                [Op.or]: [
                    { username: { [Op.like]: `%${search}%` } },
                    { email: { [Op.like]: `%${search}%` } },
                ],
            },
            limit,
            offset,
        });

        res.send({
            users: rows,
            totalPages: Math.ceil(count / limit),
            totalUsers: count,
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send({ message: 'Error fetching users' });
    }
};



// Get a user by ID
export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send({ message: 'Error fetching user' });
    }
};

// Create a new user
export const createUser = async (req: Request, res: Response) => {
    const { username, email, password, role } = req.body;
    console.log("req.body", req.body);

    try {
        const newUser = await User.create({
            username,
            email,
            password,
            role
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user' });
    }
};

// Update an existing user
export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { username, email, password, role } = req.body;

    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Update user properties
        user.username = username || user.username;
        user.email = email || user.email;
        user.password = password || user.password;
        user.role = role || user.role;

        await user.save();

        res.json(user);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Error updating user' });
    }
};

// Delete a user
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        await user.destroy();

        res.status(204).send(); // No content
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Error deleting user' });
    }
};
