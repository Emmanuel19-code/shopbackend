import { Trycatch } from "../../middlewares/trycatch.js";
import user from "../../models/userSchema.js";
import {
  storeactivatetoken,
} from "../../utils/cookieExpiration.js";
import { StatusCodes } from "http-status-codes";



export const ForgotPassword = Trycatch(async (req, res) => {
  const { user_email } = req.body;
  if (!user_email) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: "field cannot be empty",
    });
  }
  const isUser = await user.findOne({ email: user_email });
  if (!isUser) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: "User not found",
    });
  }
  const token = isUser.createActivationToken();
  const activationtoken = token.activationtoken;
  storeactivatetoken({ res, activationtoken });
  res.status(StatusCodes.OK).json({
    msg: "ohk",
  });
});
