import express from "express";
import { requireAuth } from "@clerk/express";
import { registerHotel } from "../controllers/hotelController.js";

const hotelRouter = express.Router();

hotelRouter.get('/', (req, res) => {
  res.json({ ok: true });
});

hotelRouter.post('/register', requireAuth(), registerHotel);

export default hotelRouter;
