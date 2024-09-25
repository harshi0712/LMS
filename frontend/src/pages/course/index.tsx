// import React, { useEffect, useState } from 'react';
// import { Grid, CircularProgress, Typography, Button, Box, Modal, IconButton } from '@mui/material';
// import { useRouter } from 'next/router';
// import CloseIcon from '@mui/icons-material/Close';
// import ReactPlayer from 'react-player';
// import CourseCard from '../../components/cards/CourseCard';
// import { fetchCourses, deleteCourseById } from '../../service/course'; // Adjust path according to your file structure
// import Swal from 'sweetalert2';
// import useAuth from '../../hooks/useAuth';


// interface Course {
//     id: number;
//     title: string;
//     description: string;
//     courseImage: string;
//     link: string; // Video link
//     createdAt: string;
//     updatedAt: string;
// }

// const CourseList: React.FC = () => {

//     const { role } = useAuth()
//     const [courses, setCourses] = useState<Course[] | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
//     const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//     const router = useRouter();

//     useEffect(() => {
//         const loadCourses = async () => {
//             setLoading(true);
//             try {
//                 const fetchedCourses = await fetchCourses();
//                 if (fetchedCourses) {
//                     setCourses(fetchedCourses as Course[]);
//                 }
//             } catch (error) {
//                 console.error('Error fetching courses:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadCourses();
//     }, []);

//     const handleCourseClick = (course: Course) => {
//         setSelectedCourse(course);
//         // setIsModalOpen(true);
//         router.push(`/assessment/assessmentList?id=${course.id}`)
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//         setSelectedCourse(null);
//     };

//     const navigateToCreateCourse = () => {
//         router.push('/course/create-course');
//     };

//     const navigateToEditCourse = (courseId: number) => {
//         router.push(`/course/edit-course?id=${courseId}`);
//     };

//     const handleDeleteCourse = async (courseId: number) => {
//         try {
//             const result = await deleteCourseById(courseId);
//             if (result) {
//                 Swal.fire({
//                     icon: "success",
//                     title: "Course deleted successfully",
//                 });
//                 // Reload courses
//                 const fetchedCourses = await fetchCourses();
//                 setCourses(fetchedCourses as Course[]);
//             }
//         } catch (error) {
//             console.error('Error deleting course:', error);
//         }
//     };

//     if (loading) {
//         return <CircularProgress />;
//     }

//     if (!courses || courses.length === 0) {
//         return <Typography>No courses available</Typography>;
//     }

//     return (
//         <div>
//             <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 3 }}>
//                 {role === 'admin' || role === 'instructor' && <Button variant="contained" color="primary" onClick={navigateToCreateCourse}>
//                     Create Course
//                 </Button>}
//             </Box>

//             <Grid container spacing={3}>
//                 {courses.map((course) => (
//                     <Grid item xs={12} sm={6} md={4} key={course.id} onClick={() => handleCourseClick(course)}>
//                         <CourseCard
//                             course={course}
//                             onClick={() => handleCourseClick(course)}
//                             onEdit={() => navigateToEditCourse(course.id)} // Add edit handler
//                             onDelete={() => handleDeleteCourse(course.id)} // Add delete handler
//                         />
//                     </Grid>
//                 ))}
//             </Grid>

//             <Modal
//                 open={isModalOpen}
//                 onClose={handleCloseModal}
//                 aria-labelledby="course-video-modal"
//                 aria-describedby="course-video-description"
//                 closeAfterTransition
//             >
//                 <Box
//                     sx={{
//                         position: 'absolute',
//                         top: '50%',
//                         left: '50%',
//                         transform: 'translate(-50%, -50%)',
//                         width: '80%',
//                         bgcolor: 'background.paper',
//                         boxShadow: 24,
//                         p: 4,
//                         outline: 'none',
//                     }}
//                 >
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                         <Typography variant="h6">{selectedCourse?.title}</Typography>
//                         <IconButton aria-label="close" onClick={handleCloseModal}>
//                             <CloseIcon />
//                         </IconButton>
//                     </Box>
//                     <Box sx={{ mt: 2 }}>
//                         {selectedCourse?.link ? (
//                             <ReactPlayer
//                                 url={selectedCourse.link}
//                                 controls
//                                 width="100%"
//                                 height="100%"
//                                 style={{ maxHeight: '100%', maxWidth: '100%' }}
//                             />
//                         ) : (
//                             <Typography>No video available</Typography>
//                         )}
//                     </Box>
//                 </Box>
//             </Modal>
//         </div>
//     );
// };

// export default CourseList;
/////////////////////////////////////////////////////


// src/pages/course/CourseList.tsx
import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress, Typography, Button, Box, Modal, IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import CloseIcon from '@mui/icons-material/Close';
import ReactPlayer from 'react-player';
import CourseCard from '../../components/cards/CourseCard';
import { fetchCourses, deleteCourseById } from '../../service/course';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import SearchBar from '../../pages/searchbar/search'; // Import the SearchBar component

interface Course {
    id: number;
    title: string;
    description: string;
    courseImage: string;
    link: string; // Video link
    createdAt: string;
    updatedAt: string;
}

const CourseList: React.FC = () => {
    const { role } = useAuth();
    const [courses, setCourses] = useState<Course[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const loadCourses = async () => {
            setLoading(true);
            try {
                // const fetchedCourses = await fetchCourses();
                // if (fetchedCourses) {
                //     setCourses(fetchedCourses as Course[]);
                // }
            } catch (error) {
                console.error('Error fetching courses:', error);
            } finally {
                setLoading(false);
            }
        };

        loadCourses();
    }, []);

    const handleCourseClick = (course: Course) => {
        setSelectedCourse(course);
        router.push(`/assessment/assessmentList?id=${course.id}`);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
    };

    const navigateToCreateCourse = () => {
        router.push('/course/create-course');
    };

    const navigateToEditCourse = (courseId: number) => {
        router.push(`/course/edit-course?id=${courseId}`);
    };

    const handleDeleteCourse = async (courseId: number) => {
        try {
            const result = await deleteCourseById(courseId);
            if (result) {
                Swal.fire({
                    icon: "success",
                    title: "Course deleted successfully",
                });
                // Reload courses
                const fetchedCourses = await fetchCourses();
                setCourses(fetchedCourses as Course[]);
            }
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };

    if (loading) {
        return <CircularProgress />;
    }

    // if (!courses || courses.length === 0) {
    //     return <Typography>No courses available</Typography>;
    // }

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 3 }}>
                {(role === 'admin' || role === 'instructor') && (
                    <Button variant="contained" color="primary" onClick={navigateToCreateCourse}>
                        Create Course
                    </Button>
                )}
            </Box>

            <SearchBar setCourses={setCourses}/> {/* Include the SearchBar component here */}
            <Grid container spacing={3}>
                {courses?.map((course) => (
                    <Grid item xs={12} sm={6} md={4} key={course.id} onClick={() => handleCourseClick(course)}>
                        <CourseCard
                            course={course}
                            onClick={() => handleCourseClick(course)}
                            onEdit={() => navigateToEditCourse(course.id)}
                            onDelete={() => handleDeleteCourse(course.id)}
                            />
                    </Grid>
                ))}
            </Grid>

            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="course-video-modal"
                aria-describedby="course-video-description"
                closeAfterTransition
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        outline: 'none',
                    }}
                    >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6">{selectedCourse?.title}</Typography>
                        <IconButton aria-label="close" onClick={handleCloseModal}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        {selectedCourse?.link ? (
                            <ReactPlayer
                            url={selectedCourse.link}
                            controls
                            width="100%"
                            height="100%"
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                            />
                        ) : (
                            <Typography>No video available</Typography>
                        )}
                    </Box>
                </Box>
            </Modal>
            {courses?(""):(<h4>No course found..</h4>)}
        </div>
    );
};

export default CourseList;
