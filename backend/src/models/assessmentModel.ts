import mongoose from 'mongoose';

const AssessmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    questions: [{ question: String, options: [String], answer: String }]
});

export default mongoose.model('Assessment', AssessmentSchema);
