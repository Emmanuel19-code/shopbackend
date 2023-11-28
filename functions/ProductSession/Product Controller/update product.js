import product from "../../models/productSchema.js";
import { StatusCodes } from "http-status-codes";

export const updateProduct = async (req, res) => {
  const { id: productId } = req.params;

  const items = await product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!items) {
    //throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }

  res.status(StatusCodes.OK).json({ product });
};
