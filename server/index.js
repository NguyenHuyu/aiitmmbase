import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import FormRoutes from "./Routes/forms.js"
import EventRoutes from "./Routes/events.js"
import FacebookRoutes from "./Routes/facebook.js"
import ScienceRoutes from "./Routes/sciences.js"
import AuthRoutes from "./Routes/auth.js"


import { createProxyMiddleware } from 'http-proxy-middleware'
const app = express()
const MONGO = "mongodb+srv://adminminhhuy:6OXhoYjMGThcw5wj@cluster0.shegu6d.mongodb.net/db_Aiit"
dotenv.config()

app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({limit: '500mb'}));
app.use(bodyParser.json())
app.use(cookieParser())


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
app.use("/api/sciences", ScienceRoutes)

app.use("/api/auth", AuthRoutes)


app.listen(5000,()=>{
    console.log("Server is runing port 5000")
})