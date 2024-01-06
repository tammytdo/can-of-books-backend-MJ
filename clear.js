'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const Book = require('./models/book.js');

async function clear() {
    await mongoose.connect(process.env.DATABASE_URL);
    await Book.deleteMany({});
    console.log('Books deleted');
    mongoose.disconnect(); 
}

clear();