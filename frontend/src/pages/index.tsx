import { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <div>
      <h1>Welcome to the LMS</h1>
      <nav>
        <Link href="/courses">Courses</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
      </nav>
    </div>
  );
};

export default HomePage;
