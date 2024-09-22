// Function to fetch all instructors from the API
export const fetchInstructors = async () => {
    try {
      // Make a GET request to the instructor endpoint
      const response = await fetch('/api/instructors'); // Adjust the URL based on your API route
  
      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch instructors');
      }
  
      // Parse the JSON response
      const instructors = await response.json();
      return instructors;
    } catch (error) {
      console.error('Error fetching instructors:', error);
      throw error; // Rethrow the error for further handling if needed
    }
  };
  