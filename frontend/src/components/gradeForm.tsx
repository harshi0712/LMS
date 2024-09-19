
import { useState } from 'react';
 import { createGrade } from '../components/service/grade';

const GradeForm = () => {
    const [userId, setUserId] = useState(0);
    const [assessmentId, setAssessmentId] = useState(0);
    const [score, setScore] = useState(0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createGrade({ userId, assessmentId, score });
        setUserId(0);
        setAssessmentId(0);
        setScore(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={userId} onChange={(e) => setUserId(Number(e.target.value))} placeholder="User ID" required />
            <input type="number" value={assessmentId} onChange={(e) => setAssessmentId(Number(e.target.value))} placeholder="Assessment ID" required />
            <input type="number" value={score} onChange={(e) => setScore(Number(e.target.value))} placeholder="Score" required />
            <button type="submit">Submit Grade</button>
        </form>
    );
};

export default GradeForm;
