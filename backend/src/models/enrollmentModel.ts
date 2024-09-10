import mongoose from 'mongoose';

const EnrollmentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }
});

export default mongoose.model('Enrollment', EnrollmentSchema);
