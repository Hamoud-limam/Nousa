import mongoose from "mongoose";

const talabSchema = new mongoose.Schema({
    name:{type:String},
    phone:{type:String},
    note:{type:String},
    bookname:{type:String}
})

const talab = new mongoose.model("talabat",talabSchema)
export default talab