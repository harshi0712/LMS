// Define an interface for the admin user data
interface Admin {
    id: number;
    username: string;
    email: string;
    role: string;
    // Add any other relevant fields
  }
  
  // Function to fetch all users with the role of 'admin'
  export const fetchAdminData = async (): Promise<Admin[]> => {
    try {
      const response = await fetch('/api/admins'); // Adjust the endpoint as necessary
  
      // Check if the response is OK (status code in the range 200-299)
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('No admins found');
        }
        throw new Error('Failed to fetch admin data');
      }
  
      // Parse the JSON response
      const admins: Admin[] = await response.json();
      return admins; // Return the list of admins
    } catch (error) {
      console.error('Error fetching admins:', (error as Error).message);
      throw error; // Rethrow the error for further handling if needed
    }
  };
  