// Function to get all students from the server
export const fetchStudentData = async (): Promise<any[]> => {
    try {
      const response = await fetch('/api/students'); // Adjust the endpoint as necessary
  
      // Check if the response is OK (status code in the range 200-299)
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('No students found');
        }
        throw new Error('Failed to fetch student data');
      }
  
      // Parse the JSON response
      const students: any[] = await response.json();
      return students; // Return the list of students
    } catch (error) {
      console.error('Error fetching students:', error instanceof Error ? error.message : 'An unknown error occurred');
      throw error; // Rethrow the error for further handling if needed
    }
  };
  