import express from "express"
import { deleteForm, getForm, postForm } from "../Controllers/form.js"

const router = express.Router()


router.post("/postForm", postForm)
router.get("/getForm", getForm)
router.delete("/deleteForm/:id", deleteForm)

export default router