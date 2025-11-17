import express from 'express';
import { get } from 'mongoose';
import { getUserData, storeRecentSearchedCities } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const userRoutes = express.Router();

userRoutes.get('/',protect, getUserData);
userRoutes.post('/store-recent-search',protect, storeRecentSearchedCities );

export default userRoutes;