const mongoose = require('mongoose');
const { Schema } = mongoose;
const CourseSchema = require('./course');

const majorSchema = new Schema({
	majorName: String,
	listOfCourses: [CourseSchema],
	_user: [{type: Schema.Types.ObjectId, ref: 'User'}] 

});

mongoose.model('majors', majorSchema);
