import user from "../models/userSchema";

export const addtofav = async (req, res) => {
  const { product_id } = req.body;
  const { uniqueId } = req.user.uniqueId;
  const f_user = await user.findOne({ uniqueId: uniqueId });
  const addto = f_user.favorites.push(product_id);
  if (!addto) {
    return res.status(400).json({
      msg: "could not add to favorites",
    });
  }
  res.status(200).json({
    msg: "successfully added to favorites",
  });
};

export const removefromfav = async (req, res) => {
  const { product_id } = req.body;
  const { uniqueId } = req.user.uniqueId;
  const f_user = await user.findOne({ uniqueId: uniqueId });
  res.status(200).json({
    msg: "successfully removed from favorites",
  });
};
