const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
	courseName: String,
	preReqs: [String]

});

module.exports = courseSchema;
