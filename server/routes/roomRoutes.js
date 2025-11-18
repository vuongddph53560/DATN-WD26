import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { requireAuth } from "@clerk/express";
import {
  createRoom,
  getOwnerRooms,
  getRooms,
  toggleRoomAvailability
} from "../controllers/roomController.js";

const roomRouter = express.Router();

roomRouter.post('/', requireAuth(), upload.array("images", 4), createRoom);
roomRouter.get('/', getRooms);
roomRouter.get('/owner', requireAuth(), getOwnerRooms);
roomRouter.get('/toggle-availability', requireAuth(), toggleRoomAvailability);

export default roomRouter;
