
// courseRoutes..

import { Router } from 'express';
import {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse
} from '../controllers/courseController';

const router = Router();

router.post('/create', createCourse);
router.get('/getAll', getCourses);
router.get('/getbyid/:id', getCourseById);
router.put('/update/:id', updateCourse);
router.delete('/delete/:id', deleteCourse);

export default router;
