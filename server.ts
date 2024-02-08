import express from "express";
import dotenv from "dotenv"
import JsonWebToken from "./src/middlewares/JsonWebToken";

dotenv.config()

const app = express();

const PORT = process.env.APP_PORT || 4000;

app.get("/", (req, res) => {
    let test = JsonWebToken.auth(req.body)
    console.log(test);
    
});

app.listen(PORT, () => console.log(`⚡le serveur est lancé sur 👉 https://localhost:${PORT}`));