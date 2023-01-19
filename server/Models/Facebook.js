import mongoose from "mongoose";

const facebookSchema = new mongoose.Schema({
    title:{
        type: String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    image:{
        type:Object,
        required:true
    }
},{timestamps: true})

export default mongoose.model("FaceBook", facebookSchema)