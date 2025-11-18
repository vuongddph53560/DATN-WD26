import express from "express";
import { requireAuth } from "@clerk/express";
import {
  checkAvailabilityAPI,
  createBooking,
  getHotelBookings,
  getUserBookings
} from "../controllers/bookingController.js";

const bookingRouter = express.Router();

// Test route
bookingRouter.get('/', (req, res) => {
  return res.json({ ok: true, message: 'bookings route is working' });
});

bookingRouter.post('/check-availability', checkAvailabilityAPI);
bookingRouter.post('/book', requireAuth(), createBooking);
bookingRouter.get('/user', requireAuth(), getUserBookings);
bookingRouter.get('/hotel', requireAuth(), getHotelBookings);

export default bookingRouter;
