
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import useAuth from '../../hooks/useAuth';

interface Course {
    id: number;
    title: string;
    description: string;
    courseImage: string;
    link: string;
    createdAt: string;
    updatedAt: string;
}

interface CourseCardProps {
    course: Course;
    onClick: () => void;
    onEdit: () => void; // New prop for edit functionality
    onDelete: () => void; // New prop for delete functionality
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick, onEdit, onDelete }) => {
    const { role } = useAuth();

    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={course.courseImage}
                alt={course.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {course.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    component="a" // Render as anchor
                    href={course.link} // Link to the course
                    target="_blank" 
                    rel="noopener noreferrer" // Security best practice
                >
                    learn here
                </Button>
                {(role === 'admin' || role === 'instructor') && (
                    <>
                        <Button onClick={onEdit}>Edit</Button>
                        <Button onClick={onDelete} color="error">Delete</Button>
                    </>
                )}
            </CardActions>
        </Card>
    );
};

export default CourseCard;

