// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Container, Button, Box } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Swal from "sweetalert2";
// import { fetchAssessments, deleteAssessment } from "../../service/assessment"; // Adjust the import path accordingly
// import { AssessmentData } from "../../service/assessment"; // Adjust the import path accordingly

// const AssessmentDashboard: React.FC = () => {
//   const [assessmentList, setAssessmentList] = useState<AssessmentData[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchList();
//   }, []);

//   const fetchList = async () => {
//     try {
//       const assessments = await fetchAssessments();
//       setAssessmentList(assessments);
//     } catch (error) {
//       console.error("Failed to fetch assessments:", error);
//       Swal.fire({
//         icon: "error",
//         title: "Error fetching assessments",
//       });
//     }
//   };

//   // Called delete assessment API with confirmation modal
//   const deleteAssessmentHandler = (id: number) => {
//     const swalWithBootstrapButtons = Swal.mixin({
//       customClass: {
//         confirmButton: "btn btn-success",
//         cancelButton: "btn btn-danger",
//       },
//       buttonsStyling: false,
//     });
    
//     swalWithBootstrapButtons
//       .fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonText: "Yes, delete it!",
//         cancelButtonText: "No, cancel!",
//         reverseButtons: true,
//       })
//       .then(async (result) => {
//         if (result.isConfirmed) {
//           try {
//             await deleteAssessment(id);
//             fetchList();
//             swalWithBootstrapButtons.fire({
//               title: "Deleted!",
//               text: "Your assessment has been deleted.",
//               icon: "success",
//             });
//           } catch (error) {
//             console.error("Failed to delete assessment:", error);
//             Swal.fire({
//               icon: "error",
//               title: "Error deleting assessment",
//             });
//           }
//         }
//       });
//   };

//   // Render assessment list table
//   const renderTable = () => {
//     return (
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">Title</th>
//             <th scope="col">Description</th>
//             <th scope="col">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {assessmentList.length > 0 ? (
//             assessmentList.map((assessment) => (
//               <tr key={assessment.courseId}>
//                 <th scope="row">{assessment.title}</th>
//                 <td>{assessment.courseId}</td>
//                 <td>
//                   <EditIcon onClick={() => navigate(`/update-assessment/${assessment.courseId}`)} />
//                   <DeleteIcon onClick={() => deleteAssessmentHandler(assessment.courseId)} />
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={3} className="text-center">No assessments found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     );
//   };

//   return (
//     <Container>
//       <Box display="flex" justifyContent="flex-end" mt={2}>
//         <Button
//           variant="contained"
//           color="primary"
//           component={Link}
//           to="/create-assessment"
//         >
//           Create Assessment
//         </Button>
//       </Box>
//       {/* Display list of assessments here */}
//       {renderTable()}
//     </Container>
//   );
// };

// export default AssessmentDashboard;
