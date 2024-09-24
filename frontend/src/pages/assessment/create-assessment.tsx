

import React from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Swal from 'sweetalert2';
import { createAssessment } from '../../service/assessment'; 


interface Answer {
    answerText: string;
    isCorrect: boolean;
}

interface Question {
    questionText: string;
    answers: Answer[];
}

interface IFormInput {
    title: string;
    questions: Question[];
}

const AssessmentForm: React.FC = () => {
    const { control, handleSubmit, reset } = useForm<IFormInput>({
        defaultValues: {
            title: '',
            questions: [{ questionText: '', answers: [{ answerText: '', isCorrect: false }] }]
        }
    });
    
    const { fields: questionFields, append: appendQuestion, remove: removeQuestion } = useFieldArray({
        control,
        name: "questions"
    });

    const onSubmit = async (data: IFormInput) => {
        console.log('Form data:', data);
        const response = await createAssessment(data.title, data.questions);
        if (response) {
            Swal.fire({ icon: "success", title: "Assessment created successfully!" });
            reset(); // Reset form after submission
        } else {
            Swal.fire({ icon: "error", title: "Failed to create assessment", text: "Please try again." });
        }
    };

    return (
        <Box 
            sx={{ 
                maxWidth: 600,
                margin: '0 auto', 
                marginTop: 4,
                padding: 3,
                border: '1px solid #ccc', 
                borderRadius: '8px', 
                backgroundColor: '#fff' 
            }}
        >
            <Typography variant="h5" gutterBottom align="center">
                Create New Assessment
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="title"
                    control={control}
                    rules={{ required: 'Title is required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Assessment Title"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            error={!!field.value && !field.value.length}
                            helperText={!field.value ? 'Title is required' : ''}
                        />
                    )}
                />

                {questionFields.map((question, qIndex) => {
                    const { fields: answerFields, append: appendAnswer, remove: removeAnswer } = useFieldArray({
                        control,
                        name: `questions.${qIndex}.answers`
                    });

                    return (
                        <Box key={question.id} mb={3}>
                            <Controller
                                name={`questions.${qIndex}.questionText`}
                                control={control}
                                rules={{ required: 'Question text is required' }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label={`Question ${qIndex + 1}`}
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        error={!!field.value && !field.value.length}
                                        helperText={!field.value ? 'Question text is required' : ''}
                                    />
                                )}
                            />

                            {answerFields.map((answer, aIndex) => (
                                <Box key={answer.id} display="flex" alignItems="center" mb={1}>
                                    <Controller
                                        name={`questions.${qIndex}.answers.${aIndex}.answerText`}
                                        control={control}
                                        rules={{ required: 'Answer text is required' }}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                label={`Answer ${aIndex + 1}`}
                                                margin="normal"
                                                variant="outlined"
                                                error={!!field.value && !field.value.length}
                                                helperText={!field.value ? 'Answer text is required' : ''}
                                                style={{ marginRight: '8px' }}
                                            />
                                        )}
                                    />
                                    <Controller
                                        name={`questions.${qIndex}.answers.${aIndex}.isCorrect`}
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                select
                                                label="Correct"
                                                value={field.value ? 'true' : 'false'}
                                                onChange={e => field.onChange(e.target.value === 'true')}
                                                SelectProps={{ native: true }}
                                                variant="outlined"
                                            >
                                                <option value="false">No</option>
                                                <option value="true">Yes</option>
                                            </TextField>
                                        )}
                                    />
                                    <IconButton onClick={() => removeAnswer(aIndex)}>
                                        <RemoveIcon />
                                    </IconButton>
                                </Box>
                            ))}

                            <IconButton onClick={() => appendAnswer({ answerText: '', isCorrect: false })}>
                                <AddIcon />
                            </IconButton>
                            <Button variant="outlined" color="secondary" onClick={() => removeQuestion(qIndex)}>
                                Remove Question
                            </Button>
                        </Box>
                    );
                })}

                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Create Assessment
                </Button>
            </form>
        </Box>
    );
};

export default AssessmentForm;

//////////////////////////////////////////////////////////////////////////

