const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleID: String,
	givenName: String,
	familyName: String,
	uniEmail: String,
	expectedGraduation: Date,
	isAdviser: { type: Boolean, default: false },
	numberOfMajorGraphs: { type: Number, default: 0}
});

mongoose.model('users', userSchema);
