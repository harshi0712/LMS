import { Request, Response } from 'express';
import Grade from '../models/gradeModel'; 
// Create a new grade
export const createGrade = async (req: Request, res: Response) => {
    const { userId, assessmentId, score } = req.body;

    // Validate input
    if (typeof userId !== 'number' || typeof assessmentId !== 'number' || typeof score !== 'number') {
        return res.status(400).json({ error: 'Invalid input types' });
    }

    try {
        const grade = await Grade.create({ userId, assessmentId, score });
        res.status(201).json(grade);
    } catch (error) {
        // Improved error handling
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

// Get grades by user ID
export const getGradesByUserId = async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);

    // Validate userId
    if (isNaN(userId)) {
        return res.status(400).json({ error: 'Invalid user ID' });
    }

    try {
        const grades = await Grade.findAll({ where: { userId } });
        res.json(grades);
    } catch (error) {
        // Improved error handling
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
