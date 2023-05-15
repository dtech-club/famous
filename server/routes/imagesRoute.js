import express from "express";
import { uploadArtistImage } from "../controllers/artistImageController";

const router = express.Router();

// Route for handling the upload of the artist image
router.post("/upload", uploadArtistImage);

export default router;
