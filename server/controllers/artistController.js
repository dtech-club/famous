//import FanCollection from '../models/fanModel.js';
import ArtistCollection from '../models/artistModel.js';
import AlbumCollection from '../models/albumModel.js';
import TrackCollection from '../models/trackModel.js';
import TrackFileCollection from '../models/trackFileModel.js';
import ArtistImageCollection from '../models/artistImageModel.js';
import AlbumImageCollection from '../models/albumImageModel.js';

export const getAllArtists = async (req, res) => {
    try {
        const artists = await ArtistCollection.find().populate({
            path: 'albums',
            populate: { path: 'tracks', model: 'Track' },
        });
        res.json({ success: true, data: artists });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};
export const createArtist = async (req, res) => {
    try {
        const artist = new ArtistCollection(req.body);
        if (req.files) {
            const artistImage = new ArtistImageCollection({
                filename:
                    new Date().getTime() + '_' + req.files.artistImage.name,
                data: req.files.artistImage.data,
<<<<<<< HEAD
                userId: artist._id
        })
=======
                userId: artist._id,
            });
>>>>>>> 950801b8c9a0b272589b077be00a1a4a19e81dba
            await artistImage.save();
            artist.artistImage = `http://localhost:4000/artistimages/${artistImage.filename}`;
        }

        await artist.save();
        res.json({ success: true, data: artist });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};
export const getArtist = async (req, res) => {
    try {
        const { id } = req.params;
        const artist = await ArtistCollection.findById(id).populate('albums');
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
};

export const addAlbumToArtist = async (req, res) => {
    try {
        const { id } = req.params;
        const artist = await ArtistCollection.findById(id);
        const album = new AlbumCollection(req.body);
        if (req.files) {
            const albumImage = new AlbumImageCollection({
                filename:
                    new Date().getTime() + '_' + req.files.albumImage.name,
                data: req.files.albumImage.data,
                userId: album._id,
            });
            await albumImage.save();
            album.albumImage = `http://localhost:4000/albumimages/${albumImage.filename}`;
        }
        artist.albums.push(album);
        await artist.save();
        await album.save();
        res.json({ success: true, data: artist });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};
//patch album
export const patchAlbumToArtist = async (req, res) => {
    try {
        const { id, albumId } = req.params;
        const artist = await ArtistCollection.findById(id);
        const album = await AlbumCollection.findById(albumId);
        const updateAlbum = await AlbumCollection.findByIdAndUpdate(
            albumId,
            req.body,
            { new: true }
        );
        res.json({ success: true, data: updateAlbum });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};

export const addTrackToAlbum = async (req, res) => {
    try {
        const { id, albumId } = req.params;
        const artist = await ArtistCollection.findById(id);
        const album = await AlbumCollection.findById(albumId);
        const track = new TrackCollection(req.body);

        if (req.files) {
            const trackFile = new TrackFileCollection({
                filename:
                    new Date().getTime() +
                    '_' +
                    req.files.trackFile.name.split(' ').join('_'),
                data: req.files.trackFile.data,
                userId: track._id,
            });
            await trackFile.save();
            track.trackFile = `http://localhost:4000/trackfiles/${trackFile.filename}`;
        }

        //artist.albums.push(album);
        album.tracks.push(track);
        await artist.save();
        await album.save();
        await track.save();
        res.json({ success: true, data: artist });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};
// patch track
export const patchTrackToAlbum = async (req, res) => {
    try {
        const { id, albumId, trackId } = req.params;
        const artist = await ArtistCollection.findById(id);
        const album = await AlbumCollection.findById(albumId);
        const track = await TrackCollection.findById(trackId);
        const updateTrack = await TrackCollection.findByIdAndUpdate(
            trackId,
            req.body,
            { new: true }
        );
        res.json({ success: true, data: updateTrack });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
}


export const deleteAlbumFromArtist = async (req, res) => {
    try {
        const { id, albumId } = req.params;
        const artist = await ArtistCollection.findById(id);
        const album = await AlbumCollection.findById(albumId);
        artist.albums.pull(album);
        await artist.save();
        //await artist.albums.remove();
        await AlbumCollection.findByIdAndRemove(albumId);
        res.json({ success: true, data: artist });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};

export const deleteTrackFromAlbum = async (req, res) => {
    try {
        const { id, albumId, trackId } = req.params;
        const artist = await ArtistCollection.findById(id);
        const album = await AlbumCollection.findById(albumId);
        const track = await TrackCollection.findById(trackId);
        album.tracks.pull(track);
        await artist.save();
        await album.save();
        await TrackCollection.findByIdAndRemove(trackId);
        

        
        res.json({ success: true, data: artist });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};
