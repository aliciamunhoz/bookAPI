const mongoose = require('mongoose');

const titleRequired = [true, 'The book must have a name'];
const authorRequired = [true, 'The author must have a name'];
const pagesRequired = [true, 'The book must have a number of pages'];

const bookSchema = new mongoose.Schema({
    title: {
        required: titleRequired,
        type: String
    },
    author: {
        required: authorRequired,
        type: String
    },
    publisher: {
        required: false,
        type: String
    },
    pages: {
        required: pagesRequired,
        type: Number
    }
})

module.exports = mongoose.model('Data', bookSchema)