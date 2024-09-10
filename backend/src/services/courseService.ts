
import Course from '../models/courseModel';

export const createCourse = (courseData: any) => new Course(courseData).save();
export const getCourses = () => Course.find();
