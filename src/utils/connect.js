import mongoose from "mongoose";

export async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit the process if the connection fails
    }

    mongoose.connection.on("disconnected", () => {
        console.warn("MongoDB disconnected. Attempting to reconnect...");
        connectDb(); // Reattempt connection on disconnection
    });
}


// old connection code
// import mongoose from "mongoose"

// export function connectDb(){
//     try{
//         mongoose.connect(process.env.MONGO_URL)
//     }
//     catch(error){
//         console.error(error)
//     }

// }