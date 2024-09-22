

// assessmentRoutes
import { Router } from 'express';
import {
    createAssessment,
    getAssessments,
    getAssessmentById,
    updateAssessment,
    deleteAssessment
} from '../controllers/assessmentController'; // Adjust the path as needed

const router = Router();

// Define routes
router.post('/create',()=>{} ,createAssessment); // Create a new assessment
router.get('/getAll', getAssessments); // Get all assessments
router.get('/:id', getAssessmentById); // Get a single assessment by ID
router.put('/update/:id', updateAssessment); // Update an assessment by ID
router.delete('/:id', deleteAssessment); // Delete an assessment by ID

export default router;
