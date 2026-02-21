import mongoose from "mongoose";

export const database = async () => {
    try {
        await mongoose.connect("mongodb+srv://vanshchhoda28_db_user:JXQxu54lQMgKKGdp@crud.gxolsrr.mongodb.net/?appName=CRUD")
        console.log(mongoose.connection.readyState);
    } catch (error) {
        console.log(error);   
    }
}