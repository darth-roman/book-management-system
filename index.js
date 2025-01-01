import express from "express";

import booksRouter from "./routes/books.route.js"

import * as dotenv from "dotenv"
dotenv.config()
import "./config/db.js"



const PORT = process.env.APP_PORT
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/books",booksRouter)



app.listen(PORT, ()=>{
    console.log("App started at: ", PORT);
})