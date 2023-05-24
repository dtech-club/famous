import express from 'express';
import { auth } from '../middleware/auth.js';
import { isAdmin } from '../middleware/isAdmin.js';

import { addAlbumToArtist, addTrackToAlbum, createArtist, deleteArtist, getAllArtists, getArtist, updateArtist } from '../controllers/artistController.js';

const router = express.Router();

//routes 
//these routes are for the Admin to manage artists

//get all artists (get)
router.get('/', getAllArtists);
//create artist (post)
//router.post('/', auth, isAdmin, createArtist);
router.post('/', createArtist);
//get artist (get)
router.get('/:id', getArtist);

//get all tracks from an album (get)
//router.get('/tracks/:id', getAllTracks);
//get all albums from an artist (get)
router.get('/albums/:id', getAllArtistAlbums);



//update user (patch)
router.patch('/:id', auth, isAdmin, updateArtist);
// add an album to an artist (patch)
//router.patch('/:id/album', auth, isAdmin, addAlbumToArtist);
router.patch('/:id/album', addAlbumToArtist);
//add a track to an album (patch)
//router.patch('/:id/album/:albumId/track', auth, isAdmin, addTrackToAlbum);
router.patch('/:id/album/:albumId/track', addTrackToAlbum);
//delete user (delete)
router.delete('/:id', auth, isAdmin, deleteArtist);



export default router;
