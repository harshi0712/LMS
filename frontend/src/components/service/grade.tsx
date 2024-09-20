
// // Function to create a new grade
// export const createNewGrade = async (gradeData) => {
//     try {
//         const response = await fetch(API.createGrade, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(gradeData),
//         });

//         if (!response.ok) {
//             const errorResponse = await response.json();
//             throw new Error(errorResponse.error || 'Failed to create grade');
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Error creating grade:', error);
//     }
// };

// // Function to get grades by user ID
// export const fetchGradesByUserId = async (userId) => {
//     try {
//         const response = await fetch(API.getGradesByUserId(userId));
        
//         if (!response.ok) {
//             const errorResponse = await response.json();
//             throw new Error(errorResponse.error || 'Failed to fetch grades');
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching grades:', error);
//     }
// };