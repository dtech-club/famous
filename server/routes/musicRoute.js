import express from 'express';
import { auth } from '../middleware/auth.js';
import { isAdmin } from '../middleware/isAdmin.js';
import { getAllArtists, getArtist } from '../controllers/artistController.js';


const router = express.Router();

//routes
//get all artists (get)
router.get('/', getAllArtists);
//get all tracks (get)
router.get('/', getAllTracks);
//get all albums (get)
router.get('/', getAllAlbums);

//get artist (get)
router.get('/:id', getArtist);
//get track (get)
router.get('/:id', getTrack);
//get album (get)
router.get('/:id', getAlbum);






export default router;