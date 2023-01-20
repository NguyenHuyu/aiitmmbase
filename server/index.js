import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"

import FormRoutes from "./Routes/forms.js"
import EventRoutes from "./Routes/events.js"
import FacebookRoutes from "./Routes/facebook.js"

const app = express()
const MONGO = "mongodb+srv://adminminhhuy:6OXhoYjMGThcw5wj@cluster0.shegu6d.mongodb.net/db_Aiit"

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())


mongoose.connect(MONGO,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

app.use("/api/contacts", FormRoutes)
app.use("/api/events", EventRoutes)
app.use("/api/facebooks", FacebookRoutes)

app.listen(5000,()=>{
    console.log("Server is runing port 5000")
})