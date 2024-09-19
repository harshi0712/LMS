

import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/index.js';

export const createAssessment = async (data: any) => {
    return await axios.post(`${API_URL}/assessments`, data);
};

export const getAssessments = async () => {
    return await axios.get(`${API_URL}/assessments`);
};

export const createProgress = async (data: any) => {
    return await axios.post(`${API_URL}/progress`, data);
};

export const getProgressByUserId = async (userId: number) => {
    return await axios.get(`${API_URL}/progress/${userId}`);
};

export const createGrade = async (data: any) => {
    return await axios.post(`${API_URL}/grades`, data);
};

export const getGradesByUserId = async (userId: number) => {
    return await axios.get(`${API_URL}/grades/${userId}`);
};
