var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/api/movies');


router.get('/movies', moviesCtrl.getAllMovies);
router.get('/movies/:id', moviesCtrl.getOneMovie);
router.post('/movies', moviesCtrl.createMovie);
router.delete('/movies/:id', moviesCtrl.deleteMovie);
router.put('/movies/:id', moviesCtrl.updateMovie);


module.exports = router;