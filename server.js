require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongooseUrl = process.env.DATABASE_URL

mongoose.connect(mongooseUrl)
const PORT = process.env.PORT || 3007;
const Book = require('./models/book')

const app = express();
app.use(cors());

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.get('/books', async (request, response) => {

  const bookData = await Book.find({});
  response.status(200).json(bookData)

})

app.delete('/books/:id', async (request, response) => {
  const bookId = request.params.id;
  console.log('bookID', bookId)
  // try {
    await Book.findByIdAndDelete(bookId);

    response.status(200).json({ message: 'Book deleted successfully'})
  // } catch (error) {
  //   response.status(500).json({ error: 'Internal server error'});
  // }
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));



// step one: type out everything from jb server.js file 
// step two: look for the first place that says cats, figure out what its doing, and make it make sense for books
// step three: look for the next place that says cats, figure out what its doing, and make it make sense for books
// step four: remember to make the books.js file inside of the models folder
// step five: create  a .env file that matches jb .env demo 