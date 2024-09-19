import { Request, Response } from 'express';
import Progress from '../models/progressModel';

// Create or update progress
export const createOrUpdateProgress = async (req: Request, res: Response) => {
    const { userId, courseId, completedModules, totalModules } = req.body;

    try {
        const [progress, created] = await Progress.upsert({
            userId,
            courseId,
            completedModules,
            totalModules,
        });

        res.status(created ? 201 : 200).json(progress);
    } catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
};

// Get progress by user ID and course ID
export const getProgressByUserIdAndCourseId = async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);
    const courseId = Number(req.params.courseId);

    try {
        const progress = await Progress.findOne({ where: { userId, courseId } });
        if (!progress) {
            return res.status(404).json({ error: 'Progress not found' });
        }
        res.json(progress);
    } catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
};
