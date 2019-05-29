const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleID: String,
	givenName: String,
	familyName: String,
	uniEmail: String,
	isAdviser: Boolean

});

mongoose.model('users', userSchema);
