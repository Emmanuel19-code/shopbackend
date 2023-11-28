import express from "express"
import { paymentforOrder } from "./controllers/makepayment.js";

const router = express.Router();

router.post("/payment-sheet",paymentforOrder)


export default router
