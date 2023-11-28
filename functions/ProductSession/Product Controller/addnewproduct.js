import product from "../../models/productSchema.js";
import { StatusCodes } from "http-status-codes";
import cloudinary from "cloudinary";

export const createProduct = async (req, res) => {
  const {name,price,discountpercent,description,cakepicture}=req.body
  if(!(name&&price && discountpercent && description && cakepicture)){
     return res.status(StatusCodes.BAD_REQUEST).json({
      msg:"Please provide the missing data"
     })
  }
  const cloudImage = await cloudinary.v2.uploader.upload(cakepicture, {
    folder: "cakes",
    width: 150,
  });
  const items = await product.create({
    name: name,
    price: price,
    discountpercent: discountpercent,
    description: description,
    image: {
      public_id: cloudImage.public_id,
      url: cloudImage.secure_url,
    },
  });
  res.status(StatusCodes.CREATED).json({ product });
};
