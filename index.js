const express = require('express');
const mongoose = require('mongoose');
const User = require('/models/user'); // Correct path to user model
const studentRoutes = require('/routes/student');
const facultyRoutes = require('/routes/faculty');
const courseRoutes = require('/routes/course');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use('/api/student', studentRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/course', courseRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
