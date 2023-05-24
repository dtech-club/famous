import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import fileupload from 'express-fileupload';
import stream from 'stream';

import artistsRoute from './routes/artistsRoute.js';
import musicRoute from './routes/musicRoute.js';
import userRoute from './routes/userRoute.js';
import ArtistImageCollection from './models/artistImageModel.js';
import AlbumImageCollection from './models/albumImageModel.js';

dotenv.config();

const app = express();



app.use(express.json());
//urlencoded
app.use(express.urlencoded({ extended: true }));
//handling fileupload
app.use(fileupload());  
// serving static files
app.use(express.static('views/dist'))


app.use(cors({ exposedHeaders: ['auth-token'] }));
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECTION)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

//Server routes
app.use('/artists', artistsRoute);
app.use('/users', userRoute)
app.use('/music', musicRoute);

app.get('/artistimages/:filename', async (req, res) => {
    const artistImage = await ArtistImageCollection.findOne({ filename: req.params.filename });
    const readStream = stream.Readable.from(artistImage.data)
    readStream.pipe(res);
})

app.get('/albumimages/:filename', async (req, res) => {
    const albumImage = await AlbumImageCollection.findOne({ filename: req.params.filename });
    const readStream = stream.Readable.from(albumImage.data)
    readStream.pipe(res);
})

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
