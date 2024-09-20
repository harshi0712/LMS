
// // Function to fetch all users
// export const fetchAllUsers = async () => {
//     try {
//         const response = await fetch(API.getAllUsers);
        
//         if (!response.ok) {
//             const errorResponse = await response.json();
//             throw new Error(errorResponse.message || 'Failed to fetch users');
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching users:', error);
//     }
// };

// // Function to fetch a user by ID
// export const fetchUserById = async (id) => {
//     try {
//         const response = await fetch(API.getUserById(id));
        
//         if (!response.ok) {
//             const errorResponse = await response.json();
//             throw new Error(errorResponse.message || 'Failed to fetch user');
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching user:', error);
//     }
// };

// // Function to create a new user
// export const createNewUser = async (userData) => {
//     try {
//         const response = await fetch(API.createUser, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(userData),
//         });

//         if (!response.ok) {
//             const errorResponse = await response.json();
//             throw new Error(errorResponse.message || 'Failed to create user');
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Error creating user:', error);
//     }
// };