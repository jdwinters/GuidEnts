const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/course');
require('./models/major');
require('./models/user');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/academicRoutes')(app);
require('./routes/authRoutes')(app);

if(process.env.NODE_ENV === 'production'){
	// express will serve up production assets
	// main.js or main.css file
	app.use(express.static('client/build'));

	//express will serve up the index.html file
	//if it does not know the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
