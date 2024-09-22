import { Request, Response } from 'express';
import User from '../models/userModel'; // Import the User model

// Function to get all users with the role of 'admin'
export const getAdminData = async (req: Request, res: Response) => {
  try {
    // Fetch all users where the role is 'admin'
    const users = await User.findAll({
      where: { role: 'admin' },
    });

    // Check if any admins were found
    if (users.length === 0) {
      return res.status(404).json({ message: 'No admins found.' });
    }

    // Return the list of admins
    res.json(users);
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching admin data:', error);

    // Return a server error response
    res.status(500).json({ error: 'Failed to fetch admin data' });
  }
};
