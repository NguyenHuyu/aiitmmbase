import Event from "../Models/Event.js"
import cloudinary from "../Utils/cloudinary.js"

export const postEvent = async(req, res) => {
    const {image, title, desc, contents } = req.body
    try {
        if(image){
            const uploadRes = await cloudinary.uploader.upload(image,{
                upload_preset: "image-events"
            })
            if(uploadRes){
               const events = new Event({
                    title, desc, contents,image:uploadRes
               })
               const savedEvent = await events.save()
               res.status(200).send(savedEvent)
            }
        }
    } catch (error) {
        res.status(404).send(error)
    }

}


export const getEvent  = async(req, res)=>{
    try {
        const events =  await Event.find()
        res.status(200).json(events)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const getEventDetails  = async(req, res)=>{
    try {
        const event =  await Event.findById(req.params.id)
        res.status(200).json(event)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const deleteEvent  = async(req, res, next)=>{
    try {
        const deletedItem = await Event.findByIdAndDelete(req.params.id) 
        res.status(200).send("Đã xóa!")
        res.status(200).json(deletedItem)
    } catch (error) {
        next()
    }
}