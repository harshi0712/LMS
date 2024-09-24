import axios from 'axios';
import { API } from '../api-endpoint/apiUrl'; 

// Define types for user data
interface User {
    id?: number;
    username: string;
    email: string;
    password?: string;
    role: string;
}

// Fetch all users
export const fetchAllUsers = async (): Promise<User[]> => {
    try {
        const response = await axios.get<User[]>(API.get_all_users);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

// Fetch a user by ID
export const fetchUserById = async (id: string | number): Promise<User> => {
    try {
        const response = await axios.get<User>(`${API.get_user_by_id}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

// Create a new user
export const createUser = async (userData: User): Promise<User> => {
    try {
        const response = await axios.post<User>(API.create_user, userData);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

// User login
export const userLogin = async (credentials: { email: string; password: string }): Promise<User> => {
    try {
        const response = await axios.post<User>(API.login, credentials);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

// User registration
export const userRegister = async (userData: User): Promise<User> => {
    try {
        const response = await axios.post<User>(API.register, userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};
