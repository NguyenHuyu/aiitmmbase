import  express from 'express'
import { deleteEvent, getEvent, getEventDetails, postEvent } from '../Controllers/event.js'

const router = express.Router()


router.get("/getevent", getEvent )
router.get("/getevent/find/:id", getEventDetails )
router.post("/postevent", postEvent )
router.delete("/deleteevent/:id", deleteEvent)


export default router   