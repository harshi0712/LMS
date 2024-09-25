import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Radio,
    RadioGroup,
    FormControlLabel,
    Button,
} from '@mui/material';
import { useRouter } from 'next/router';
import { fetchAllAssessments } from '../../service/assessment';
import { useSearchParams } from 'next/navigation';

interface Answer {
    answerText: string;
    isCorrect: boolean;
}

interface Question {
    questionText: string;
    Answers: Answer[];
}

interface Assessment {
    id: number;
    title: string;
    Questions: Question[];
}
interface Responses {
    [key: string]: string; // Dynamic keys with string values
}

const AllAssessment: React.FC = () => {
    const [assessments, setAssessments] = useState<Assessment[]>([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const router = useRouter();

    useEffect(() => {
        const loadAssessments = async () => {
            const data:any = await fetchAllAssessments();
            if (data) {
                setAssessments(data);
            }
            setLoading(false);
        };
        loadAssessments();
    }, []);

    const [responses, setResponses] = useState<Responses>({});
    const handleChange = (assessmentId: number, questionIndex: number, answer: string) => {
        setResponses(prev => ({
            ...prev,
            [`${assessmentId}-${questionIndex}`]: answer,
        }));
    };

    const handleCreateAssessment = () => {
        router.push('/assessment/create-assessment'); // Change the path to your actual create assessment route
    };

    if (loading) {
        return <Typography variant="h6" align="center">Loading...</Typography>;
    }

    return (
        <Box sx={{ maxWidth: 800, margin: '0 auto', marginTop: 4, padding: 3 }}>
            <Typography variant="h5" gutterBottom align="center">
                Assessments
            </Typography>

            <Button
                variant="contained"
                color="primary"
                onClick={handleCreateAssessment}
                sx={{ marginBottom: 2 }}
            >
                Create Assessment
            </Button>

            {assessments.map(assessment => (
                <TableContainer component={Paper} key={assessment.id} sx={{ marginBottom: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h6" align="center">Assessment Name</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6" align="center">Assessment Options</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {assessment.Questions.map((question, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Typography variant="subtitle1">{question.questionText}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <RadioGroup
                                            value={responses[`${assessment.id}-${index}`] || ''}
                                            onChange={(e) => handleChange(assessment.id, index, e.target.value)}
                                        >
                                            {question.Answers.map((answer, aIndex) => (
                                                <FormControlLabel
                                                    key={aIndex}
                                                    value={answer.answerText}
                                                    control={<Radio />}
                                                    label={answer.answerText}
                                                />
                                            ))}
                                        </RadioGroup>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ))}
        </Box>
    );
};

export default AllAssessment;
