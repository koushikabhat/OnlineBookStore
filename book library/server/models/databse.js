const mongoose = require('mongoose')


const librarySchema  = new mongoose.Schema({
    bookId: { type: String, required: true, unique: true },
    bookname: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true },
    isAvailable : { type : Boolean, required : true}
  
})

const librarydb = mongoose.model('librarydb', librarySchema)


module.exports = librarydb; 