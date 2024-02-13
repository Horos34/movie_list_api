import express from "express";
import dotenv from "dotenv"

dotenv.config()

const app = express();

const PORT = process.env.APP_PORT || 4000;

app.get("/", (req, res) => {
    res.status(200).send("Bonjour")
    
});

app.listen(PORT, () => console.log(`⚡le serveur est lancé sur 👉 https://localhost:${PORT}`));