import express from 'express';
import { createOrUpdateProgress, getProgressByUserIdAndCourseId } from '../controllers/progressController';

const router = express.Router();

// Route to create or update progress
router.post('/progress', createOrUpdateProgress);

// Route to get progress by user ID and course ID
router.get('/progress/:userId/:courseId', getProgressByUserIdAndCourseId);

export default router;
