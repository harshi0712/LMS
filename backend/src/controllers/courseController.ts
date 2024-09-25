import { Request, Response } from 'express';
import Course from '../models/courseModel';
import { Op } from 'sequelize';




// Create a new course

export const createCourse = async (req: Request, res: Response) => {
    const { title, description, courseImage, link } = req.body;

    try {
        // Create a new course using Sequelize
        const course = await Course.create({
            title,
            description,
            courseImage,
            link
        });
        console.log(course);
        res.status(201).json({ course });
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({ message: 'Error creating course' });
    }
};



// Get all courses
export const getCourses = async (req: Request, res: Response) => {
    try {
        // Fetch all courses using Sequelize
        const courses = await Course.findAll();
        res.json(courses);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ message: 'Error fetching courses' });
    }
};

// Get a single course by ID
export const getCourseById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        // Find a course by ID
        const course = await Course.findByPk(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json(course);
    } catch (error) {
        console.error('Error fetching course:', error);
        res.status(500).json({ message: 'Error fetching course' });
    }
};

// Update a course by ID
export const updateCourse = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, courseImage, link } = req.body;

    try {
        // Find the course to update
        const course = await Course.findByPk(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Update the course
        await course.update({
            title,
            description,
            courseImage,
            link
        });

        res.json(course);
    } catch (error) {
        console.error('Error updating course:', error);
        res.status(500).json({ message: 'Error updating course' });
    }
};

// Delete a course by ID
export const deleteCourse = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        // Find the course to delete
        const course = await Course.findByPk(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Delete the course
        await course.destroy();
        res.status(204).send(); // No content
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ message: 'Error deleting course' });
    }
};




export const searchCourseByTitle = async (req: Request, res: Response) => {
    const { title } = req.query; // Assuming title is passed as a query parameter

    console.log(title);
    if (!title || typeof title !== 'string') {
        return res.status(400).json({ message: 'Title query parameter is required and must be a string.' });
    }

    try {
        // Search for courses by title using Sequelize
        const courses = await Course.findAll({
            where: {
                title: {
                    [Op.like]: `%${title}%`, // Use LIKE for case-sensitive search in MySQL
                },
            },
        });
        // console.log(courses);
        
        // Return an empty array if no courses are found
        res.status(200).json(courses.length > 0 ? courses : []);
    } catch (error) {
        console.error('Error searching for courses:', error);
        res.status(500).json({ message: 'Error searching for courses' });
    }
};
