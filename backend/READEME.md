 
##  Folder Structure
lms-project/
│
├── backend/                        # Backend folder
│   ├── src/                        # Source files for the backend
│   │   ├── controllers/            # Controllers handle the request logic
│   │   │   ├── authController.ts         # Authentication (login, signup) controller
│   │   │   ├── userController.ts         # User management controller
│   │   │   ├── courseController.ts       # Course management controller
│   │   │   ├── enrollmentController.ts   # Enrollment management controller
│   │   │   └── assessmentController.ts   # Assessment and grading controller
│   │   ├── models/                 # Mongoose models for MongoDB
│   │   │   ├── User.ts                   # User model with roles
│   │   │   ├── Course.ts                 # Course model
│   │   │   ├── Enrollment.ts             # Enrollment model (links users to courses)
│   │   │   ├── Module.ts                 # Module model (course modules)
│   │   │   ├── Assessment.ts             # Assessment model (quizzes, assignments)
│   │   │   └── Submission.ts             # Submission model (student submissions)
│   │   ├── routes/                 # API routes
│   │   │   ├── authRoutes.ts             # Authentication routes (login, signup)
│   │   │   ├── userRoutes.ts             # User routes (CRUD operations)
│   │   │   ├── courseRoutes.ts           # Course routes (course management)
│   │   │   ├── enrollmentRoutes.ts       # Enrollment routes (enroll/unenroll)
│   │   │   └── assessmentRoutes.ts       # Assessment routes (create, grade, submit)
│   │   ├── services/               # Business logic or service layer
│   │   │   ├── authService.ts            # Authentication logic (JWT, password hashing)
│   │   │   ├── userService.ts            # User-related logic (CRUD, role validation)
│   │   │   ├── courseService.ts          # Course-related logic (CRUD operations)
│   │   │   ├── enrollmentService.ts      # Enrollment-related logic (course enrollment)
│   │   │   └── assessmentService.ts      # Assessment-related logic (grading, feedback)
│   │   ├── middlewares/            # Express middlewares
│   │   │   ├── authMiddleware.ts         # JWT authentication middleware
│   │   │   ├── roleMiddleware.ts         # Role-based access control (RBAC)
│   │   │   └── errorHandler.ts           # Global error handler middleware
│   │   ├── utils/                  # Utility functions
│   │   │   ├── logger.ts                 # Logger utility for logging errors and info
│   │   │   ├── emailService.ts           # Utility for sending emails (e.g., password reset)
│   │   │   └── validators.ts             # Input validation functions (using Joi or similar)
│   │   ├── config/                 # Configuration files
│   │   │   ├── database.ts               # Database connection setup with Mongoose
│   │   │   └── env.ts                    # Environment variables setup
│   │   ├── app.ts                  # Express app setup and middleware
│   │   └── server.ts               # Server initialization and connection to DB
│   ├── .env                         # Environment variables (API keys, DB URIs)
│   ├── package.json                 # Dependencies and scripts
│   └── tsconfig.json                # TypeScript configuration
│
└── frontend/                       # Frontend folder
    ├── public/                     # Public assets (images, fonts, etc.)
    ├── src/                        # Source files for the frontend
    │   ├── components/             # Reusable components
    │   │   ├── Navbar.tsx                # Navigation bar component
    │   │   ├── Sidebar.tsx               # Sidebar for user navigation
    │   │   ├── CourseCard.tsx            # Component to display course info
    │   │   ├── EnrollmentForm.tsx        # Form for course enrollment
    │   │   └── AssessmentForm.tsx        # Form for submitting assessments
    │   ├── pages/                  # Next.js pages
    │   │   ├── _app.tsx                  # Custom App component
    │   │   ├── index.tsx                 # Homepage
    │   │   ├── login.tsx                 # Login page
    │   │   ├── signup.tsx                # Signup page
    │   │   ├── dashboard.tsx             # Dashboard page for all users
    │   │   ├── courses/                  # Course-related pages
    │   │   │   ├── index.tsx                  # Courses listing page
    │   │   │   ├── [id].tsx                   # Dynamic course page
    │   │   ├── enrollments/             # Enrollment-related pages
    │   │   │   ├── index.tsx                  # Enrollment management page
    │   │   ├── assessments/             # Assessment-related pages
    │   │   │   ├── index.tsx                  # Assessments listing page
    │   │   │   ├── [id].tsx                   # Dynamic assessment page
    │   ├── styles/                 # Global and component-specific styles
    │   │   ├── globals.css               # Global styles
    │   │   └── [component].module.css    # CSS Modules for components
    │   ├── services/               # API interaction and business logic
    │   │   ├── api.ts                    # Axios setup for API calls
    │   │   ├── authService.ts            # Authentication-related API calls
    │   │   ├── courseService.ts          # Course-related API calls
    │   │   ├── enrollmentService.ts      # Enrollment-related API calls
    │   │   └── assessmentService.ts      # Assessment-related API calls
    │   ├── contexts/               # Context API for global state management
    │   │   ├── AuthContext.tsx           # Authentication context (login state, etc.)
    │   │   ├── UserContext.tsx           # User context (user data, role, etc.)
    │   │   ├── CourseContext.tsx         # Course context (current course, etc.)
    │   │   └── ThemeContext.tsx          # Theme context (light/dark mode)
    │   ├── utils/                  # Utility functions
    │   │   ├── validate.ts                # Validation functions (e.g., email validation)
    │   │   ├── formatDate.ts              # Date formatting functions
    │   │   └── handleError.ts             # Error handling utility
    │   ├── hooks/                  # Custom React hooks
    │   │   ├── useAuth.ts                # Custom hook for authentication logic
    │   │   ├── useCourse.ts              # Custom hook for course logic
    │   │   └── useEnrollment.ts          # Custom hook for enrollment logic
    │   └── app.tsx                # Main App component for the frontend
    ├── .env                       # Environment variables (API URLs, etc.)
    ├── package.json               # Dependencies and scripts
    └── tsconfig.json              # TypeScript configuration
 
has context menu
6W3TzfEHvXrXKf1B password


mongodb://harshitashriwas:6W3TzfEHvXrXKf1B@<hostname>/?ssl=true&replicaSet=atlas-k5wo1v-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0

mongodb+srv://harshitashriwas:6W3TzfEHvXrXKf1B@cluster0.buebq.mongodb.net/