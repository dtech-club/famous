import {Schema, model} from 'mongoose';

const trackSchema = new Schema({
    trackName: {type: String, required: true},
    artistName: {type: String, required: true},
    albumName: {type: String, required: true},
    releaseDate: {type: String, required: true},
    genre: {type: String, required: true},
    trackArt: {type: String},
    trackFile: {type: String, required: true},
    trackLength: {type: String, required: true},
    description: {type: String},
    relesedBy: {type: String},
    recordLabel: {type: String},
    producers: {type: Array},
    featuredArtists: {type: Array},
    reviews: {type: Array},
}, {timestamps: true});

const TrackCollection = model('Track', trackSchema);

export default TrackCollection;