import express from 'express';
import "dotenv/config.js"
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './configs/db.js';
import connectCloudinary from './configs/cloudinary.js';
import { clerkMiddleware } from '@clerk/express';

connectDB()
connectCloudinary();

const app = express()
app.use(cors())

//middleware
app.use(express.json())
app.use(clerkMiddleware())

//goi api clerk webhook
import clerWebhooks from './controllers/clerkWebhooks.js';
import hotelRouter from './routes/hotelRoutes.js';
import roomRouter from './routes/roomRoutes.js';

app.use("/api/clerk", clerWebhooks);

app.get('/', (req, res)=> res.send("API is working"))

app.use('/api/hotels',hotelRouter)
app.use('/api/rooms',roomRouter)

app.get('/', (req, res) => res.send('api is running'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
);