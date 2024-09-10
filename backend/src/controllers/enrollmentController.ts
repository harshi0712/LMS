import { Request, Response } from 'express';
import Enrollment from '../models/enrollmentModel';

export const enrollUser = async (req: Request, res: Response) => {
    const { userId, courseId } = req.body;

    try {
        const enrollment = new Enrollment({ user: userId, course: courseId });
        await enrollment.save();
        res.status(201).json(enrollment);
    } catch (error) {
        res.status(500).json({ message: 'Error enrolling user' });
    }
};

export const getEnrollments = async (req: Request, res: Response) => {
    try {
        const enrollments = await Enrollment.find().populate('user').populate('course');
        res.json(enrollments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching enrollments' });
    }
};
