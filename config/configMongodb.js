//load dependencies
import mongoose from "mongoose";

export const createConnectionToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/devschool");
        console.log(` Connected to MongoDB Successfully`.bgBlue.white.bold);
    } catch (err) {
        console.log(` Connection Failed: ${err.message} `.bgRed.cyan.bold);
    }
};
