
import { Router } from 'express';
import { getInstructorData } from '../controllers/instructorController';

const router = Router();

router.get('/data', getInstructorData);

export default router;
