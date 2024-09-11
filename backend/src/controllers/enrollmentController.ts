
import { Request, Response } from 'express';
import Enrollment from '../models/enrollmentModel'; 
import User from '../models/userModel'; 
import Course from '../models/courseModel';

export const enrollUser = async (req: Request, res: Response) => {
    const { userId, courseId } = req.body;

    try {
        // Create a new enrollment using Sequelize
        const enrollment = await Enrollment.create({
            userId,
            courseId
        });
        res.status(201).json(enrollment);
    } catch (error) {
        console.error('Error enrolling user:', error);
        res.status(500).json({ message: 'Error enrolling user' });
    }
};

export const getEnrollments = async (req: Request, res: Response) => {
    try {
        // Fetch all enrollments with associated user and course data
        const enrollments = await Enrollment.findAll({
            include: [
                {
                    model: User,
                    as: 'user' // Ensure the alias matches the one used in model associations
                },
                {
                    model: Course,
                    as: 'course' // Ensure the alias matches the one used in model associations
                }
            ]
        });
        res.json(enrollments);
    } catch (error) {
        console.error('Error fetching enrollments:', error);
        res.status(500).json({ message: 'Error fetching enrollments' });
    }
};
