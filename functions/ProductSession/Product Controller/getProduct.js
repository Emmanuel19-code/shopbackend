import product from "../../models/productSchema.js";
import { StatusCodes } from "http-status-codes";

export const getSingleProduct = async (req, res) => {
  const { productId } = req.params;

  const items = await product.findOne({ _id: productId });

  if (!items) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: "Product is not available at the moment",
    });
  }

  res.status(StatusCodes.OK).json({ product });
};
