//courseModels 
import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    modules: [{ title: String, content: String }]
});

export default mongoose.model('Course', CourseSchema);
