import express from 'express';
import "dotenv/config.js"
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express';


connectDB()

const app = express()
app.use(cors())

//middleware
app.use(express.json())
app.use(clerkMiddleware())

//goi api clerk webhook
import clerWebhooks from './controllers/clerkWebhooks.js';
import userRoutes from './routes/userRoutes.js';
app.use("/api/clerk", clerWebhooks);


app.get('/', (req, res) => res.send('api is running'))
app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
);