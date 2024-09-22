
const API_BASE_URL = "http://localhost:3002"

console.log('API_BASE_URL',API_BASE_URL)

export const API = {
    login: `${API_BASE_URL}/user/login`,
    register:`${API_BASE_URL}/user/signup`,
    get_course:`${API_BASE_URL}/course/getAll`,
    create_course:`${API_BASE_URL}/course/create`,
    update_course:`${API_BASE_URL}/course/update`,
    delete_course:`${API_BASE_URL}/course/delete`,
    view_course:`${API_BASE_URL}/course/getbyid`,

}