import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.send('hello')
})

app.listen(port,()=>{
    console.log(` i am listening at port ${port}`)
})