// As we want to connect database of mongoose we'll import mongoose
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB =async () => {
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\nMongoDB connected !! DB HOST:${connectionInstance.connection.host}`);  
    } catch (error) {
        console.error("Connection Error:",error);
    }
}


export default connectDB
// we will import this function and using it in index.js 