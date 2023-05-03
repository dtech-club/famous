import { Schema, model } from 'mongoose';

const artistSchema = new Schema(
    {
        artisName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, default: 'artist' },
        address: { type: String },
        city: { type: String },
        state: { type: String },
        zip: { type: String },
        phone: { type: String },
        biography: { type: String },
        profilePic: { type: String },
        genres: { type: Array },
        albums: [{ type: Schema.Types.ObjectId, ref: 'Album' }],
    },
    { timestamps: true }
);

const ArtistCollection = model('Artist', artistSchema);

export default ArtistCollection;
