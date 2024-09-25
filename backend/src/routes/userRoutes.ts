import express from 'express';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/userController';
import { login, signup } from '../controllers/authController';
import { verifyStudent } from '../middleware/verifytoken';

const router = express.Router();

// User routes
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/create', verifyStudent, createUser);
router.put('/:id', updateUser); // Route for updating a user
router.delete('/:id', deleteUser); // Route for deleting a user

// Auth routes
router.post('/login', login);
router.post('/signup', signup);

export default router;
