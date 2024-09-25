import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchCourses, deleteCourseById } from '../../service/course';

const SearchBar: React.FC<{ setCourses: (courses: any[]) => void }> = ({ setCourses }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState('');

  // Debounce the search function
  useEffect(() => {
    const handler = setTimeout(async() => {
      if (query.trim() === '') {
        // If the query is empty, fetch all courses
        const fetchAllCourses = async () => {
          try {
            const res = await axios.get(`http://localhost:3002/course/getAll`);
            console.log(res);
            setCourses(res.data);
            setResults(res.data);
            setError('');
          } catch (err) {
            setError('An unexpected error occurred while fetching all courses.');
          }
        };
        fetchAllCourses();

        // const fetchedCourses = await fetc();

        return; // Skip the rest of the function
      }

      const fetchCourses = async () => {
        try {
          const response = await axios.get(`http://localhost:3002/course/searchCourse`, {
            params: { title: query },
          });
          console.log(response);
          setCourses(response.data);
          setResults(response.data);
          setError('');
        } catch (err) {
          if (axios.isAxiosError(err) && err.response?.status === 404) {
            setError('No courses found starting with the given letters.');
            setResults([]);
          } else {
            setError('An unexpected error occurred.');
          }
        }
      };

      fetchCourses();
    }, 300); // Adjust the delay time as needed (300ms here)

    return () => {
      clearTimeout(handler); // Cleanup the timeout on unmount or when query changes
    };
  }, [query, setCourses]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div style={{ margin: '20px', position: 'relative' }}>
      <input
        type="text"
        placeholder="Search for courses..."
        value={query}
        onChange={handleChange}
        style={{ padding: '10px', width: '300px', marginRight: '10px' }}
      />
      {/* Display no courses message inside the search bar */}
      {results.length === 0 && !error && query.trim() === '' && (
        <span style={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'gray',
          pointerEvents: 'none',
        }}>
          No courses available.
        </span>
      )}
    </div>
  );
};

export default SearchBar;
