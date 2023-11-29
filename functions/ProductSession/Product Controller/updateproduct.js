import product from "../../models/productSchema.js";
import { StatusCodes } from "http-status-codes";

export const updateProduct = async (req, res) => {
  const { id: productId } = req.params;

  const item = await product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!item) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: "Could not be update",
    });
  }
  res.status(StatusCodes.OK).json({ items });
};
