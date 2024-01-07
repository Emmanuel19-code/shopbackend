import express from "express"
import { createProduct } from "./addnewproduct.js";
import { deleteProduct } from "./deleteproduct.js";
import { getSingleProduct } from "./getProduct.js";
import { Product } from "./product.js";
import { deleteAllProduct } from "./deleteall.js";
import { AddReview } from "./addReview.js";
import {updateProduct} from "./updateproduct.js"

const router = express.Router();


router.post("/create-product",createProduct)
router.delete("/delete-product:proudct_id",deleteProduct)
router.get("/single_product",getSingleProduct)
router.get("/getproducts",Product)
router.delete("/delete",deleteAllProduct)
router.post("/addreview:product_id",AddReview)
router.put("/updateproduct:product_id",updateProduct)

export default router;