import mongoose from "mongoose";

// set connection to mongo database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // extra arguments needed to stop mongo warnings
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    // notify with error message and kill the process
    console.log(`Error ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
