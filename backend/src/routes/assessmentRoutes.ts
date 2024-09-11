

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
router.post('/assessments', createAssessment); // Create a new assessment
router.get('/assessments', getAssessments); // Get all assessments
router.get('/assessments/:id', getAssessmentById); // Get a single assessment by ID
router.put('/assessments/:id', updateAssessment); // Update an assessment by ID
router.delete('/assessments/:id', deleteAssessment); // Delete an assessment by ID

export default router;
