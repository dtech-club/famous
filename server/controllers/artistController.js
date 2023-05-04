import FanCollection from '../models/fanModel.js';
import ArtistCollection from '../models/artistModel.js';
import AlbumCollection from '../models/albumModel.js';
import TrackCollection from '../models/trackModel.js';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getAllArtists = async (req, res) => {
    try {
        const artists = await ArtistCollection.find();
        res.json({ success: true, data: artists });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};
export const createArtist = async (req, res) => {
    try {
        const artist = new ArtistCollection(req.body);
        await artist.save();
        res.json({ success: true, data: artist });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};
export const getArtist = async (req, res) => {
    try {
        const { id } = req.params;
        const artist = await ArtistCollection.findById(id);
        if (artist) {
            res.json({ success: true, data: artist });
        } else {
            res.json({ success: false, message: 'Artist not found' });
        }
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};

export const updateArtist = async (req, res) => {
    try {
        const { id } = req.params;
        const updateArtist = await ArtistCollection.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        res.json({ success: true, data: updateArtist });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};

export const deleteArtist = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedArtist = await ArtistCollection.findByIdAndDelete(id);
        res.json({ success: true, data: deletedArtist });
    } catch {
        res.json({ success: false, message: err.message });
    }
}
