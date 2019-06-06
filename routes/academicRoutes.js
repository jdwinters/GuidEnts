const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Major = mongoose.model('majors');

module.exports = app => {
	app.post('/api/majors', requireLogin, (req, res) => {
		console.log(req.body);
		const {majorName,
		listOfCourses} = req.body;

		const major = new Major({
			majorName,
			listOfCourses: listOfCourses.split(',').map(courseName => ({ courseName: courseName.trim() })),
			_user: req.user.id
		});
	});
};
