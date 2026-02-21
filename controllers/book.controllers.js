import { Book } from "../model/book.model.js";

export const handleBookStoreController = async (req, res) => {

    try {
        const body = req.body

        if (!body.BookName || !body.BookTitle || !body.Author || !body.SellingPrice) {
            return res.status(400).json({ Message: "All Field Required", Success: false })
        }

        const existingBook = await Book.findOne({
            BookName: body.BookName.toLowerCase()
        });

        if (existingBook) {
            return res.status(409).json({
                message: "Book already exists ❌",
                Success: false
            });
        }

        const bookAdd = await Book.create(body)
        if (bookAdd) {
            return res.status(201).json({ message: "Book Added Successfully", Success: true, Id: bookAdd._id })
        }

    } catch (error) {

        return res.status(500).json({ Message: error.message, Success: false })
    }

};

export const handleBookListController = async (req, res) => {
    try {

        const bookList = await Book.find({});

        console.log("Fetched Books 📚:", bookList);

        return res.status(200).json({
            Message: "All Books fetch successfully",
            Success: true,
            TotalCount: bookList.length,
            BookList: bookList
        });

    } catch (error) {
        return res.status(400).json({
            Message: error.message,
            Success: false
        });
    }
};

export const handleBookDeleteController = async (req, res) => {
    try {

        const deleteBook = await Book.findByIdAndDelete(req.params.id);

        if(!deleteBook){
            return res.status(404).json({
                message: "Book  Not Found",
                success: false
            });
        }

        return res.status(200).json({
            success: true,
            message: "Book Deleted Successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const handleBookUpdateController = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!body.BookName || !body.BookTitle || !body.Author || !body.SellingPrice) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const update = await Book.findByIdAndUpdate(
            id,
            body,
            {new:true}
        );

        if (!update) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Book Updated Successfully",
            data: update
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};