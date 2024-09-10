import express from 'express';
import { createAssessment, getAssessments } from '../controllers/assessmentController';

const router = express.Router();

router.post('/', createAssessment);
router.get('/', getAssessments);

export default router;
