import Form from "../Models/FormContact.js"

export const postForm = async(req, res) => {
    const postform = new Form({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        contents:req.body.contents
    })
    try {
        await postform.save()
        res.status(200).json("Add")
    } catch (error) {
        console.log(error)
    }
    
}
export const getForm = async(req, res) => {
    try {
        const getForm = await Form.find()
        res.status(200).json(getForm)
    } catch (error) {
        console.log(error)
    }
}

export const deleteForm = async(req, res)=>{
    const id = req.params.id
    await Form.findByIdAndDelete(id)    
}