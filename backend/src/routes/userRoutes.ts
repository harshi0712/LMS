
import express from 'express';
import { getAllUsers, getUserById, createUser } from '../controllers/userController';
import { login, signup } from '../controllers/authController';
import { verifyStudent } from '../middleware/verifytoken';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/create', verifyStudent, createUser)
router.post('/login', login);
router.post('/signup', signup);

export default router;
