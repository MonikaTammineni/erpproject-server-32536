const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
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

const Faculty = mongoose.model('Faculty', facultySchema);
module.exports = Faculty;
