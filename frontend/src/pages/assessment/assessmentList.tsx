


// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Button, Radio, RadioGroup, FormControlLabel, Card, CardContent } from '@mui/material';
// import Swal from 'sweetalert2';
// import { fetchAssessments } from '../../service/assessment';
// import { useSearchParams, useRouter } from 'next/navigation';

// interface Answer {
//     answerText: string;
//     isCorrect: boolean;
// }

// interface Question {
//     questionText: string;
//     Answers: Answer[];
// }

// interface Assessment {
//     id: number;
//     title: string;
//     Questions: Question[];
// }

// const ViewAssessmentPage: React.FC = () => {
//     const [assessments, setAssessments] = useState<any>([]);

//     const [loading, setLoading] = useState(true);
//     const [score, setScore] = useState<number>(0); // New state for score

//     const [grade, setGrade] = useState("")
// console.log(grade)



//     const [submittedAssessmentId, setSubmittedAssessmentId] = useState<number | null>(null); // Track submitted assessment
//     const searchParams = useSearchParams();
//     const id = searchParams.get('id');
//     const router = useRouter();

//     useEffect(() => {
//         const loadAssessments = async () => {
//             if (id) {
//                 const data = await fetchAssessments(id) as Assessment[];
//                 if (Array.isArray(data)) {
//                     setAssessments(data);
//                 }
//             }
//             setLoading(false);
//         };
//         loadAssessments();
//     }, [id]);

//     const [responses, setResponses] = useState<{ [key: string]: string }>({});

//     const handleChange = (assessmentId: number, questionIndex: number, answer: string) => {
//         setResponses(prev => ({
//             ...prev,
//             [`${assessmentId}-${questionIndex}`]: answer,
//         }));
//     };

//     const handleSubmit = (assessmentId: number) => {
//         const correctAnswers = assessments.find(a => a.id === assessmentId)?.Questions.map((q, index) => {
//             const selectedAnswer = responses[`${assessmentId}-${index}`];
//             const correctAnswer = q.Answers.find(a => a.isCorrect);
//             return selectedAnswer === correctAnswer?.answerText;
//         }) || [];

//         const score = correctAnswers.filter(Boolean).length;
//         setScore(score); // Store the score
//         setSubmittedAssessmentId(assessmentId); // Store submitted assessment id

//         assessments.length && assessments.forEach((el: any) => {
//             const totalQuestions = el?.Questions?.length || 0;
//             const correctAnswers = score; // Assuming score is the number of correct answers

//             let grade = "D"; // Default grade

//             if (correctAnswers === totalQuestions) {
//                 grade = "A";
//             } else if (correctAnswers >= totalQuestions / 2) {
//                 grade = "B";
//             } else if (correctAnswers > 0) {
//                 grade = "C";
//             }

//             setGrade(grade); // Update the grade state
//         });

//         Swal.fire({
//             title: 'Your Score',
//             text: `You scored ${score} out of ${correctAnswers.length}`,
//             icon: 'info',
//             confirmButtonText: 'OK',
//         });
//     };

//     const handleViewGrades = () => {
//         router.push('/assessment/grade-assessment'); // Navigate to the grades page
//     };

//     if (loading) {
//         return <Typography>Loading...</Typography>;
//     }

//     return (
//         <Box sx={{ maxWidth: 800, margin: '0 auto', marginTop: 4, padding: 3 }}>
//             <Typography variant="h5" gutterBottom align="center">
//                 Assessments
//             </Typography>

//             {assessments.map(assessment => (
//                 <Card key={assessment.id} variant="outlined" sx={{ marginBottom: 2 }}>
//                     <CardContent>
//                         <Typography variant="h6">{assessment.title}</Typography>
//                         {assessment.Questions.map((question, index) => (
//                             <Box key={index} mb={2}>
//                                 <Typography variant="subtitle1">{question.questionText}</Typography>
//                                 <RadioGroup
//                                     value={responses[`${assessment.id}-${index}`] || ''}
//                                     onChange={(e) => handleChange(assessment.id, index, e.target.value)}
//                                 >
//                                     {question.Answers.map((answer, aIndex) => (
//                                         <FormControlLabel
//                                             key={aIndex}
//                                             value={answer.answerText}
//                                             control={<Radio />}
//                                             label={answer.answerText}
//                                         />
//                                     ))}
//                                 </RadioGroup>
//                             </Box>
//                         ))}
//                         <Button variant="contained" color="primary" onClick={() => handleSubmit(assessment.id)}>
//                             Submit
//                         </Button>
//                     </CardContent>
//                 </Card>
//             ))}

//             {submittedAssessmentId !== null && (
//                 <Button variant="outlined" onClick={handleViewGrades} sx={{ marginTop: 2 }}>
//                     View Your Grades
//                 </Button>
//             )}
//         </Box>
//     );
// };

// export default ViewAssessmentPage;


import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Radio, RadioGroup, FormControlLabel, Card, CardContent } from '@mui/material';
import Swal from 'sweetalert2';
import { fetchAssessments } from '../../service/assessment';
import { useSearchParams, useRouter } from 'next/navigation';

// Define types for Answer, Question, and Assessment
interface Answer {
    answerText: string; // Text of the answer
    isCorrect: boolean; // Flag indicating if the answer is correct
}

interface Question {
    questionText: string; // Text of the question
    Answers: Answer[]; // Array of possible answers
}

interface Assessment {
    id: number; // Unique identifier for the assessment
    title: string; // Title of the assessment
    Questions: Question[]; // Array of questions in the assessment
}

const ViewAssessmentPage: React.FC = () => {
    // State to hold assessments, loading status, score, grade, and submitted assessment ID
    const [assessments, setAssessments] = useState<Assessment[]>([]);
    const [loading, setLoading] = useState(true);
    const [score, setScore] = useState<number>(0);
    const [grade, setGrade] = useState<string>("");
    const [submittedAssessmentId, setSubmittedAssessmentId] = useState<number | null>(null);
    
    // Get the assessment ID from the URL
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const router = useRouter();

    // Load assessments from the API when the component mounts or the ID changes
    useEffect(() => {
        const loadAssessments = async () => {
            if (id) {
                const data = await fetchAssessments(id) as Assessment[];
                if (Array.isArray(data)) {
                    setAssessments(data); // Set assessments if data is valid
                }
            }
            setLoading(false); // Set loading to false once data is loaded
        };
        loadAssessments();
    }, [id]);

    // State to track user's responses to questions
    const [responses, setResponses] = useState<{ [key: string]: string }>({});

    // Handle change in radio button selection
    const handleChange = (assessmentId: number, questionIndex: number, answer: string) => {
        setResponses(prev => ({
            ...prev,
            [`${assessmentId}-${questionIndex}`]: answer, // Update the response for the specific question
        }));
    };

    // Handle form submission for an assessment
    const handleSubmit = (assessmentId: number) => {
        // Find the assessment and determine correct answers
        const correctAnswers = assessments.find(a => a.id === assessmentId)?.Questions.map((q, index) => {
            const selectedAnswer = responses[`${assessmentId}-${index}`]; // User's selected answer
            const correctAnswer = q.Answers.find(a => a.isCorrect); // Correct answer for the question
            return selectedAnswer === correctAnswer?.answerText; // Check if the selected answer is correct
        }) || [];

        const score = correctAnswers.filter(Boolean).length; // Calculate score as number of correct answers
        setScore(score); // Update the score state
        setSubmittedAssessmentId(assessmentId); // Store submitted assessment ID

        // Calculate the total number of questions
        const totalQuestions = assessments.find(a => a.id === assessmentId)?.Questions.length || 0;
        let calculatedGrade = "D"; // Default grade

        // Determine the grade based on the score
        if (score === totalQuestions) {
            calculatedGrade = "A";
        } else if (score >= totalQuestions / 2) {
            calculatedGrade = "B";
        } else if (score > 0) {
            calculatedGrade = "C";
        }

        setGrade(calculatedGrade); // Update the grade state

        // Show a pop-up with the score and grade
        Swal.fire({
            title: 'Your Score',
            text: `You scored ${score} out of ${totalQuestions}. Your grade is ${calculatedGrade}.`,
            icon: 'info',
            confirmButtonText: 'OK',
        });
    };

    // Function to navigate to the grades page
    const handleViewGrades = () => {
        router.push('/assessment/track-progress');
    };

    // Display a loading message while assessments are being fetched
    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box sx={{ maxWidth: 800, margin: '0 auto', marginTop: 4, padding: 3 }}>
            <Typography variant="h5" gutterBottom align="center" color='sky green'>
                Assessments
            </Typography>

            {/* Add the image here for better design */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                <img 
                    src="https://st4.depositphotos.com/15582768/23492/v/450/depositphotos_234928032-stock-illustration-flat-colorful-design-concept-assessment.jpg" 
                    alt="Assessment Illustration" 
                    style={{ width: '100%', maxWidth: 600 }} // Adjust size as needed
                />
            </Box>

            {/* Render each assessment as a card */}
            {assessments.map((assessment: Assessment) => (
                <Card key={assessment.id} variant="outlined" sx={{ marginBottom: 2 }}>
                    <CardContent>
                        <Typography variant="h6">{assessment.title}</Typography>
                        {/* Render each question within the assessment */}
                        {assessment.Questions.map((question: Question, index: number) => (
                            <Box key={index} mb={2}>
                                <Typography variant="subtitle1">{question.questionText}</Typography>
                                <RadioGroup
                                    value={responses[`${assessment.id}-${index}`] || ''} // Set the value of the radio group
                                    onChange={(e) => handleChange(assessment.id, index, e.target.value)} // Handle change event
                                >
                                    {/* Render each answer as a radio button */}
                                    {question.Answers.map((answer: Answer, aIndex: number) => (
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
                        {/* Submit button for the assessment */}
                        <Button variant="contained" color="primary" onClick={() => handleSubmit(assessment.id)}>
                            Submit
                        </Button>
                    </CardContent>
                </Card>
            ))}

            {/* Display the grade after submission */}
            {submittedAssessmentId !== null && grade && (
                <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
                    Your Grade: {grade}
                </Typography>
            )}

            {/* Button to view grades after submission */}
            {submittedAssessmentId !== null && (
                <Button variant="outlined" onClick={handleViewGrades} sx={{ marginTop: 2 }}>
                    Your Progress
                </Button>
            )}
        </Box>
    );
};

export default ViewAssessmentPage;
