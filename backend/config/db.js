import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shp5669:qkrtkdgus12@cluster0.lolojgf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
};

// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
