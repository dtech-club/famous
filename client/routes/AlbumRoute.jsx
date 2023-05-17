import AlbumCollection from "../../server/models/albumModel.js";

const app = express();

app.post("/albums", async (req, res) => {
  try {
    const { title, artist, year, image } = req.body;
    const album = await AlbumCollection.create({ title, artist, year, image });
    res.status(201).json(album);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});
