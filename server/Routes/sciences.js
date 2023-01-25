import express from "express"
import { deleteScience, getScience, getScienceDetails, postScience } from "../Controllers/science.js"

const router = express.Router()

router.post("/postscience" , postScience)
router.get("/getscience", getScience)
router.get("/getscience/find/:id", getScienceDetails )
router.delete("/deletescience/:id", deleteScience)

export default router