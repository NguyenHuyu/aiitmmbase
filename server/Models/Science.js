import mongoose from "mongoose";

const scienceSchema = new mongoose.Schema({
    image:{
        type:Object,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
})

export default mongoose.model("Science" , scienceSchema)
