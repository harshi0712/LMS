
// const API_BASE_URL = "http://localhost:3002"

// console.log('API_BASE_URL',API_BASE_URL)

// export const API = {
//     login: `${API_BASE_URL}/user/login`,
//     register:`${API_BASE_URL}/user/signup`,
//     get_course:`${API_BASE_URL}/course/getAll`,
//     create_course:`${API_BASE_URL}/course/create`,
//     update_course:`${API_BASE_URL}/course/update`,
//     delete_course:`${API_BASE_URL}/course/delete`,
//     view_course:`${API_BASE_URL}/course/getbyid`,

// }




const API_BASE_URL = "http://localhost:3002";

console.log('API_BASE_URL', API_BASE_URL);

export const API = {


     // User API endpoints
     get_all_users: `${API_BASE_URL}/user`, // Get all users
     get_user_by_id: `${API_BASE_URL}/user/getbyid`, // Get user by ID (use with /:id)
     create_user: `${API_BASE_URL}/user/create`, // Create a new user
     login: `${API_BASE_URL}/user/login`, // User login
     register: `${API_BASE_URL}/user/signup`, // User signup
 
   
    //course API endpoints
    get_course: `${API_BASE_URL}/course/getAll`,
    create_course: `${API_BASE_URL}/course/create`,
    update_course: `${API_BASE_URL}/course/update`,
    delete_course: `${API_BASE_URL}/course/delete`,
    view_course: `${API_BASE_URL}/course/getbyid`,

 // Assessment API endpoints
 create_assessment: `${API_BASE_URL}/assessment/create`, // Create a new assessment
 get_assessments: `${API_BASE_URL}/assessment/getAll`, // Get all assessments
 get_assessment_by_id: `${API_BASE_URL}/assessment/getbyid`, // Get a single assessment by ID
 update_assessment: `${API_BASE_URL}/assessment/update`, // Update an assessment by ID
 delete_assessment: `${API_BASE_URL}/assessment/delete`, // Delete an assessment by ID

};