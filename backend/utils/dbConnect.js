import mongoose from "mongoose";
import 'dotenv/config'
export async function dbConnect() {
    // console.log(process.env.MONGO_URI)
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to mongodb database ${mongoose.connection.host}`)
    }
    catch (error) {
        console.log(`Error in mongoDB ${error}`)
    }
}
