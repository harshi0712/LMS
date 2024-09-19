// utils/api.ts
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api';

export const createOrUpdateProgress = async (data: {
    userId: number;
    courseId: number;
    completedModules: number;
    totalModules: number;
}) => {
    return axios.post(`${API_BASE_URL}/progress`, data);
};

export const getProgress = async (userId: number, courseId: number) => {
    return axios.get(`${API_BASE_URL}/progress/${userId}/${courseId}`);
};
