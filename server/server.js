import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import talab from "./talab.js"
import cors from "cors"

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
const port = process.env.PORT;

const db = mongoose.connect('process.env.DB');
db.then(()=>{
    console.log('connected to db')
})
db.catch((error)=>{  
    console.log(error)
})

app.post("/sendTalab", async (req,res)=>{
    try{
        const {name,phone,place,bookname} = req.body;
        const talabData = new talab({name,phone,place,bookname})
        talabData.save()
        console.log("new talab")

    }
    catch(err){
        console.log(err)
    }

    
})

app.listen(port,()=>{
    console.log(` i am listening at port ${port}`)
})
