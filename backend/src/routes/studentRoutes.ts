
import { Router } from 'express';
import { getStudentData } from '../controllers/studentController';

const router = Router();

router.get('/data', getStudentData);

export default router;
