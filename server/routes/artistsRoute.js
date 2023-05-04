import express from 'express';
import { auth } from '../middleware/auth.js';
import { isAdmin } from '../middleware/isAdmin.js';

import { createArtist, deleteArtist, getAllArtists, getArtist, updateArtist } from '../controllers/artistController.js';

const router = express.Router();

//routes 
//these routes are for the Admin to manage artists

//get all artists (get)
router.get('/', getAllArtists);
//get artist (get)
//create artist (post)
router.post('/', auth, isAdmin, createArtist);
router.get('/:id', getArtist);
//update user (patch)
router.patch('/:id', auth, isAdmin, updateArtist);
//delete user (delete)
router.delete('/:id', auth, isAdmin, deleteArtist);



export default router;
