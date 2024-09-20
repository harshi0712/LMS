
// // Function to fetch instructor data
// export const fetchInstructorData = async () => {
//     try {
//         const response = await fetch(API.getInstructorData);
        
//         if (!response.ok) {
//             const errorResponse = await response.json();
//             throw new Error(errorResponse.error || 'Failed to fetch instructor data');
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching instructor data:', error);
//     }
// };