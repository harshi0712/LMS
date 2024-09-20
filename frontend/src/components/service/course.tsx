
 // Function to create a new course
// export const createNewCourse = async (courseData) => {
//     try {
//         const response = await fetch(API.createCourse, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(courseData),
//         });
//         return await response.json();
//     } catch (error) {
//         console.error('Error creating course:', error);
//     }
// };

// // Function to get all courses
// export const fetchCourses = async () => {
//     try {
//         const response = await fetch(API.getCourses);
//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching courses:', error);
//     }
// };

// // Function to get a single course by ID
// export const fetchCourseById = async (id) => {
//     try {
//         const response = await fetch(API.getCourseById(id));
//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching course:', error);
//     }
// };

// // Function to update a course
// export const updateExistingCourse = async (id, courseData) => {
//     try {
//         const response = await fetch(API.updateCourse(id), {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(courseData),
//         });
//         return await response.json();
//     } catch (error) {
//         console.error('Error updating course:', error);
//     }
// };

// // Function to delete a course
// export const deleteCourseById = async (id) => {
//     try {
//         const response = await fetch(API.deleteCourse(id), {
//             method: 'DELETE',
//         });
//         if (response.ok) {
//             console.log('Course deleted successfully');
//         } else {
//             console.error('Error deleting course:', await response.json());
//         }
//     } catch (error) {
//         console.error('Error deleting course:', error);
//     }
// };