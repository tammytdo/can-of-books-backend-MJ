const mongoose = require('mongoose');

const { Schema } = mongoose;

// const bookSchema = new Schema({
//   // title: {
//   //   type: String,
//   //   required: true
//   // },
//   // description: String,
//   // status: {
//   //   type: String,
//   //   required: true
//   // },
//   title: {type: String, required: true},
//   description: String,
//   status: {type: String, required: true},
  
// }); 

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  
});

// we are telling our mongoose database what every model of a book should llook like. it looks like the required data in the book schema. were storing this model definition in a new variable called Book.
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

