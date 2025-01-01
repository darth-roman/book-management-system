import express from "express";
import "./config/db.js"
import * as dotenv from "dotenv"
dotenv.config()

const PORT = process.env.APP_PORT

const app = express()



app.listen(PORT, ()=>{
    console.log("App started at: ", PORT);
})