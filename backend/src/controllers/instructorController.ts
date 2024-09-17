
import { Request, Response } from 'express';
import User from '../models/userModel';

export const getInstructorData = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      where: { role: 'instructor' },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch instructor data' });
  }
};
