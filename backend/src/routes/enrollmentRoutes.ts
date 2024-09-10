import express from 'express';
import { enrollUser, getEnrollments } from '../controllers/enrollmentController';

const router = express.Router();

router.post('/', enrollUser);
router.get('/', getEnrollments);

export default router;
