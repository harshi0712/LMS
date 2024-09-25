import express, { Request, Response } from 'express';

const data = [
  { id: 1, name: 'Introduction to Programming' },
  { id: 2, name: 'Data Structures and Algorithms' },
  { id: 3, name: 'Web Development Basics' },
  { id: 4, name: 'Advanced JavaScript' },
  { id: 5, name: 'Machine Learning Fundamentals' },
  { id: 6, name: 'Database Management Systems' },
  { id: 7, name: 'Introduction to Python' },
  { id: 8, name: 'React.js Essentials' },
  { id: 9, name: 'Cloud Computing and DevOps' },
  { id: 10, name: 'Mobile App Development with Flutter' },
  { id: 11, name: 'Data Science and Analytics' },
  { id: 12, name: 'Game Development with Unity' },
  { id: 13, name: 'Cybersecurity Basics' },
  { id: 14, name: 'Introduction to Artificial Intelligence' },
  { id: 15, name: 'Full Stack Development' },
  // Add more varied course names as needed
];

const searchRouter = express.Router();

searchRouter.get('/search', (req: Request, res: Response) => {
  const { q } = req.query;

  // Check if the query is valid and not empty
  if (!q || typeof q !== 'string' || q.trim() === '') {
    return res.status(200).json([]); // Return an empty array for invalid or empty queries
  }

  // Convert the query to lowercase for case-insensitive comparison
  const query = q.toLowerCase();

  // Filter courses that start with the query string
  const filteredData = data.filter(item =>
    item.name.toLowerCase().startsWith(query)
  );

  // If no courses match the query, return a message
  if (filteredData.length === 0) {
    return res.status(404).json({ message: 'No courses found starting with the given letters.' });
  }

  // Return the matched courses
  res.status(200).json(filteredData);
});

export default searchRouter;
