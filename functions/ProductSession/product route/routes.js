import express from "express"
import { createProduct } from "../Product Controller/addnewproduct.js";
import { deleteProduct } from "../Product Controller/deleteproduct.js";
import { getSingleProduct } from "../Product Controller/getProduct.js";
import { Product } from "../Product Controller/product.js";

const router = express.Router();


router.post("/create-product",createProduct)
router.delete("/delete-product:proudct_id",deleteProduct)
router.get("/single_product",getSingleProduct)
router.get("/getproducts",Product)


export default router;