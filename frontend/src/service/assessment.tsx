import axios, { AxiosResponse } from 'axios';

interface AssessmentData {
  title: string;
  courseId: number;
  questions: string[]; // Assuming questions is an array of strings
}

interface UpdatedAssessmentData {
  title?: string;
  courseId?: number;
  questions?: string[];
}

// Create a new assessment
export const createAssessment = async (assessmentData: AssessmentData): Promise<void> => {
  try {
    const response: AxiosResponse = await axios.post('http://localhost:3001/assessments', assessmentData);
    console.log('Created Assessment:', response.data);
  } catch (error) {
    console.error('Error creating assessment:', error);
  }
};

// Get all assessments
export const fetchAssessments = async (): Promise<void> => {
  try {
    const response: AxiosResponse = await axios.get('http://localhost:3001/assessments');
    console.log('Assessments:', response.data);
  } catch (error) {
    console.error('Error fetching assessments:', error);
  }
};

// Get a single assessment by ID
export const fetchAssessmentById = async (id: number): Promise<void> => {
  try {
    const response: AxiosResponse = await axios.get(`http://localhost:3001/assessments/${id}`);
    console.log('Assessment Details:', response.data);
  } catch (error) {
    console.error('Error fetching assessment by ID:', error);
  }
};

// Update an assessment
export const updateAssessment = async (id: number, updatedData: UpdatedAssessmentData): Promise<void> => {
  try {
    const response: AxiosResponse = await axios.put(`http://localhost:3001/assessments/${id}`, updatedData);
    console.log('Updated Assessment:', response.data);
  } catch (error) {
    console.error('Error updating assessment:', error);
  }
};

// Delete an assessment
export const deleteAssessment = async (id: number): Promise<void> => {
  try {
    await axios.delete(`http://localhost:3001/assessments/${id}`);
    console.log('Assessment deleted');
  } catch (error) {
    console.error('Error deleting assessment:', error);
  }
};
