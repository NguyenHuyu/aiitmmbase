import bcrypt from "bcrypt"
import User from "../Models/User.js"
import jwt from "jsonwebtoken"

export const register = async(req, res , next) =>{
        try {
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(req.body.password, salt)
            const newUser = await User({
                ...req.body,
                password:hash
            })
            await newUser.save()
            res.status(200).json("User has created")
        } catch (error) {
            next(error)
            }
}


export const login = async(req, res , next) =>{
    try {
        const user = await User.findOne({
            username:req.body.username
        })
        if(!user)
            return res.status(403).json("User not found...")
        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isCorrect)
            return res.status(404).json("User not match...")
        const token =  jwt.sign({
            id:user._id
        },process.env.JWT)
        const { password, ...others} = user._doc
        res.cookie("access_token", token, {
            httpOnly:true
        }).status(200).json(others)
    } catch (error) {
        next(error)
    }
}


export const logout = async(req, res, next)=>{
    res.clearCookie("access_token")
    res.status(200).json("Logout!")
}