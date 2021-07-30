const router = require('express').Router();
const Movie = require('../models/Movie');
const auth = require('../auth');


// Create movies, with jwt access
router.post('/', auth, async(req, res) => {
    const newMovie = new Movie(req.body);
    try {
        const savedMovie = await newMovie.save()
        res.status(200).json(savedMovie);
    }catch(err) {
        res.status(500).json(err)
    }
})

// get all movies
router.get('/', async(req, res) => {
    const genre = req.query.genre;
    const country = req.query.country
    try {
        let movies;
        if(genre){
            movies = await Movie.find({ genre });
        } else if(country) {
            movies = await Movie.find({ country });
        } else {
            movies = await Movie.find();
        }
        res.status(200).json(movies);
    } catch(err) {
        res.status(500).json(err)
    } 
})

// get individual movies
router.get('/:id', async(req, res) => {
    const movieId= req.params.id
    try {
        const movie = await Movie.find({ _id: movieId });
        res.status(200).json(movie);
    } catch(err) {
        res.status(500).json(err)
    } 
})






module.exports = router;


