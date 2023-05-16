import express from "express";

const app = express();

app.post("/artists", async (req, res) => {
  try {
    const { name, genre, image } = req.body;
    const artist = await ArtistCollection.create({ name, genre, image });
    res.status(201).json(artist);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});
