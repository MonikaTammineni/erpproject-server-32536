const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
