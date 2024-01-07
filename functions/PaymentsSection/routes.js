import express from "express"
import { paymentforOrder } from "./makepayment.js";

const router = express.Router();

router.post("/payment-sheet",paymentforOrder)


export default router
