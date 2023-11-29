import product from "../../models/productSchema.js";
import { StatusCodes } from "http-status-codes";

export const AddReview = async (req, res) => {
  const { _id:product_id } = req.params;
  const { review, rating } = req.body;
  if (!review) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: "You can't make an empty review",
    });
  }
  const item = await product.findOne({ _id: product_id });
  console.log(item);
  if (!item) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: "Product is no more available",
    });
  }
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

  let avg = 0

  item.reviews.foreach((rev)=>{
    avg += rev.rating
  })
  
  if(item){
     item.averageRating = avg / item.reviews.length
  }
  
  await item.save()
  res.status(StatusCodes.OK).json({
    msg: "review added",
  });
};
