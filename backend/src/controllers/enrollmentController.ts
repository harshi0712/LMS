import { Request, Response } from 'express';
import Enrollment from '../models/enrollmentModel';
import User from '../models/userModel';
import Course from '../models/courseModel';

// Enroll a user in a course
export const enrollUser = async (req: Request, res: Response) => {
    const { userId, courseId } = req.body;

    try {
        // Check if the user is already enrolled in the course
        const existingEnrollment = await Enrollment.findOne({
            where: { userId, courseId }
        });

        if (existingEnrollment) {
            return res.status(400).json({ message: 'User is already enrolled in this course.' });
        }

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

// Get all enrollments with associated user and course data
export const getEnrollments = async (req: Request, res: Response) => {
    try {
        // Fetch all enrollments with associated user and course data
        const enrollments = await Enrollment.findAll({
            include: [
                {
                    model: User,
                    as: 'user', // Ensure this alias matches the association defined in the models
                    attributes: ['id', 'name', 'email'] // Include specific user fields if needed
                },
                {
                    model: Course,
                    as: 'course', // Ensure this alias matches the association defined in the models
                    attributes: ['id', 'title', 'description'] // Include specific course fields if needed
                }
            ]
        });

        res.json(enrollments);
    } catch (error) {
        console.error('Error fetching enrollments:', error);
        res.status(500).json({ message: 'Error fetching enrollments' });
    }
};
