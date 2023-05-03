import {Schema,model} from 'mongoose';

const albumSchema = new Schema({
    albumName: {type: String, required: true},
    artistName: {type: String, required: true},
    releaseDate: {type: String, required: true},
    genre: {type: String, required: true},
    albumArt: {type: String, required: true},
    tracks: [{type:Schema.Types.ObjectId, ref: 'Track'}],
    description: {type: String},
    relesedBy: {type: String},
    recordLabel: {type: String},
    producers: {type: Array},
    featuredArtists: {type: Array},
    reviews: {type: Array},
    catalogNumber: {type: String},
    upc: {type: String},

}, {timestamps: true});

const AlbumCollection = model('Album', albumSchema);

export default AlbumCollection;