// assessmentApi.ts

const BASE_URL = process.env.NEXT_BASE_URL || 'http://localhost:3002/assessments'; // Replace with your API URL

// Interfaces for assessment, question, and answer
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
export async function createAssessment(title: string, questions: Question[]): Promise<Assessment> {
    const response = await fetch(`${BASE_URL}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, questions }),
    });

    if (response.ok) {
        const data: Assessment = await response.json();
        console.log('Assessment created:', data);
        return data;
    } else {
        console.error('Error creating assessment:', response.statusText);
        throw new Error('Failed to create assessment');
    }
}

// Get all assessments
export async function getAllAssessments(): Promise<Assessment[]> {
    const response = await fetch(`${BASE_URL}/getAll`);

    if (response.ok) {
        const data: Assessment[] = await response.json();
        console.log('All assessments:', data);
        return data;
    } else {
        console.error('Error fetching assessments:', response.statusText);
        throw new Error('Failed to fetch assessments');
    }
}

// Get a single assessment by ID
export async function getAssessmentById(id: number): Promise<Assessment> {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (response.ok) {
        const data: Assessment = await response.json();
        console.log('Assessment details:', data);
        return data;
    } else {
        console.error('Error fetching assessment:', response.statusText);
        throw new Error('Failed to fetch assessment');
    }
}

// Update an assessment
export async function updateAssessment(id: number, title: string, questions: Question[]): Promise<Assessment> {
    const response = await fetch(`${BASE_URL}/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, questions }),
    });

    if (response.ok) {
        const data: Assessment = await response.json();
        console.log('Assessment updated:', data);
        return data;
    } else {
        console.error('Error updating assessment:', response.statusText);
        throw new Error('Failed to update assessment');
    }
}

// Delete an assessment
export async function deleteAssessment(id: number): Promise<boolean> {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        console.log('Assessment deleted successfully.');
        return true;
    } else {
        console.error('Error deleting assessment:', response.statusText);
        throw new Error('Failed to delete assessment');
    }
}
