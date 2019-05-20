const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
//http://localhost:5000/auth/google/callback
//mongodb+srv://admin:admin@guidents-ci9ky.mongodb.net/test?retryWrites=true
