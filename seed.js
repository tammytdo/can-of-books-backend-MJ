require('dotenv').config();
const mongoose = require('mongoose');

const mongooseUrl = process.env.DATABASE_URL

const Book = require('./models/book');

async function seed() {
  await mongoose.connect(mongooseUrl)
  console.log('begin seeding books...')
  await Book.create({
    title: 'Book 1',
    description: 'Book 1 description',
    status: 'read'
  });

  await Book.create({
    title: 'Book 2',
    description: 'Book 2 description',
    status: 'read'
  });

  await Book.create({
    title: 'Book 3',
    description: 'Book 3 description',
    status: 'read'
  });

  mongoose.disconnect();
  console.log('finish seeding books...')
}

seed();