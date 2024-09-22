// Define the API endpoint URLs
const API = {
    enrollUser: '/api/enrollments',   // Assuming your Express backend routes are set up like this
    getEnrollments: '/api/enrollments',
};

// Define types for the enrollment data and response
interface EnrollmentData {
    userId: number;
    courseId: number;
}

interface Enrollment {
    id: number;
    userId: number;
    courseId: number;
    createdAt: string;
    updatedAt: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
    course: {
        id: number;
        title: string;
        description: string;
    };
}

// Function to enroll a user in a course
export const enrollUserInCourse = async (enrollmentData: EnrollmentData): Promise<Enrollment | null> => {
    try {
        const response = await fetch(API.enrollUser, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(enrollmentData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error enrolling user: ${errorData.message}`);
        }

        const data: Enrollment = await response.json();
        return data;
    } catch (error) {
        console.error('Error enrolling user:', error);
        return null;
    }
};

// Function to get all enrollments with associated user and course data
export const fetchEnrollments = async (): Promise<Enrollment[] | null> => {
    try {
        const response = await fetch(API.getEnrollments);

        if (!response.ok) {
            throw new Error(`Error fetching enrollments: ${response.statusText}`);
        }

        const data: Enrollment[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching enrollments:', error);
        return null;
    }
};
