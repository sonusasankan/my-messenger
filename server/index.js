import express from "express";
import dotenv from "dotenv";

//create express server
const app = express();

//configure env
dotenv.config();
const PORT = process.env.PORT || 8080;

//run the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});