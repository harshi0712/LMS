
import AdminDashboard from './AdminDashboard';
import InstructorDashboard from './InstructorDashboard';
import StudentDashboard from './StudentDashboard';
import useAuth from '../../hooks/useAuth';

const AdminDashboardPage: React.FC = () => {

    const { role } = useAuth();
    
    return (
        <div>
            {role === 'admin' && <AdminDashboard/>}
            {role === 'instructor' && <InstructorDashboard/>}
            {role === 'student' && <StudentDashboard/>}
        </div>
    )
};

export default AdminDashboardPage;
