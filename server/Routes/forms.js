import express from "express"
import { deleteForm, getForm, postForm } from "../Controllers/form.js"

const router = express.Router()


router.post("/postform", postForm)
router.get("/getform", getForm)
router.delete("/deleteform/:id", deleteForm)


export default router