import {Router} from "express";
import { 
    getAllBooks,
    getABookById,
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

export default router