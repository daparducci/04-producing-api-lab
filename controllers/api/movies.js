const Movies = require('../../models/movie');

module.exports = {
    getAllMovies,
    getOneMovie,
    createMovie,
    deleteMovie,
    updateMovie
};

function updateMovie (req, res) {
    Movies.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(function(movie) {
        res.status(200).json(movie)
    })
}

function deleteMovie(req, res) {
    Movies.findByIdAndDelete(req.params.id)
    .then(function(movie) {
        res.status(200).json(movie);
    })
}

function createMovie(req, res) {
    Movies.create(req.body)
    .then(function(movie) {
        res.status(201).json(movie);
    })
}

function getOneMovie(req, res) {
    Movies.findById(req.params.id)
    .then(function(movie) {
        res.status(200).json(movie);
    })
}
function getAllMovies(req, res) {
    Movies.find({})
    .populate('cast').then(function(movies) {
        res.status(200).json(movies);
    });
}


