import Facebook from "../Models/Facebook.js";
import cloudinary from "../Utils/cloudinary.js";


export const postFace =  async(req, res)=>{
    const {title, desc, image } = req.body
    try {
        if(image){
            const uploadRes = await cloudinary.uploader.upload(image,{
                upload_preset: "image-facebooks"
            })
            if(uploadRes){
               const faces = new Facebook({
                    title, desc,image:uploadRes
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

export const getFace =  async(req, res)=>{
    try {
        const faces =  await Facebook.find()
        res.status(200).json(faces)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const deleteFace =  async(req, res)=>{
    try {
        const deletedItem = await Facebook.findByIdAndDelete(req.params.id) 
        res.status(200).send("Đã xóa!")
        res.status(200).json(deletedItem)
    } catch (error) {
        next()
    }
}