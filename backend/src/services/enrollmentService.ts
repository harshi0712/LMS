
import Enrollment from '../models/enrollmentModel';

export const enrollUser = (enrollmentData: any) => new Enrollment(enrollmentData).save();
export const getEnrollments = () => Enrollment.find().populate('user').populate('course');
