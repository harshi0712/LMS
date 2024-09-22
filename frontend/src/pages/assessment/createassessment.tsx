// import React, { useEffect, useRef } from "react";
// import { useForm, useFieldArray } from "react-hook-form";
// import {
//   TextField,
//   Button,
//   Container,
//   Typography,
//   IconButton,
//   Box,
//   Paper,
// } from "@mui/material";
// import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
// import Swal from "sweetalert2";
// import { useRouter } from 'next/router';
// import { fetchAssessmentById, updateAssessment, createAssessment } from "../../service/assessment";

// // Define the form data type
// interface Option {
//   text: string;
//   id?: string; // Optional since it may not be present when creating
// }

// interface Question {
//   text: string;
//   options: Option[];
//   status: 'active' | 'inactive'; // Define the status type
// }

// interface AssessmentFormData {
//   title: string;
//   description: string;
//   courseId: number; // Assuming courseId is required
//   questions: Question[];
// }

// // Define the response type from the fetchAssessmentById API
// interface AssessmentResponse {
//   title: string;
//   description: string;
//   courseId: number;
//   questions: { text: string; _id: string; options: Option[]; status: string }[];
// }

// const CreateAssessment: React.FC<{ id?: string }> = ({ id }) => {
//   const {
//     register,
//     control,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<AssessmentFormData>();

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "questions",
//   });

//   const router = useRouter();
//   const questionsAdded = useRef(false); // Track if questions have been added

//   useEffect(() => {
//     const fetchAssessment = async () => {
//       if (id) {
//         try {
//           const res = await fetchAssessmentById(Number(id));
//           if (res.status === 200) {
//             const assessmentData: AssessmentResponse = res.data;
//             reset({
//               title: assessmentData.title,
//               description: assessmentData.description,
//               courseId: assessmentData.courseId,
//               questions: assessmentData.questions.map(q => ({
//                 text: q.text,
//                 options: q.options.map(option => ({ text: option.text, id: option._id })),
//                 status: q.status as 'active' | 'inactive',
//               })),
//             });

//             // Append questions only if they haven't been added yet
//             if (!questionsAdded.current) {
//               assessmentData.questions.forEach(question => {
//                 append({ text: question.text, options: question.options, status: question.status as 'active' | 'inactive' });
//               });
//               questionsAdded.current = true; // Mark questions as added
//             }
//           } else {
//             console.error("Error fetching assessment:", res.statusText);
//           }
//         } catch (error) {
//           console.error("Failed to fetch assessment:", error);
//         }
//       }
//     };

//     fetchAssessment();
//   }, [id, reset, append]);

//   const onSubmit = async (data: AssessmentFormData) => {
//     try {
//       const questionPayload = data.questions.map(q => ({
//         text: q.text,
//         options: q.options.map(o => ({ text: o.text })),
//         status: q.status,
//       }));

//       let res;
//       if (id) {
//         res = await updateAssessment(Number(id), {
//           title: data.title,
//           courseId: data.courseId,
//           questions: questionPayload,
//         });
//       } else {
//         res = await createAssessment({
//           title: data.title,
//           courseId: data.courseId,
//           questions: questionPayload,
//         });
//       }

//       if (res.status === 200 || res.status === 201) {
//         Swal.fire({
//           icon: "success",
//           title: id ? "Assessment updated successfully" : "Assessment created successfully",
//         });
//         router.push('/assessmentList');
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: res.data?.error || "Something went wrong",
//         });
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "An error occurred while processing your request.",
//       });
//       console.error("API call failed:", error);
//     }
//   };

//   return (
//     <Container
//       component="main"
//       maxWidth="xs"
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         padding: 2,
//       }}
//     >
//       <Paper elevation={3} sx={{ padding: 3, width: "100%", borderRadius: 2 }}>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             maxHeight: "80vh",
//             overflowY: "auto",
//           }}
//         >
//           <Typography variant="h4" align="center" gutterBottom>
//             {id ? "Update Quiz" : "Create Quiz"}
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: "100%" }}>
//             <TextField
//               label="Quiz Title"
//               fullWidth
//               margin="normal"
//               {...register("title", { required: "Title is required" })}
//               error={!!errors.title}
//               helperText={errors.title ? errors.title.message : ""}
//             />
//             <TextField
//               label="Description"
//               fullWidth
//               margin="normal"
//               multiline
//               rows={4}
//               {...register("description", { required: "Description is required" })}
//               error={!!errors.description}
//               helperText={errors.description ? errors.description.message : ""}
//             />
//             <TextField
//               label="Course ID"
//               fullWidth
//               margin="normal"
//               type="number"
//               {...register("courseId", { required: "Course ID is required" })}
//               error={!!errors.courseId}
//               helperText={errors.courseId ? errors.courseId.message : ""}
//             />
//             <Typography variant="h6" sx={{ marginTop: 2 }}>
//               Questions
//             </Typography>
//             {fields.map((field, index) => {
//               const { fields: optionFields, append: appendOption, remove: removeOption } = useFieldArray({
//                 control,
//                 name: `questions.${index}.options`,
//               });

//               return (
//                 <Box key={field.id} sx={{ marginBottom: 2 }}>
//                   <TextField
//                     fullWidth
//                     margin="normal"
//                     label={`Question ${index + 1}`}
//                     {...register(`questions.${index}.text`, { required: "Question text is required" })}
//                     error={!!errors.questions?.[index]?.text}
//                     helperText={errors.questions?.[index]?.text ? errors.questions[index].text.message : ""}
//                   />
//                   <TextField
//                     label="Status"
//                     fullWidth
//                     margin="normal"
//                     select
//                     {...register(`questions.${index}.status`, { required: "Status is required" })}
//                     error={!!errors.questions?.[index]?.status}
//                     helperText={errors.questions?.[index]?.status ? errors.questions[index].status.message : ""}
//                   >
//                     <option value="active">Active</option>
//                     <option value="inactive">Inactive</option>
//                   </TextField>
//                   <Typography variant="h6" sx={{ marginTop: 1 }}>
//                     Options
//                   </Typography>
//                   {optionFields.map((optionField, optionIndex) => (
//                     <Box key={optionField.id} sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
//                       <TextField
//                         fullWidth
//                         margin="normal"
//                         label={`Option ${optionIndex + 1}`}
//                         {...register(`questions.${index}.options.${optionIndex}.text`, { required: "Option text is required" })}
//                         error={!!errors.questions?.[index]?.options?.[optionIndex]?.text}
//                         helperText={errors.questions?.[index]?.options?.[optionIndex]?.text ? errors.questions[index].options[optionIndex].text.message : ""}
//                       />
//                       <IconButton onClick={() => removeOption(optionIndex)} sx={{ marginLeft: 2 }}>
//                         <RemoveCircleOutline />
//                       </IconButton>
//                     </Box>
//                   ))}
//                   <Button
//                     variant="outlined"
//                     onClick={() => appendOption({ text: "" })}
//                     fullWidth
//                     sx={{ marginTop: 1 }}
//                   >
//                     <AddCircleOutline /> Add Option
//                   </Button>
//                   <IconButton onClick={() => remove(index)} sx={{ marginLeft: 2 }}>
//                     <RemoveCircleOutline />
//                   </IconButton>
//                 </Box>
//               );
//             })}
//             <Button
//               variant="outlined"
//               onClick={() => append({ text: "", options: [], status: 'active' })} // Default status
//               fullWidth
//               sx={{ marginTop: 2 }}
//             >
//               <AddCircleOutline /> Add Question
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               type="submit"
//               fullWidth
//               sx={{ marginTop: 2 }}
//             >
//               {id ? "Update Quiz" : "Create Quiz"}
//             </Button>
//           </Box>
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default CreateAssessment;
