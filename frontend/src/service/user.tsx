// Function to get all users from the server
export const fetchAllUsers = async (): Promise<any[]> => {
    try {
        const response = await fetch('/api/users'); // Adjust the endpoint as necessary

        // Check if the response is OK (status code in the range 200-299)
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }

        // Parse the JSON response
        const users: any[] = await response.json();
        return users; // Return the list of users
    } catch (error) {
        console.error('Error fetching users:', error instanceof Error ? error.message : 'An unknown error occurred');
        throw error; // Rethrow the error for further handling if needed
    }
};

// Function to get a user by ID
export const fetchUserById = async (userId: number): Promise<any> => {
    try {
        const response = await fetch(`/api/users/${userId}`); // Adjust the endpoint as necessary

        // Check if the response is OK
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('User not found');
            }
            throw new Error('Failed to fetch user');
        }

        // Parse the JSON response
        const user = await response.json();
        return user; // Return the user data
    } catch (error) {
        console.error('Error fetching user:', error instanceof Error ? error.message : 'An unknown error occurred');
        throw error; // Rethrow the error for further handling if needed
    }
};

// Function to create a new user
export const createUser = async (userData: { username: string; email: string; password: string; role: string }): Promise<any> => {
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        // Check if the response is OK
        if (!response.ok) {
            throw new Error('Failed to create user');
        }

        // Parse the JSON response
        const newUser = await response.json();
        return newUser; // Return the newly created user
    } catch (error) {
        console.error('Error creating user:', error instanceof Error ? error.message : 'An unknown error occurred');
        throw error; // Rethrow the error for further handling if needed
    }
};
