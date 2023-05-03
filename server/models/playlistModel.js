import {Schema, model} from 'mongoose';

const playlistSchema = new Schema({
    playlistName: {type: String, required: true},
    playlistArt: {type: String},
    playlistTracks: [{type:Schema.Types.ObjectId, ref: 'Track'}],
    description: {type: String},
    playlistLength: {type: String},
}, {timestamps: true});

const PlaylistCollection = model('Playlist', playlistSchema);

export default PlaylistCollection;