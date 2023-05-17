import { Schema, model } from 'mongoose';

const artistSchema = new Schema(
    {
        artisName: { type: String, required: true },
        artistImage: { type: Schema.Types.ObjectId, ref: 'ArtistImages' },
        city: { type: String },
        state: { type: String },
        biography: { type: String },
        genres: { type: Array },
        albums: [{ type: Schema.Types.ObjectId, ref: 'Album' }],
    },
    { timestamps: true }
);

const ArtistCollection = model('Artist', artistSchema);

export default ArtistCollection;
