const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MovieSchema = new Schema({
    title: { type: String, required: true},
    genre: { type: String, required: true},
    country: { type: String, required: true},
    minutes: { type: Number, required: true},
    description: { type: String, required: true},
    youtube: { type: String, required: true},
    poster: { type: String},
    ratings: { type: Number},
    inTheaters: { type: Boolean, default: true}
}, {timestamps: true})

module.exports = mongoose.model('Movie', MovieSchema);