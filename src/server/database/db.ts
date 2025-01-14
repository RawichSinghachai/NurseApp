import mongoose from "mongoose";

const MONGO_URI = process.env.NEXT_PUBLIC_MONGODB;

export default async function connectMongo() {
    if (!MONGO_URI) {  
        throw new Error('Please define the MONGO_URI environment variable inside .env.local');  
    }

    try {
        const connection = await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB successfully');
        return connection;
    } catch (error ) {
        if (error instanceof Error) {
            console.error('Failed to connect to MongoDB:', error.message);
        } else {
            console.error('Failed to connect to MongoDB:', error);
        }
        throw new Error('Database connection failed. Check the MongoDB URI and try again.');
    }
}
