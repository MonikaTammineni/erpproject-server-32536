const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, 'public')));

const students = [
  { name: 'Monika', id: '32536', branch: 'CSE', year: 2 },
  { name: 'Sri', id: '30001', branch: 'CSE', year: 2 },
  { name: 'Riya', id: '30002', branch: 'CSE', year: 2 },
  { name: 'Ramya', id: '30003', branch: 'CSE', year: 2 },
  { name: 'IDK', id: '30001', branch: 'CSE', year: 2 }
];

const faculty = [
  { name: 'Nithya', id: '1224', dept: 'CSE-H', designation: 'Professor' },
  { name: 'Dr. Murali Mohan', id: '3340', dept: 'IOT', designation: 'Professor' },
  { name: 'Dr. Monika', id: '3318', dept: 'ECE', designation: 'Professor' }
];

const courses = [
  { coursecode: '23SCS06EF', coursetitle: 'MSWD', ltps: '0-0-7-6', credits: '4' }
];

const feedback = [
  { id: 1, student: 'Monika', message: 'Good' },
  { id: 2, student: 'Hc', message: 'Average' }
];

app.get('/student', (req, res) => {
  res.json(students);
});

app.get('/faculty', (req, res) => {
  res.json(faculty);
});

app.get('/courses-ltps', (req, res) => {
  res.json(courses);
});

app.get('/feedback', (req, res) => {
  res.json(feedback);
});

app.get('/doc1', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'doc1.pdf');  
  res.sendFile(filePath);
});

app.get('/profile', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'profile.jpg'); 
  res.sendFile(filePath);
});

app.get('*', (req, res) => {
  res.send('Route not found.');
});

app.get('/', (req, res) => {
  res.send('WELCOME!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

