const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id)
		.then(user => {
			done(null, user);
		});
});

passport.use(new GoogleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: '/auth/google/callback',
	proxy: true
}, async (accessToken, refreshToken, profile, done) => {
	console.log(profile);
	const existingUser = await User.findOne({ googleID: profile.id });
	if(existingUser){
		// we already have a record with given profile ID
		return done(null, existingUser);
	}
	var uEmail;
	// we don't have a user record, make new one
	if(profile._json.hd === 'ucsc.edu'){
		uEmail = profile._json.email;
	}else{
		uEmail = '';
	}
	const user = await new User({ googleID: profile.id, givenName: profile._json.given_name, familyName: profile._json.family_name, uniEmail: uEmail }).save();
	done(null, user);
	})
);
