import { Schema, model } from 'mongoose';

const fanSchema = new Schema(
    {
        userName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, default: 'fan' },
        address: { type: String },
        city: { type: String },
        state: { type: String },
        zip: { type: String },
        phone: { type: String },
        biography: { type: String },
        profilePic: { type: String },
        favoriteArtists: [{ type: Schema.Types.ObjectId, ref: 'Artist' }],
        favoriteAlbums: [{ type: Schema.Types.ObjectId, ref: 'Album' }],
        playlist: [{ type: Schema.Types.ObjectId, ref: 'Track' }],
    },
    { timestamps: true }
);

const FanCollection = model('Fan', fanSchema);

export default FanCollection;
