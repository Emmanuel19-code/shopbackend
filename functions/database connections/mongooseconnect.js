import mongoose from "mongoose";
import {} from "dotenv/config";

export const connection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://EmmanuelBos:${process.env.DATABASE_PASSWORD}@cluster0.xycl06r.mongodb.net/CAKESHOP?retryWrites=true&w=majority`
    );
    console.log("connected to the database");
  } catch (error) {
    console.log("An error occured while connecting to the database");
  }
};

//mongodb+srv://EmmanuelBos:<password>@cluster0.xycl06r.mongodb.net/?retryWrites=true&w=majority