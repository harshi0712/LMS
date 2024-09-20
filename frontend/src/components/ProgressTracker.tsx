// // components/ProgressTracker.tsx
// import { useEffect, useState } from 'react';
// import { createOrUpdateProgress, getProgress } from '../';
// import {
//     Box,
//     TextField,
//     Button,
//     Typography,
//     CircularProgress,
// } from '@mui/material';

// const ProgressTracker = () => {
//     const [userId, setUserId] = useState<number>(1); // Example user ID
//     const [courseId, setCourseId] = useState<number>(1); // Example course ID
//     const [completedModules, setCompletedModules] = useState<number>(0);
//     const [totalModules, setTotalModules] = useState<number>(10); // Example total modules
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchProgress = async () => {
//             try {
//                 const response = await getProgress(userId, courseId);
//                 setCompletedModules(response.data.completedModules);
//                 setTotalModules(response.data.totalModules);
//             } catch (err) {
//                 setError('Error fetching progress');
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchProgress();
//     }, [userId, courseId]);

//     const handleUpdateProgress = async () => {
//         try {
//             await createOrUpdateProgress({ userId, courseId, completedModules, totalModules });
//             alert('Progress updated successfully!');
//         } catch (err) {
//             setError('Error updating progress');
//         }
//     };

//     if (loading) return <CircularProgress />;
//     if (error) return <Typography color="error">{error}</Typography>;

//     return (
//         <Box sx={{ padding: 3 }}>
//             <Typography variant="h4">Progress Tracker</Typography>
//             <TextField
//                 label="Completed Modules"
//                 type="number"
//                 value={completedModules}
//                 onChange={(e) => setCompletedModules(Number(e.target.value))}
//                 fullWidth
//                 margin="normal"
//             />
//             <TextField
//                 label="Total Modules"
//                 type="number"
//                 value={totalModules}
//                 onChange={(e) => setTotalModules(Number(e.target.value))}
//                 fullWidth
//                 margin="normal"
//                 disabled
//             />
//             <Button variant="contained" onClick={handleUpdateProgress}>
//                 Update Progress
//             </Button>
//         </Box>
//     );
// };

// export default ProgressTracker;
