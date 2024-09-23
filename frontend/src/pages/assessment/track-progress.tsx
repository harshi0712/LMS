// import React from 'react';
// import { BarChart } from '@mui/x-charts/BarChart';
// import { Box, Typography, Paper } from '@mui/material';

// const TrackProgress: React.FC = () => {
//     // Sample data for progress tracking
//     const subjects = ['Math', 'Science', 'English'];
//     const progressData = [
//         { name: 'Student A', progress: [70, 85, 60] },
//         { name: 'Student B', progress: [90, 60, 80] },
//         { name: 'Student C', progress: [50, 70, 90] },
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
//                 Track Progress
//             </Typography>
//             <BarChart
//                 xAxis={[{ scaleType: 'band', data: subjects }]}
//                 series={progressData.map(student => ({
//                     name: student.name,
//                     data: student.progress,
//                 }))}
//                 width={500}
//                 height={300}
//                 barLabel="value"
//                 tooltip={{ enabled: true }} // Optional: Show tooltip on hover
//             />
//         </Box>
//     );
// };

// export default TrackProgress;
