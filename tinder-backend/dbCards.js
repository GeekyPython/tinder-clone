const mongoose = require('mongoose');
// import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    img: String
});

module.exports = mongoose.model('cards',cardSchema);