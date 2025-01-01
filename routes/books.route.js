import {Router} from "express";
import { getAllBooks } from "../controllers/books.controller.js";
const router = Router()

router.get("/", getAllBooks)

export default router