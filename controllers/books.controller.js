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

export {
    getAllBooks
}