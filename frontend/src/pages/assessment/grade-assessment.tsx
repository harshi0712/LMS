// import React from 'react';
// import { BarChart } from '@mui/x-charts/BarChart';
// import { Box, Typography, Paper } from '@mui/material';

// const GradeAssessment: React.FC = () => {
//     // Sample data for grades
//     const subjects = ['Math', 'Science', 'English'];
//     const studentGrades = [
//         { name: 'Student A', grades: [85, 92, 78] },
//         { name: 'Student B', grades: [76, 88, 90] },
//         { name: 'Student C', grades: [91, 85, 82] },
//     ];

//     return (
//         <Box
//             component={Paper}
//             padding={2}
//             style={{
//                 maxWidth: '600px',
//                 margin: 'auto',
//                 marginTop: '20px',
//                 textAlign: 'center',
//             }}
//         >
//             <Typography variant="h4" gutterBottom>
//                 Grade Assessment
//             </Typography>
//             <BarChart
//                 xAxis={[{ scaleType: 'band', data: subjects }]}
//                 series={studentGrades.map(student => ({
//                     name: student.name,
//                     data: student.grades,
//                 }))}
//                 width={500}
//                 height={300}
//                 barLabel="value"
//             />
//         </Box>
//     );
// };

// export default GradeAssessment;

