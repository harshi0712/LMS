


import axios, { AxiosResponse } from 'axios';
import { API } from '../api-endpoint/apiUrl'; 

interface Question {
    questionText: string;
    answers: Array<{ answerText: string; isCorrect: boolean }>;
}

interface Assessment {
    id?: number;
    title: string;
    questions?: Question[];
}

// Create a new assessment
export const createAssessment = async (reqData:any): Promise<AxiosResponse | null> => {
    try {
        const response: AxiosResponse<Assessment> = await axios.post(API.create_assessment, reqData);
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error creating assessment:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        return null;
    }
};

// Get all assessments
export const fetchAssessments = async (id: string): Promise<Assessment[] | null> => {
    try {
        const response: AxiosResponse<Assessment[]> = await axios.get(`${API.get_assessments}/${id}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching assessments:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        return null;
    }
};

// Get all assessments
export const fetchAllAssessments = async (): Promise<Assessment[] | null> => {
    try {
        const response: AxiosResponse<Assessment[]> = await axios.get(`${API.get_assessments}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching assessments:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        return null;
    }
};


// Get a single assessment by ID
export const fetchAssessmentById = async (id: number): Promise<Assessment | null> => {
    try {
        const response: AxiosResponse<Assessment> = await axios.get(`${API.get_assessment_by_id}/${id}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching assessment:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        return null;
    }
};

// Update an existing assessment
export const updateAssessment = async (id: number, title: string, questions: Question[]): Promise<AxiosResponse | null> => {
    try {
        const response: AxiosResponse<Assessment> = await axios.put(`${API.update_assessment}/${id}`, { title, questions });
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error updating assessment:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        return null;
    }
};

// Delete an assessment by ID
export const deleteAssessmentById = async (id: number): Promise<boolean> => {
    try {
        await axios.delete(`${API.delete_assessment}/${id}`);
        return true; // Successfully deleted
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error deleting assessment:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        return false;
    }
};
