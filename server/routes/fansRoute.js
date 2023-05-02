import express from 'express';
import { auth } from '../middleware/auth.js';
import { isAdmin } from '../middleware/isAdmin.js';
import { isArtist } from '../middleware/isArtist.js';

const router = express.Router();

//routes

export default router;