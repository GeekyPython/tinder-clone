const {Schema,model} = require('mongoose');
// import mongoose from 'mongoose';

const cardSchema = Schema({
    name: String,
    img: String
});

module.exports = model('cards',cardSchema);