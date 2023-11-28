import mongoose from "mongoose";

const FlavorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
});

const reviewSchema = new mongoose.Schema({
  user: {
    type: String,
  },
  rating: {
    type: Number,
  },
  comment: String,
});

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide product name"],
      maxlength: [100, "Name can not be more than 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please provide product price"],
      default: 0,
    },
    discountprice: {
      type: Number,
      default: 0,
    },
    discountpercent: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      required: [true, "Please provide product description"],
      maxlength: [1000, "Description can not be more than 1000 characters"],
    },
    image: {
      public_id: String,
      url: String,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [reviewSchema],
    AdditionalFlavors: [FlavorSchema],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);



const product = mongoose.model("product", ProductSchema);

export default product;
