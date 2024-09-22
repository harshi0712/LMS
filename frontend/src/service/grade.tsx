// Define the shape of the grade data
interface GradeData {
    userId: number;
    assessmentId: number;
    score: number;
}

// Function to create a new grade
export const createGrade = async (gradeData: GradeData): Promise<any> => {
    try {
        const response = await fetch('/api/grades', { // Update with your actual API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gradeData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Error creating grade');
        }

        return await response.json();
    } catch (error) {
        console.error('Error creating grade:', error);
        throw error; // Rethrow the error if needed
    }
};

// Function to get grades by user ID
export const fetchGradesByUserId = async (userId: number): Promise<any> => {
    try {
        const response = await fetch(`/api/grades/${userId}`); // Update with your actual API endpoint

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Error fetching grades');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching grades:', error);
        throw error; // Rethrow the error if needed
    }
};
