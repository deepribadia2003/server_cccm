// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI!);
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     process.exit(1);
//   }
// };

// export default connectDB; 


<<<<<<< HEAD

import { MongoClient, ServerApiVersion } from 'mongodb';
=======
// config/db.ts
import mongoose from 'mongoose';
>>>>>>> 754c35f65127b850e23645e65eac9047728be687
import dotenv from 'dotenv';

dotenv.config();

<<<<<<< HEAD
const uri = process.env.MONGO_URI_Prod!

// Create a MongoClient with a MongoClientOptions object
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() {
  try {
    // Connect the client to the server
    await client.connect();
    
    // Send a ping to confirm successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");
    
    return client;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    await client.close();
    process.exit(1);
  }
}

// Graceful shutdown handling
process.on('SIGINT', async () => {
  await client.close();
  console.log('MongoDB connection closed due to app termination');
  process.exit(0);
});
=======
const uri = process.env.MONGO_URI_Prod!;

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return; // already connected

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any); // `as any` to satisfy TypeScript

    console.log("✅ Successfully connected to MongoDB via Mongoose!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};
>>>>>>> 754c35f65127b850e23645e65eac9047728be687

export default connectDB;
