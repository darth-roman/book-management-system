import {Router} from "express";
import { 
    getAllBooks,
    getABookById,
    insertABook
} from "../controllers/books.controller.js";

const router = Router()

router.get("/", getAllBooks)
router.get("/:id", getABookById)
router.post("/", insertABook)

export default router