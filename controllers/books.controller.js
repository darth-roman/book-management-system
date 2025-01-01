import { json } from "sequelize";
import BookModel from "../models/Book.model.js";

const getAllBooks = async (req, res) => {
    try{
        const books = await BookModel.findAll()
        res.status(200).json(books)
        return books
    }catch(error){
        throw new Error(error)
    }
}

const getABookById = async (req, res) => {
    try{
        const book = await BookModel.findByPk(req.params.id)
        if(!book){
            res.status(404).json({message: `No book has been found for id: ${req.params.id}`})
        }
        res.status(200).json(book)
        return book
    }catch(error) {
        
    }
}


export {
    getAllBooks,
    getABookById
}