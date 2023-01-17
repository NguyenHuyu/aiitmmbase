import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import FormRoutes from "./Routes/forms.js"

const app = express()
const MONGO = "mongodb+srv://adminhuyu:YTMkqaKWZMaWQjbG@cluster5.2t7adyz.mongodb.net/db_Aiit"

app.use(express.json())
app.use(cors())


mongoose.connect(MONGO,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})


app.use("/api/form", FormRoutes)


app.listen(5000,()=>{
    console.log("Server is runing port 5000")
})