const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(new GoogleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
		User.findOne({ googleID: profile.id })
		 .then((existingUser) => {
			 if(existingUser){
				 // we already have a record with given profile ID
				 done(null, existingUser);
			 } else{
				 // we don't have a user record, make new one
				 new User({ googleID: profile.id })
				 	.save()
				 	.then(user => done(null, user));
			 }
		 });
	})
);
