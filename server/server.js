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

app.get('/', (req, res) =>
     res.send('api is running')
)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
);