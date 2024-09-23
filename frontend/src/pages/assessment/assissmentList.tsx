import React, { useState } from 'react';
import {
    Box,
    Button,
    Typography,
    Card,
    CardContent,
    CardActions,
    IconButton,
    Paper,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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

const initialAssessments: Assessment[] = [
    {
        id: 1,
        title: "Sample Assessment 1",
        questions: [
            {
                questionText: "What is React?",
                answers: [
                    { answerText: "A library for building user interfaces", isCorrect: true },
                    { answerText: "A programming language", isCorrect: false },
                ],
            },
        ],
    },
    // You can add more sample assessments here
];

const AssessmentList: React.FC = () => {
    const [assessments, setAssessments] = useState<Assessment[]>(initialAssessments);

    const handleEdit = (id: number) => {
        console.log(`Edit assessment with id: ${id}`);
        // Logic to edit the assessment
    };

    const handleDelete = (id: number) => {
        setAssessments(assessments.filter(assessment => assessment.id !== id));
    };

    return (
        <Box 
            component={Paper} 
            padding={2} 
            style={{ maxWidth: '600px', margin: 'auto', marginTop: '20px' }}
        >
            <Typography variant="h4" align="center">Assessments</Typography>
            {assessments.length === 0 ? (
                <Typography variant="body1" align="center">No assessments available.</Typography>
            ) : (
                assessments.map(assessment => (
                    <Card key={assessment.id} style={{ margin: '10px 0' }}>
                        <CardContent>
                            <Typography variant="h5">{assessment.title}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Questions: {assessment.questions.length}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton onClick={() => handleEdit(assessment.id)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => handleDelete(assessment.id)} color="error">
                                <DeleteIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                ))
            )}
            <Button 
                variant="contained" 
                color="primary" 
                style={{ marginTop: '20px' }} 
                onClick={() => console.log('Navigate to create assessment')}
            >
                Create New Assessment
            </Button>
        </Box>
    );
};

export default AssessmentList;
