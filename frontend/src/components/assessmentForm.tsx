import { useState } from 'react';
import { Container, Typography, TextField, Button, Box, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import axios from 'axios';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const AssessmentForm = () => {
  const [title, setTitle] = useState('');
  const [courseId, setCourseId] = useState<number | ''>('');
  const [questions, setQuestions] = useState<Question[]>([{ question: '', options: ['', ''], answer: '' }]);
  const [error, setError] = useState<string | null>(null);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', ''], answer: '' }]);
  };

  const handleQuestionChange = (index: number, field: string, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index] = { ...newQuestions[index], [field]: value };
    setQuestions(newQuestions);
  };

  const handleOptionChange = (index: number, optionIndex: number, value: string) => {
    const newQuestions = [...questions];
    const newOptions = [...newQuestions[index].options];
    newOptions[optionIndex] = value;
    newQuestions[index] = { ...newQuestions[index], options: newOptions };
    setQuestions(newQuestions);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/assessments', { title, courseId, questions });
      console.log(response.data);
      alert('Assessment created successfully.');
    } catch (error) {
      console.error('Error creating assessment:', error);
      setError('Failed to create assessment. Please try again.');
    }
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
          border: '1px solid #ccc', 
          borderRadius: 2, 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
          backgroundColor: '#fff', 
          marginTop: 3
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Create Assessment
        </Typography>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Course ID"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={courseId}
          onChange={(e) => setCourseId(Number(e.target.value))}
        />
        {questions.map((q, index) => (
          <Box key={index} sx={{ marginBottom: 3 }}>
            <TextField
              label={`Question ${index + 1}`}
              variant="outlined"
              fullWidth
              margin="normal"
              value={q.question}
              onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
            />
            {q.options.map((option, optionIndex) => (
              <TextField
                key={optionIndex}
                label={`Option ${optionIndex + 1}`}
                variant="outlined"
                fullWidth
                margin="normal"
                value={option}
                onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)}
              />
            ))}
            <FormControl fullWidth margin="normal">
              <InputLabel>Correct Option</InputLabel>
              <Select
                value={q.answer}
                onChange={(e) => handleQuestionChange(index, 'answer', e.target.value)}
                label="Correct Option"
              >
                {q.options.map((option, optionIndex) => (
                  <MenuItem key={optionIndex} value={option}>{option}</MenuItem>
                ))}
              </Select>
              <FormHelperText>Select the correct option</FormHelperText>
            </FormControl>
          </Box>
        ))}
        <Button variant="contained" color="secondary" onClick={handleAddQuestion} sx={{ marginTop: 2 }}>
          Add Question
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth sx={{ marginTop: 2 }}>
          Submit Assessment
        </Button>
        {error && <Typography color="error" sx={{ marginTop: 2 }}>{error}</Typography>}
      </Box>
    </Container>
  );
}

export default AssessmentForm;
