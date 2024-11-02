const express = require('express');
const router = express.Router();
const Faculty = require('../models/faculty');

// Get all faculty
router.get('/', async (req, res) => {
  try {
    const faculty = await Faculty.find();
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create faculty
router.post('/', async (req, res) => {
  const faculty = new Faculty({
    name: req.body.name,
    id: req.body.id,
    age: req.body.age,
  });

  try {
    const newFaculty = await faculty.save();
    res.status(201).json(newFaculty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
