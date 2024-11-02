const express = require('express');
const router = express.Router();
const Course = require('../models/course');

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a course
router.post('/', async (req, res) => {
  const course = new Course({
    name: req.body.name,
    id: req.body.id,
    age: req.body.age,
  });

  try {
    const newCourse = await course.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
