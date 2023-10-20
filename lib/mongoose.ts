import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_API) {
    return console.log("missing mongo api");
  }
  if (isConnected) {
    return console.log("MongoDB already connected");
  }

  try {
    await mongoose.connect(process.env.MONGO_API, {
      dbName: "DEVFLOW",
    });
    isConnected = true;
    console.log("Mongodb is Connected");
  } catch (err) {
    console.log("There was an error connecting to MongoDB: ", err);
  }
};
