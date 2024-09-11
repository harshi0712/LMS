
import express from 'express';
import { getAllUsers, getUserById,createUser } from '../controllers/userController';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/setUser',createUser)
export default router;
