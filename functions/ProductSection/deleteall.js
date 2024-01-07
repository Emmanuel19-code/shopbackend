import product from "../models/productSchema.js";
import { StatusCodes } from "http-status-codes";

export const deleteAllProduct = async (req, res) => {
  const items = await product.deleteMany();
  res.status(StatusCodes.OK).json({ msg: "Success! Product removed." });
};
