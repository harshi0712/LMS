// Manage course creation API
import { Request, Response } from 'express';
import Course from '../models/courseModel';

export const createCourse = async (req: Request, res: Response) => {
    const { title, description, modules } = req.body;

    try {
        const course = new Course({ title, description, modules });
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error creating course' });
    }
};

export const getCourses = async (req: Request, res: Response) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching courses' });
    }
};
