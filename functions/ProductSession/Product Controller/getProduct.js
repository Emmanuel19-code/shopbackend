import product from "../../models/productSchema.js";
import { StatusCodes } from "http-status-codes";

export const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params;

  const items = await product.findOne({ _id: productId })

  if (!items) {
   // throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }

  res.status(StatusCodes.OK).json({ product });
};
