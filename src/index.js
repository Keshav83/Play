import dotenv from "dotenv"
import moongoose from "mongoose";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path : './.env'
});



connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("Error !!!",error)
        throw error
    })
    app.listen(process.env.PORT || 8000,() => {
        console.log(`server is running on port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log(`failed to connect MongoDB`,error)
})













/*
const app = express();
(async () => {
    try {
        await moongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on('error', (error) => {
            console.error('Error connecting to MongoDB:', error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
})();

*/

