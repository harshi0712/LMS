import { Request, Response } from 'express';
import Assessment from '../models/assessmentModel';

export const createAssessment = async (req: Request, res: Response) => {
    const { title, courseId, questions } = req.body;

    try {
        const assessment = new Assessment({ title, course: courseId, questions });
        await assessment.save();
        res.status(201).json(assessment);
    } catch (error) {
        res.status(500).json({ message: 'Error creating assessment' });
    }
};

export const getAssessments = async (req: Request, res: Response) => {
    try {
        const assessments = await Assessment.find().populate('course');
        res.json(assessments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching assessments' });
    }
};
