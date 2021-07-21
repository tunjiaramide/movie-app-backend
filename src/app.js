const express = require('express')
const app = express();
const movieRoute = require('./routes/movieRoute');

app.use('/api/movies', movieRoute);

module.exports = app;