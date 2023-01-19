import mongoose from "mongoose";

const eventSchema =  new mongoose.Schema({
    image:{
        type:Object,
    },
    title:{
        type:String,
    },
    desc:{
        type:String,
    },
    contents:{
        type:String,
    }
},{ timestamps:true })


export default mongoose.model("Event", eventSchema)

