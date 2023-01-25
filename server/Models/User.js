import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    admin:{
        type:Boolean
    }
})

export default mongoose.model("User", userSchema)