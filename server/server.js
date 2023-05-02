import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ exposedHeaders: ['auth-token'] }));

mongoose.connect(process.env.DB_CONNECTION)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

//Server routes



app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
