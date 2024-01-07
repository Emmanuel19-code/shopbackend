import user from "../models/userSchema";

export const profileInfo = async (req, res) => {
  const { uniqueId } = req.user.uniqueId;
  const f_user = await user
    .findOne({ uniqueId: uniqueId })
    .select("name email avatar accountid");
  if (!f_user) {
    return res.status(400).json({
      msg: "please try",
    });
  }
  res.status(200).json({
    msg: f_user,
  });
};
