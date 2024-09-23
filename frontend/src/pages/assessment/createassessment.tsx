// AssessmentForm.tsx

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
    Button,
    TextField,
    Box,
    Typography,
    IconButton,
    Paper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface Answer {
    answerText: string;
    isCorrect: boolean;
}

interface Question {
    questionText: string;
    answers: Answer[];
}

interface AssessmentFormInputs {
    title: string;
    questions: Question[];
}

const AssessmentForm: React.FC = () => {
    const { control, handleSubmit, register } = useForm<AssessmentFormInputs>({
        defaultValues: {
            title: '',
            questions: [{ questionText: '', answers: [{ answerText: '', isCorrect: false }] }],
        },
    });

    const [questions, setQuestions] = useState<Question[]>([{ questionText: '', answers: [{ answerText: '', isCorrect: false }] }]);

    const onSubmit = async (data: AssessmentFormInputs) => {
        console.log('Form Data:', data);
        // Call your API to create the assessment here
    };

    const addQuestion = () => {
        setQuestions([...questions, { questionText: '', answers: [{ answerText: '', isCorrect: false }] }]);
    };

    const removeQuestion = (index: number) => {
        setQuestions(questions.filter((_, i) => i !== index));
    };

    const addAnswer = (questionIndex: number) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].answers.push({ answerText: '', isCorrect: false });
        setQuestions(newQuestions);
    };

    const removeAnswer = (questionIndex: number, answerIndex: number) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].answers.splice(answerIndex, 1);
        setQuestions(newQuestions);
    };

    return (
        <Box 
            component={Paper} 
            padding={2} 
            style={{ 
                border: '1px solid #ccc', 
                borderRadius: '8px', 
                maxWidth: '600px', 
                margin: 'auto', 
                marginTop: '20px',
                paddingBottom: '20px'
            }}
        >
            <Typography variant="h4" align="center">Create Assessment</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Assessment Title"
                    fullWidth
                    margin="normal"
                    {...register('title', { required: 'Title is required' })}
                />
                {questions.map((question, qIndex) => (
                    <Box key={qIndex} mb={2}>
                        <Typography variant="h6">Question {qIndex + 1}</Typography>
                        <TextField
                            label="Question Text"
                            fullWidth
                            margin="normal"
                            {...register(`questions.${qIndex}.questionText`, { required: 'Question text is required' })}
                        />
                        {question.answers.map((answer, aIndex) => (
                            <Box display="flex" alignItems="center" key={aIndex}>
                                <TextField
                                    label={`Answer ${aIndex + 1}`}
                                    {...register(`questions.${qIndex}.answers.${aIndex}.answerText`, { required: 'Answer text is required' })}
                                    style={{ marginRight: '8px' }}
                                />
                                <Controller
                                    control={control}
                                    name={`questions.${qIndex}.answers.${aIndex}.isCorrect`}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField
                                            select
                                            label="Correct"
                                            value={value ? 'true' : 'false'}
                                            onChange={e => onChange(e.target.value === 'true')}
                                            SelectProps={{
                                                native: true,
                                            }}
                                        >
                                            <option value="false">No</option>
                                            <option value="true">Yes</option>
                                        </TextField>
                                    )}
                                />
                                <IconButton onClick={() => removeAnswer(qIndex, aIndex)}><RemoveIcon /></IconButton>
                            </Box>
                        ))}
                        <Button variant="outlined" onClick={() => addAnswer(qIndex)} startIcon={<AddIcon />}>Add Answer</Button>
                        <IconButton onClick={() => removeQuestion(qIndex)}><RemoveIcon /></IconButton>
                    </Box>
                ))}
                <Button variant="outlined" onClick={addQuestion} startIcon={<AddIcon />}>Add Question</Button>
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>Submit</Button>
            </form>
        </Box>
    );
};

export default AssessmentForm;
