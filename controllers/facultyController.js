const Faculty = require('../models/faculty');

exports.createFaculty = async (req, res) => {
    const { name, id, age } = req.body;
    try {
        const faculty = new Faculty({ name, id, age });
        await faculty.save();
        res.redirect('/api/faculty/register'); 
    } catch (error) {
        res.status(500).send('Error creating faculty');
    }
};

exports.getFaculties = async (req, res) => {
    try {
        const faculties = await Faculty.find();
        res.render('facultyList', { faculties });
    } catch (error) {
        res.status(500).send('Error fetching faculties');
    }
};
