import express from "express";
import { handleBookDeleteController, handleBookListController, handleBookStoreController, handleBookUpdateController } from "../controllers/book.controllers.js";
 
const router = express.Router()

router.post("/addbook", handleBookStoreController);

router.get("/booklists", handleBookListController);

router.delete("/booklists/:id", handleBookDeleteController);

router.put("/booklists/:id", handleBookUpdateController);

export default router;