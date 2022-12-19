import express from "express";
import Hotel from '../models/exercise.model.js';
import {createHotel, getHotels, updateHotel, deleteHotel, getHotel} from '../controllers/hotel.js';
const router = express.Router();

router.get("/", getHotels);
router.post("/", createHotel);

router.put("/:id", updateHotel);

router.delete("/:id", deleteHotel);

router.get("/:id", getHotel);
export default router