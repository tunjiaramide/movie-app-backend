const express = require('express')
const app = express();
const movieRoute = require('./routes/movieRoute');
const userRoute = require('./routes/userRoute')

app.use('/api/movies', movieRoute);
app.use('/api/auth', userRoute);

module.exports = app;