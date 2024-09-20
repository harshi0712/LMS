
// // Function to enroll a user in a course
// export const enrollUserInCourse = async (enrollmentData) => {
//     try {
//         const response = await fetch(API.enrollUser, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(enrollmentData),
//         });
//         return await response.json();
//     } catch (error) {
//         console.error('Error enrolling user:', error);
//     }
// };

// // Function to get all enrollments
// export const fetchEnrollments = async () => {
//     try {
//         const response = await fetch(API.getEnrollments);
//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching enrollments:', error);
//     }
// };