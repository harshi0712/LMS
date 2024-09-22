import { Request, Response } from 'express';
import User from '../models/userModel';

// Function to get all users with the role of 'student'
export const getStudentData = async (req: Request, res: Response) => {
  try {
    // Fetch all users where the role is 'student'
    const users = await User.findAll({
      where: { role: 'student' },
    });

    // Check if any students were found
    if (users.length === 0) {
      return res.status(404).json({ message: 'No students found.' });
    }

    // Return the list of students
    res.json(users);
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching student data:', error);

    // Return a server error response
    res.status(500).json({ error: 'Failed to fetch student data' });
  }
};
