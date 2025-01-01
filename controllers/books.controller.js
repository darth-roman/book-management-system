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
        res.status(500).json({message: error})
    }
}

const insertABook = async (req, res) => {
    try {
        const newBook = {
            book_id: req.body.book_id,
            title: req.body.title,
            author: req.body.author,
            lang: req.body.lang,
            editor: req.body.editor,
            genre: req.body.genre,
            edition: req.body.edition,
            year: req.body.year,
            bought_year: req.body.bought_year,
            price_bought: req.body.price_bought,
            review_link: req.body.review_link,
            tags: req.body.tags,
            read: req.body.read,
        }

        const book = await BookModel.create(newBook)
        if(!book){
            res.status(500).json({message: `Failed to add ${newBook}`})
        }

        res.status(200).json(book)
        return book
    } catch (error) {
        throw new Error(error)
    }
}

const updateABook = async (req, res) => {
    try {
        const bookId = req.params.id
        const rowsAffected = await BookModel.update(req.body, {
            where:{
                book_id: bookId
            }
        })
        if(rowsAffected[0] === 0) res.status(404).json({message: `No book has been updated: ${bookId}`})
        res.status(200).json({message: `Updated ${rowsAffected} rows`})
    }catch(error) {
        throw new Error(error)
    }
}

const deleteABook = async (req, res) => {
    try {
        const bookId = req.params.id
        const deletedRows = await BookModel.destroy({
            where:{
                book_id: bookId
            }
        })
        if(deletedRows === 0) res.status(404).json({message: `No book has been deleted with the id: ${bookId}`})
        res.status(200).json({message: `Deeleted the book with the id: ${bookId} `})
    } catch (error) {
        throw new Error(error)
    }
}
export {
    getAllBooks,
    getABookById,
    insertABook,
    updateABook,
    deleteABook
}