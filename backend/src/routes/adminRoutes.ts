
import { Router } from 'express';
import { getAdminData } from '../controllers/adminController';

const router = Router();

router.get('/data', getAdminData);

export default router;
