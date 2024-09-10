import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Course } from '../types/courseTypes';
import { getCourses } from '../services/courseService';

const CoursesPage: NextPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const courseData = await getCourses();
      setCourses(courseData);
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Available Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesPage;
