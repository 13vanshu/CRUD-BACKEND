import express from 'express';
import { database } from './config/database.js';
import bookRoute from './routes/book.routes.js';
import signupRoute from './routes/signup.routes.js';
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend working 🚀" });
});

app.use("/books", bookRoute)
app.use("/signup", signupRoute)


const PORT = 2000;
app.listen(PORT,() => {
    console.log(`Server running on http://localhost:${PORT}`);
    database();
})

export default app;