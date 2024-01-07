import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connection } from "./database connections/mongooseconnect.js";
import {} from "dotenv/config";
import cloudinaryconnect from "./database connections/cloudinaryconnect.js";
import AuthRoute from "./AuthSection/routes.js"
import ProfileRoute from "./ProfileSection/routes.js"
import ProductRoute from "./ProductSection/routes.js"
import PaymentRoute from "./PaymentsSection/routes.js"
import functions from "firebase-functions"


const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser(process.env.COOKIE_PARSER_SECRET));

app.get("/start", (req, res) => {
  res.status(200).json({
    msg: "your server is running smoothly",
  });
});

app.use("/v1/auth", AuthRoute);
app.use("/v1/users", ProfileRoute);
app.use("/v1/product", ProductRoute);
app.use("/v1/payment", PaymentRoute);

//mongodb connection
connection();

//cloudinary connections
cloudinaryconnect;



export const api = functions.https.onRequest(app);
 