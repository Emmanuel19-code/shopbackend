import product from "../../models/productSchema.js";
import { StatusCodes } from "http-status-codes";


export const deleteProduct = async (req, res) => {
  const { product_id } = req.params;

  const items = await product.findOne({ _id: product_id });

  if (!items) {
   // throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }

  await product.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Product removed." });
};
