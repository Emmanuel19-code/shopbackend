import express from "express";
import {
  ForgotPassword,
  LogOut,
  activateAccount,
  login,
  registeraccount,
} from "../AuthenticationController/index.js";



const router = express.Router();

router.post("/register", registeraccount);
router.post("/login", login);
router.post("/activate-account", activateAccount);
router.post("/signout", LogOut);
router.post("/forgot-password",ForgotPassword);

export default router;
