import product from "../../models/productSchema.js";
import { StatusCodes } from "http-status-codes";

export const Product = async (req, res) => {
  const items = await product.find();
  res.status(StatusCodes.OK).json({items });
};
