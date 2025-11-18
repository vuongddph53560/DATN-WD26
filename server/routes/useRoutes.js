import express from "express";
import { requireAuth } from "@clerk/express";
import {
  getUserData,
  storeRecentSearchedCities
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get('/', getUserData);
userRouter.post('/store-recent-search', requireAuth(), storeRecentSearchedCities);

export default userRouter;
