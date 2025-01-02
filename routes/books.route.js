import {Router} from "express";
import { 
    getAllBooks,
    getABookById,
    getBooksByGenre,
    getBooksByAuthor,
    insertABook,
    updateABook,
    deleteABook
} from "../controllers/books.controller.js";

const router = Router()

router.get("/", getAllBooks)
router.get("/:id", getABookById)
router.post("/", insertABook)
router.put("/:id", updateABook)
router.delete("/:id", deleteABook)
router.get("/genre/:genre", getBooksByGenre)
router.get("/author/:author", getBooksByAuthor)
export default router