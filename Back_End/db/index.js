import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`\nMongoDB Connected!! DBHOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGO db connection failed", error);
        process.exit(1);
    }
};

export default connectDB;
