
import Assessment from '../models/assessmentModel';

export const createAssessment = (assessmentData: any) => new Assessment(assessmentData).save();
export const getAssessments = () => Assessment.find().populate('course');
