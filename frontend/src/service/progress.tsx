// Function to create or update progress
export const createOrUpdateProgress = async (progressData: {
    userId: number;
    courseId: number;
    completedModules: number;
    totalModules: number;
}) => {
    try {
        const response = await fetch('/api/progress', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(progressData),
        });

        // Check if the response is ok
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to create or update progress');
        }

        // Parse the response JSON
        const progress = await response.json();
        return progress;
    } catch (error) {
        console.error('Error creating or updating progress:', error);
        throw error; // Rethrow the error for further handling if needed
    }
};

// Function to get progress by user ID and course ID
export const fetchProgressByUserIdAndCourseId = async (userId: number, courseId: number) => {
    try {
        const response = await fetch(`/api/progress/${userId}/${courseId}`); // Adjust the URL based on your API route

        // Check if the response is ok
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to fetch progress');
        }

        // Parse the response JSON
        const progress = await response.json();
        return progress;
    } catch (error) {
        console.error('Error fetching progress:', error);
        throw error; // Rethrow the error for further handling if needed
    }
};
