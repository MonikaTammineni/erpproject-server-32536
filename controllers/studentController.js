const Student = require('../models/student');

exports.createStudent = async (req, res) => {
    const { name, id, age } = req.body;
    try {
        const student = new Student({ name, id, age });
        await student.save();
        res.redirect('/api/student/register');  // Redirect back to the form after saving
    } catch (error) {
        res.status(500).send('Error creating student');
    }
};

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.render('studentList', { students });
    } catch (error) {
        res.status(500).send('Error fetching students');
    }
};
