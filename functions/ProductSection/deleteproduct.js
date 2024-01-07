import product from "../models/productSchema.js";
import { StatusCodes } from "http-status-codes";

export const deleteProduct = async (req, res) => {
  const { product_id } = req.params;

  const items = await product.findOne({ _id: product_id });

  if (!items) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: "This product is not available",
    });
  }

  await product.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Product removed." });
};
