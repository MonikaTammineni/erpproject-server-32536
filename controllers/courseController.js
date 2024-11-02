const Course = require('../models/course');

exports.createCourse = async (req, res) => {
    const { name, id, age } = req.body;
    try {
        const course = new Course({ name, id, age });
        await course.save();
        res.redirect('/api/course/register');
    } catch (error) {
        res.status(500).send('Error creating course');
    }
};

exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.render('courseList', { courses });
    } catch (error) {
        res.status(500).send('Error fetching courses');
    }
};