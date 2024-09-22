import { Request, Response } from 'express';
import User from '../models/userModel';

// Function to get all users with the role of 'instructor'
export const getInstructorData = async (req: Request, res: Response) => {
  try {
    // Fetch all users where the role is 'instructor'
    const users = await User.findAll({
      where: { role: 'instructor' },
    });

    // Check if any instructors were found
    if (users.length === 0) {
      return res.status(404).json({ message: 'No instructors found.' });
    }

    // Return the list of instructors
    res.json(users);
  } catch (error) {
    // Log the error for debugging
    console.error('Error fetching instructor data:', error);
    
    // Return a server error response
    res.status(500).json({ error: 'Failed to fetch instructor data' });
  }
};
