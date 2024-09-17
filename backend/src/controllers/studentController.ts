
import { Request, Response } from 'express';
import User from '../models/userModel';

export const getStudentData = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      where: { role: 'student' },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch student data' });
  }
};
