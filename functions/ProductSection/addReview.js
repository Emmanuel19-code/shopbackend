
import product from "../models/productSchema.js";
import { StatusCodes } from "http-status-codes";

export const AddReview = async (req, res) => {
  const { _id: product_id } = req.params;
  const { review, rating } = req.body;
  if (!review) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: "You can't make an empty review",
    });
  }
  const item = await product.findOne({ id: product_id });
  //if (!item) {
  //  return res.status(StatusCodes.BAD_REQUEST).json({
  //    msg: "Product is no more available",
  //  });
  //}
  //console.log(item);
  const addreview = item.reviews.push({
    rating: rating,
    comment: review,
    user: "Emmanuel",
  });
  if (!addreview) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: "Could not add your review ",
    });
  }

  let avg = 0;

  item.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  if (item) {
    item.averageRating = avg / item.reviews.length;
  }

  await item.save();
  res.status(StatusCodes.OK).json({
    msg: "review added",
  });
};
