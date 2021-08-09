const mongoose = require('mongoose');
<<<<<<< HEAD
// import mongoose from 'mongoose';
=======
>>>>>>> 75fb11f9ecc67c69d8b40d962bead042348d6250

const cardSchema = mongoose.Schema({
    name: String,
    img: String
});

module.exports = mongoose.model('cards',cardSchema);