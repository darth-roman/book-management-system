import {Router} from "express";
import { 
    getAllBooks,
    getABookById
 } from "../controllers/books.controller.js";
const router = Router()

router.get("/", getAllBooks)
router.get("/:id", getABookById)

export default router