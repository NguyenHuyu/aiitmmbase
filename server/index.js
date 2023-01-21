import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"

import FormRoutes from "./Routes/forms.js"
import EventRoutes from "./Routes/events.js"
import FacebookRoutes from "./Routes/facebook.js"

const app = express()
const MONGO = "mongodb+srv://adminminhhuy:6OXhoYjMGThcw5wj@cluster0.shegu6d.mongodb.net/db_Aiit"


app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({limit: '500mb'}));
app.use(bodyParser.json())

const corsOptions ={    
    origin:true, 
    credentials:true,           
    optionSuccessStatus:200,

}
app.use(cors(corsOptions));


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