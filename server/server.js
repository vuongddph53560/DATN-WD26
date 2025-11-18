import express from 'express';
import "dotenv/config.js"
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express'
import connectDB from './configs/db.js';
import clerkWebhooks from './controllers/clerkWebhook.js';
import userRouter from './routes/useRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import hotelRouter from './routes/hotelRoutes.js';
import roomRouter from './routes/roomRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';


connectDB();
connectCloudinary();


const app = express()
app.use(cors())

//middleware
app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/clerk", clerkWebhooks)

app.get('/', (req, res)=> res.send("API is working"));
app.use('/api/user', userRouter);
app.use('/api/hotels', hotelRouter);
app.use('/api/rooms', roomRouter);
app.use('/api/bookings', bookingRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
);