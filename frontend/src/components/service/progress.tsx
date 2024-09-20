
// // Function to create or update progress
// export const createOrUpdateProgress = async (progressData) => {
//     try {
//         const response = await fetch(API.createOrUpdateProgress, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(progressData),
//         });

//         if (!response.ok) {
//             const errorResponse = await response.json();
//             throw new Error(errorResponse.error || 'Failed to create or update progress');
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Error creating/updating progress:', error);
//     }
// };

// // Function to get progress by user ID and course ID
// export const fetchProgressByUserIdAndCourseId = async (userId, courseId) => {
//     try {
//         const response = await fetch(API.getProgressByUserIdAndCourseId(userId, courseId));
        
//         if (!response.ok) {
//             const errorResponse = await response.json();
//             throw new Error(errorResponse.error || 'Failed to fetch progress');
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching progress:', error);
//     }
// };