import axios, { AxiosResponse } from 'axios';
import { API } from '../api-endpoint/apiUrl';

interface CourseData {
    title: string;
    description: string;
    courseImage?: string;
    link?: string;
}

// Create a new course
// Modify the API function to accept FormData
export const createNewCourse = async (courseData: CourseData): Promise<AxiosResponse | null> => {
    try {
      const response: AxiosResponse = await axios.post(API.create_course, courseData);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error creating course:', error.response?.data || error.message);
      } else {
        console.error('Unexpected error:', error);
      }
      return null;
    }
  };

// Get all courses
export const fetchCourses = async (): Promise<CourseData[] | null> => {
    try {
        const response: AxiosResponse<CourseData[]> = await axios.get(API.get_course);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching courses:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        return null;
    }
};

// Get a single course by ID
export const fetchCourseById = async (id: string): Promise<CourseData | null> => {
    try {
        const response: AxiosResponse<CourseData> = await axios.get(`${API.view_course}/${id}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching course:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        return null;
    }
};

// Update an existing course
export const updateExistingCourse = async (id:string,courseData: CourseData): Promise<AxiosResponse | null> => {
    try {
        const response: AxiosResponse<CourseData> = await axios.put(`${API.update_course}/${id}`, courseData);
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error updating course:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        return null;
    }
};

// Delete a course by ID
export const deleteCourseById = async (id: number): Promise<boolean> => {
    try {
        await axios.delete(`${API.delete_course}/${id}`);
        return true; // Successfully deleted
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error deleting course:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        return false;
    }
};
