import express from 'express';
import { get } from 'mongoose';
import { storeRecentSearchedCities } from '../controllers/userController';

const userRoutes = express.Router();

userRoutes.get('/',protect, getUserData);
userRoutes.postt('/store-recent-search',protect, storeRecentSearchedCities );

export default userRoutes;