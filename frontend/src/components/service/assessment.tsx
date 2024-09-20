// import axios from 'axios';
// import 

// // Create a new assessment
// const createAssessment = async (assessmentData) => {
//   try {
//     const response = await axios.post('http://localhost:3001/assessments', assessmentData);
//     console.log('Created Assessment:', response.data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// // Get all assessments
// const fetchAssessments = async () => {
//   try {
//     const response = await axios.get('http://localhost:3001/assessments');
//     console.log('Assessments:', response.data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// // Get assessment by ID
// const fetchAssessmentById = async (id) => {
//   try {
//     const response = await axios.get(`http://localhost:3001/assessments/${id}`);
//     console.log('Assessment Details:', response.data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// // Update an assessment
// const updateAssessment = async (id, updatedData) => {
//   try {
//     const response = await axios.put(`http://localhost:3001/assessments/${id}`, updatedData);
//     console.log('Updated Assessment:', response.data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// // Delete an assessment
// const deleteAssessment = async (id) => {
//   try {
//     await axios.delete(`http://localhost:3001/assessments/${id}`);
//     console.log('Assessment deleted');
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };
