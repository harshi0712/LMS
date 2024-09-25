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

interface FetchUsersResponse {
    users: User[];
    totalPages: number;
  }
// Fetch all users
export const fetchAllUsers = async (page: number, limit: number, search: string): Promise<FetchUsersResponse> => {
    try {
        const response = await axios.get<User[]>(`${API.get_all_users}?page=${page}&limit=${limit}&search=${search}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

// Fetch a user by ID
export const fetchUserById = async (id: string | number): Promise<User> => {
    try {
        const response = await axios.get<User>(`${API.get_all_users}/${id}`);
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

// Update an existing user
export const updateUser = async (id: string | number, userData: User): Promise<User> => {
    try {
        const response = await axios.put<User>(`${API.get_all_users}/${id}`, userData);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

// Delete a user
export const deleteUser = async (id: string | number): Promise<void> => {
    try {
        await axios.delete(`${API.get_all_users}/${id}`);
    } catch (error) {
        console.error('Error deleting user:', error);
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
