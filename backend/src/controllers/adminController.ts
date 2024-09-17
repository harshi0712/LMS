
import { Request, Response } from 'express';
import User from '../models/userModel';

export const getAdminData = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      where: { role: 'admin' },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch admin data' });
  }
};
