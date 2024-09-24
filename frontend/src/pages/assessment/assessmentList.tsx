// import React, { useEffect, useState } from 'react';
// import { Box, Typography, Button, Card, CardContent, CardActions } from '@mui/material';
// import Swal from 'sweetalert2';
// import { fetchAssessments, deleteAssessmentById } from '../../service/assessment'; // Adjust the import path as necessary

// interface Assessment {
//     id: number;
//     title: string;
// }

// const ViewAssessments: React.FC = () => {
//     const [assessments, setAssessments] = useState<Assessment[]>([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const loadAssessments = async () => {
//             const data = await fetchAssessments();
//             if (data) {
//                 setAssessments(data);
//             }
//             setLoading(false);
//         };

//         loadAssessments();
//     }, []);

//     const handleDelete = async (id: number) => {
//         const confirmed = await Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!',
//         });

//         if (confirmed.isConfirmed) {
//             const success = await deleteAssessmentById(id);
//             if (success) {
//                 Swal.fire('Deleted!', 'Your assessment has been deleted.', 'success');
//                 setAssessments(prev => prev.filter(assessment => assessment.id !== id));
//             } else {
//                 Swal.fire('Error!', 'There was an error deleting the assessment.', 'error');
//             }
//         }
//     };

//     return (
//         <Box sx={{ maxWidth: 800, margin: '0 auto', marginTop: 4, padding: 3 }}>
//             <Typography variant="h5" gutterBottom align="center">
//                 Your Assessments
//             </Typography>

//             {loading ? (
//                 <Typography variant="body1" align="center">Loading assessments...</Typography>
//             ) : assessments.length === 0 ? (
//                 <Typography variant="body1" align="center">No assessments found.</Typography>
//             ) : (
//                 assessments.map(assessment => (
//                     <Card key={assessment.id} variant="outlined" sx={{ marginBottom: 2 }}>
//                         <CardContent>
//                             <Typography variant="h6">{assessment.title}</Typography>
//                         </CardContent>
//                         <CardActions>
//                             <Button size="small" color="primary" onClick={() => console.log(`View details for ${assessment.id}`)}>
//                                 View Details
//                             </Button>
//                             <Button size="small" color="secondary" onClick={() => handleDelete(assessment.id)}>
//                                 Delete
//                             </Button>
//                         </CardActions>
//                     </Card>
//                 ))
//             )}
//         </Box>
//     );
// };

// export default ViewAssessments;

import React, { useState } from 'react';
import { Box, Typography, Button, Radio, RadioGroup, FormControlLabel, Card, CardContent } from '@mui/material';
import Swal from 'sweetalert2';

interface Answer {
    answerText: string;
    isCorrect: boolean;
}

interface Question {
    questionText: string;
    answers: Answer[];
}

interface Assessment {
    id: number;
    title: string;
    questions: Question[];
}

const ViewAssessmentPage: React.FC = () => {
    const [assessments] = useState<Assessment[]>([
        {
            id: 1,
            title: 'Math Assessment',
            questions: [
                {
                    questionText: 'What is 2 + 2?',
                    answers: [
                        { answerText: '3', isCorrect: false },
                        { answerText: '4', isCorrect: true },
                        { answerText: '5', isCorrect: false },
                    ],
                },
                {
                    questionText: 'What is 5 x 3?',
                    answers: [
                        { answerText: '15', isCorrect: true },
                        { answerText: '10', isCorrect: false },
                        { answerText: '20', isCorrect: false },
                    ],
                },
            ],
        },
        {
            id: 2,
            title: 'Science Assessment',
            questions: [
                {
                    questionText: 'What is H2O?',
                    answers: [
                        { answerText: 'Water', isCorrect: true },
                        { answerText: 'Hydrogen', isCorrect: false },
                        { answerText: 'Oxygen', isCorrect: false },
                    ],
                },
                {
                    questionText: 'What planet is known as the Red Planet?',
                    answers: [
                        { answerText: 'Mars', isCorrect: true },
                        { answerText: 'Jupiter', isCorrect: false },
                        { answerText: 'Earth', isCorrect: false },
                    ],
                },
            ],
        },
    ]);

    const [responses, setResponses] = useState<{ [key: number]: string }>({});

    const handleChange = (assessmentId: number, questionIndex: number, answer: string) => {
        setResponses(prev => ({
            ...prev,
            [`${assessmentId}-${questionIndex}`]: answer,
        }));
    };

    const handleSubmit = (assessmentId: number) => {
        const correctAnswers = assessments.find(a => a.id === assessmentId)?.questions.map((q, index) => {
            const selectedAnswer = responses[`${assessmentId}-${index}`];
            const correctAnswer = q.answers.find(a => a.isCorrect);
            return selectedAnswer === correctAnswer?.answerText;
        }) || [];

        const score = correctAnswers.filter(Boolean).length;

        // Use Swal.fire to display the score
        Swal.fire({
            title: 'Your Score',
            text: `You scored ${score} out of ${correctAnswers.length}`,
            icon: 'info',
            confirmButtonText: 'OK',
        });
    };

    return (
        <Box sx={{ maxWidth: 800, margin: '0 auto', marginTop: 4, padding: 3 }}>
            <Typography variant="h5" gutterBottom align="center">
                Assessments
            </Typography>

            {assessments.map(assessment => (
                <Card key={assessment.id} variant="outlined" sx={{ marginBottom: 2 }}>
                    <CardContent>
                        <Typography variant="h6">{assessment.title}</Typography>
                        {assessment.questions.map((question, index) => (
                            <Box key={index} mb={2}>
                                <Typography variant="subtitle1">{question.questionText}</Typography>
                                <RadioGroup
                                    value={responses[`${assessment.id}-${index}`] || ''}
                                    onChange={(e) => handleChange(assessment.id, index, e.target.value)}
                                >
                                    {question.answers.map((answer, aIndex) => (
                                        <FormControlLabel
                                            key={aIndex}
                                            value={answer.answerText}
                                            control={<Radio />}
                                            label={answer.answerText}
                                        />
                                    ))}
                                </RadioGroup>
                            </Box>
                        ))}
                        <Button variant="contained" color="primary" onClick={() => handleSubmit(assessment.id)}>
                            Submit
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default ViewAssessmentPage;
