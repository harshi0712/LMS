import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button, IconButton, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Swal from 'sweetalert2';
import { createAssessment } from '../../service/assessment';
import { useRouter } from 'next/router';
import { fetchCourses } from '../../service/course';

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
    courseId: string; // Ensure courseId is a string
    questions: Question[];
}

interface Course {
    id: number;
    title: string;
    description: string;
    courseImage: string;
    link: string;
    createdAt: string;
    updatedAt: string;
}

const AssessmentForm: React.FC = () => {
    const router = useRouter();
    const [courses, setCourses] = useState<Course[]>([]);
    const { control, handleSubmit, reset } = useForm<IFormInput>({
        defaultValues: {
            title: '',
            courseId: '', // Initialize courseId as an empty string
            questions: [{ questionText: '', answers: [{ answerText: '', isCorrect: false }] }]
        }
    });

    const { fields: questionFields, append: appendQuestion, remove: removeQuestion } = useFieldArray({
        control,
        name: "questions"
    });

    useEffect(() => {
        const loadCourses = async () => {
            try {
                const fetchedCourses = await fetchCourses();
                setCourses(fetchedCourses as Course[]);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        loadCourses();
    }, []);

    const onSubmit = async (data: IFormInput) => {
        // Format data to match required structure
        const formattedData = {
            title: data.title,
            courseId: data.courseId,
            questions: data.questions.map(question => ({
                questionText: question.questionText,
                answers: question.answers.map(answer => ({
                    answerText: answer.answerText,
                    isCorrect: answer.isCorrect
                }))
            }))
        };

        console.log('Formatted data:', formattedData);

        const response = await createAssessment(formattedData); // Pass formatted data
        if (response) {
            Swal.fire({ icon: "success", title: "Assessment created successfully!" });
            reset();
            router.push('/assessment/allAssesment');
        } else {
            Swal.fire({ icon: "error", title: "Failed to create assessment", text: "Please try again." });
        }
    };

    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto', marginTop: 4, padding: 3, border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fff' }}>
            <Typography variant="h5" gutterBottom align="center">Create New Assessment</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="course-select-label">Select Course</InputLabel>
                    <Controller
                        name="courseId"
                        control={control}
                        rules={{ required: 'Course is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <Select {...field} labelId="course-select-label" label="Select Course" error={!!fieldState.error}>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    {courses.map(course => (
                                        <MenuItem key={course.id} value={course.id.toString()}>
                                            {course.title}
                                        </MenuItem>
                                    ))}
                                </Select>
                                {fieldState.error && <FormHelperText error>{fieldState.error.message}</FormHelperText>}
                            </>
                        )}
                    />
                </FormControl>

                <Controller
                    name="title"
                    control={control}
                    rules={{ required: 'Title is required' }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            label="Assessment Title"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            error={!!fieldState.error}
                            helperText={fieldState.error ? fieldState.error.message : ''}
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
                                render={({ field, fieldState }) => (
                                    <TextField
                                        {...field}
                                        label={`Question ${qIndex + 1}`}
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        error={!!fieldState.error}
                                        helperText={fieldState.error ? fieldState.error.message : ''}
                                    />
                                )}
                            />

                            {answerFields.map((answer, aIndex) => (
                                <Box key={answer.id} display="flex" alignItems="center" mb={1}>
                                    <Controller
                                        name={`questions.${qIndex}.answers.${aIndex}.answerText`}
                                        control={control}
                                        rules={{ required: 'Answer text is required' }}
                                        render={({ field, fieldState }) => (
                                            <TextField
                                                {...field}
                                                label={`Answer ${aIndex + 1}`}
                                                margin="normal"
                                                variant="outlined"
                                                error={!!fieldState.error}
                                                helperText={fieldState.error ? fieldState.error.message : ''}
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
