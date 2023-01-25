import Science from "../Models/Science.js";
import cloudinary from "../Utils/cloudinary.js";

export const postScience =  async(req, res)=>{
    const {title, desc, image } = req.body
    try {
        if(image){
            const uploadRes = await cloudinary.uploader.upload(image,{
                upload_preset: "image-facebooks"
            })
            if(uploadRes){
               const faces = new Science({
                    title, desc, image:uploadRes
               })
               const savedFace = await faces.save()
               res.status(200).send(savedFace)
            }
        }
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
}

export const getScience =  async(req, res)=>{
    try {
        const faces =  await Science.find()
        res.status(200).json(faces)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const deleteScience =  async(req, res)=>{
    try {
        const deletedItem = await Science.findByIdAndDelete(req.params.id) 
        res.status(200).send("Đã xóa!")
        res.status(200).json(deletedItem)
    } catch (error) {
        next()
    }
}

export const getScienceDetails  = async(req, res)=>{
    try {
        const event =  await Science.findById(req.params.id)
        res.status(200).json(event)
    } catch (error) {
        res.status(404).json(error)
    }
}