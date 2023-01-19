import express from "express"

const router = express.Router()
import { deleteFace, getFace, postFace } from "../Controllers/facebook.js"

router.post("/postface" , postFace)
router.get("/getface", getFace)
router.delete("/deleteface/:id", deleteFace)

export default router