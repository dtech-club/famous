import { Schema, model } from 'mongoose';

const artistSchema = new Schema(
    {
        artisName: { type: String, required: true },
        address: { type: String },
        city: { type: String },
        state: { type: String },
        zip: { type: String },
        phone: { type: String },
        biography: { type: String },
        artistImage: { type: String },
        genres: { type: Array },
        albums: [{ type: Schema.Types.ObjectId, ref: 'Album' }],
    },
    { timestamps: true }
);

const ArtistCollection = model('Artist', artistSchema);

export default ArtistCollection;
