import mongoose from "mongoose";

const booksesSchema = new mongoose.Schema({
    bookName:String,
    url:String,
    isBying:Boolean,
    description:String,
    description:String
})

const bookses = new mongoose.model('bookses',booksesSchema)

export default bookses