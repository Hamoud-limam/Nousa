import mongoose from "mongoose";

const videosSchema = new mongoose.Schema({
    url:String,
    imgUrl:String
})

const videos = new mongoose.model('videos',videosSchema)

export default videos